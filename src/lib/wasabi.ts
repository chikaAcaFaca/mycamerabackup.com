import { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand, ListObjectsV2Command } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

// Wasabi S3-compatible client
// Pricing: $6.99/TB/month, zero egress (1:1 ratio), zero API fees
// Region: eu-central-2 (Frankfurt, Germany) for GDPR compliance
export const wasabiClient = new S3Client({
  region: process.env.WASABI_REGION || "eu-central-2",
  endpoint: process.env.WASABI_ENDPOINT || "https://s3.eu-central-2.wasabisys.com",
  credentials: {
    accessKeyId: process.env.WASABI_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.WASABI_SECRET_ACCESS_KEY || "",
  },
  forcePathStyle: true,
});

const BUCKET = process.env.WASABI_BUCKET || "mycamerabackup-uploads";

// Max upload size: 900MB per file
const MAX_UPLOAD_SIZE = 900 * 1024 * 1024;

/**
 * Generate a presigned URL for direct upload from client
 * User's browser uploads directly to Wasabi (no server bandwidth cost)
 */
export async function getUploadPresignedUrl(
  userId: string,
  fileName: string,
  contentType: string,
  fileSize: number,
): Promise<{ url: string; key: string }> {
  if (fileSize > MAX_UPLOAD_SIZE) {
    throw new Error(`Fajl je prevelik. Maksimalna veličina je ${MAX_UPLOAD_SIZE / 1024 / 1024}MB.`);
  }

  const key = `users/${userId}/originals/${Date.now()}-${fileName}`;

  const command = new PutObjectCommand({
    Bucket: BUCKET,
    Key: key,
    ContentType: contentType,
    ContentLength: fileSize,
    // Server-side encryption
    ServerSideEncryption: "AES256",
  });

  const url = await getSignedUrl(wasabiClient, command, { expiresIn: 3600 });

  return { url, key };
}

/**
 * Generate a presigned URL for download/preview
 */
export async function getDownloadPresignedUrl(key: string): Promise<string> {
  const command = new GetObjectCommand({
    Bucket: BUCKET,
    Key: key,
  });

  return getSignedUrl(wasabiClient, command, { expiresIn: 3600 });
}

/**
 * Delete a file from storage
 */
export async function deleteFile(key: string): Promise<void> {
  const command = new DeleteObjectCommand({
    Bucket: BUCKET,
    Key: key,
  });

  await wasabiClient.send(command);
}

/**
 * List files for a user with pagination
 */
export async function listUserFiles(
  userId: string,
  continuationToken?: string,
  maxKeys = 100,
) {
  const command = new ListObjectsV2Command({
    Bucket: BUCKET,
    Prefix: `users/${userId}/originals/`,
    MaxKeys: maxKeys,
    ContinuationToken: continuationToken,
  });

  const response = await wasabiClient.send(command);

  return {
    files: (response.Contents || []).map((obj) => ({
      key: obj.Key!,
      size: obj.Size!,
      lastModified: obj.LastModified!,
      fileName: obj.Key!.split("/").pop()!,
    })),
    nextToken: response.NextContinuationToken,
    hasMore: response.IsTruncated || false,
  };
}

/**
 * Calculate storage used by a user (in bytes)
 */
export async function getUserStorageUsed(userId: string): Promise<number> {
  let totalSize = 0;
  let continuationToken: string | undefined;

  do {
    const command = new ListObjectsV2Command({
      Bucket: BUCKET,
      Prefix: `users/${userId}/`,
      ContinuationToken: continuationToken,
    });

    const response = await wasabiClient.send(command);
    totalSize += (response.Contents || []).reduce((sum, obj) => sum + (obj.Size || 0), 0);
    continuationToken = response.NextContinuationToken;
  } while (continuationToken);

  return totalSize;
}
