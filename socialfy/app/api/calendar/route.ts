import { db } from "@/lib/db";
import { posts } from "@/lib/db/schema";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { eq, and, gte, lte } from "drizzle-orm";

export async function GET(req: Request) {
  const { userId } = await auth();
  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const start = searchParams.get("start");
  const end = searchParams.get("end");

  try {
    let query = db.select().from(posts).where(eq(posts.userId, userId));

    if (start && end) {
      query = db
        .select()
        .from(posts)
        .where(
          and(
            eq(posts.userId, userId),
            gte(posts.scheduledAt, new Date(start)),
            lte(posts.scheduledAt, new Date(end))
          )
        );
    }

    const scheduledPosts = await query;
    return NextResponse.json(scheduledPosts);
  } catch (error) {
    console.error("[CALENDAR_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
