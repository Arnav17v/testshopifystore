import { revalidate } from "@/lib/shopify";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  console.log("🔔 Webhook received at /api/revalidate");
  
  // Handle ngrok browser warning bypass
  const userAgent = req.headers.get("user-agent") || "";
  if (userAgent.includes("ngrok")) {
    // This is ngrok's health check, just return 200
    return NextResponse.json({ status: 200, message: "ngrok health check" });
  }
  
  const result = await revalidate(req);
  console.log("✅ Webhook processed:", result);
  return result;
}

// Also handle GET requests (for ngrok browser warning page)
export async function GET() {
  return NextResponse.json({ 
    status: 200, 
    message: "Revalidation endpoint - use POST for webhooks" 
  });
}
