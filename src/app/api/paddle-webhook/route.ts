import { paddle } from "@/lib/paddle";
import { NextRequest, NextResponse } from "next/server";

/**
 * Paddle Webhook Handler
 *
 * Configure webhook URL in Paddle Dashboard:
 * https://mycamerabackup.com/api/paddle-webhook
 *
 * Events to subscribe to:
 * - subscription.created / .updated / .canceled / .past_due
 * - transaction.completed / .paid
 * - customer.created / .updated
 */
export async function POST(request: NextRequest) {
  const signature = request.headers.get("paddle-signature") ?? "";
  const body = await request.text();

  if (!signature || !body) {
    return new NextResponse("Missing signature or body", { status: 400 });
  }

  try {
    const event = await paddle.webhooks.unmarshal(
      body,
      process.env.PADDLE_WEBHOOK_SECRET_KEY!,
      signature,
    );

    // Access event data via the typed event object
    const eventType = event.eventType;

    switch (eventType) {
      case "subscription.created":
        // New subscription → provision user access, set storage quota
        console.log("[Paddle] Subscription created:", event.data.id);
        break;

      case "subscription.updated":
        // Plan change, payment method update
        console.log("[Paddle] Subscription updated:", event.data.id);
        break;

      case "subscription.canceled":
        // Canceled (may still be active until end of billing period)
        console.log("[Paddle] Subscription canceled:", event.data.id);
        break;

      case "subscription.past_due":
        // Payment failed, subscription at risk
        console.log("[Paddle] Subscription past due:", event.data.id);
        break;

      case "transaction.completed":
        // Payment confirmed - safe to provision
        console.log("[Paddle] Transaction completed:", event.data.id);
        break;

      case "transaction.paid":
        // Payment received (occurs before completed)
        console.log("[Paddle] Transaction paid:", event.data.id);
        break;

      case "customer.created":
      case "customer.updated":
        // Sync customer data
        console.log("[Paddle] Customer event:", eventType, event.data.id);
        break;

      default:
        console.log("[Paddle] Unhandled event:", eventType);
    }
  } catch (error) {
    console.error("[Paddle] Webhook verification failed:", error);
    return new NextResponse("Webhook verification failed", { status: 401 });
  }

  return new NextResponse("OK", { status: 200 });
}
