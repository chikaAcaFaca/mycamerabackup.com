import { getUploadPresignedUrl } from "@/lib/wasabi";
import { NextRequest, NextResponse } from "next/server";

/**
 * Generate presigned URL for direct upload to Wasabi S3
 *
 * Client flow:
 * 1. POST /api/upload { fileName, contentType, fileSize }
 * 2. Receive { uploadUrl, key }
 * 3. PUT file directly to uploadUrl (browser → Wasabi, no server bandwidth)
 * 4. POST /api/upload/confirm { key } to finalize
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fileName, contentType, fileSize } = body;

    if (!fileName || !contentType || !fileSize) {
      return NextResponse.json(
        { error: "Nedostaju parametri: fileName, contentType, fileSize" },
        { status: 400 },
      );
    }

    // TODO: Replace with actual authenticated user ID from session
    const userId = "demo-user";

    // Validate file type
    const allowedTypes = [
      // RAW formats
      "image/x-canon-cr2", "image/x-canon-cr3", "image/x-nikon-nef",
      "image/x-sony-arw", "image/x-fuji-raf", "image/x-olympus-orf",
      "image/x-panasonic-rw2", "image/x-adobe-dng", "image/x-pentax-pef",
      // Standard image formats
      "image/jpeg", "image/png", "image/tiff", "image/heic", "image/heif",
      "image/webp", "image/bmp", "image/gif", "image/svg+xml",
      // Video formats
      "video/mp4", "video/quicktime", "video/x-msvideo", "video/x-ms-wmv",
      "video/webm", "video/3gpp", "video/x-matroska",
    ];

    if (!allowedTypes.includes(contentType)) {
      return NextResponse.json(
        { error: `Nepodržan format fajla: ${contentType}` },
        { status: 400 },
      );
    }

    const { url, key } = await getUploadPresignedUrl(
      userId,
      fileName,
      contentType,
      fileSize,
    );

    return NextResponse.json({ uploadUrl: url, key });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Greška pri generisanju upload URL-a";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
