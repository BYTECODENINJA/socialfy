import { db } from "@/lib/db";
import { autoComments } from "@/lib/db/schema";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { z } from "zod";
import { eq } from "drizzle-orm";

const autoCommentSchema = z.object({
  platform: z.enum([
    "instagram",
    "youtube",
    "tiktok",
    "facebook",
    "linkedin",
    "pinterest",
    "discord",
    "twitter",
    "slack",
  ]),
  keyword: z.string().optional(),
  reply: z.string().min(1),
  isActive: z.boolean().default(true),
});

export async function POST(req: Request) {
  const { userId } = await auth();

  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const json = await req.json();
    const data = autoCommentSchema.parse(json);

    const [rule] = await db
      .insert(autoComments)
      .values({
        userId,
        ...data,
      })
      .returning();

    return NextResponse.json(rule);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new NextResponse(JSON.stringify(error.issues), { status: 400 });
    }
    console.error("[AUTO_COMMENT_CREATE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function GET() {
  const { userId } = await auth();

  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const rules = await db
    .select()
    .from(autoComments)
    .where(eq(autoComments.userId, userId));

  return NextResponse.json(rules);
}
