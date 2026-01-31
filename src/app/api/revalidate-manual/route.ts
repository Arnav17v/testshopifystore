import { revalidateTag } from "next/cache";
import { TAGS } from "@/lib/constants";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    revalidateTag(TAGS.products, "max");
    revalidateTag(TAGS.collections, "max");
    
    return NextResponse.json({ 
      success: true, 
      message: "Cache revalidated successfully",
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: "Failed to revalidate cache" 
    }, { status: 500 });
  }
}
