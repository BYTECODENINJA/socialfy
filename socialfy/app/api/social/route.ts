import { db } from "@/lib/db";
import { socialAccounts } from "@/lib/db/schema";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";

export async function GET() {
  const { userId } = await auth();

  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const accounts = await db
    .select()
    .from(socialAccounts)
    .where(eq(socialAccounts.userId, userId));

  return NextResponse.json(accounts);
}

// In a real app, this would be a complex OAuth flow
// Here we provide a mock endpoint to "connect" an account for UI testing
export async function POST(req: Request) {
  const { userId } = await auth();

  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const { platform, accountName, platformAccountId } = await req.json();

    if (!platform || !platformAccountId) {
      return new NextResponse("Platform and Account ID are required", { status: 400 });
    }

    const [account] = await db
      .insert(socialAccounts)
      .values({
        userId,
        platform,
        platformAccountId,
        platformAccountName: accountName,
        accessToken: "MOCK_ACCESS_TOKEN",
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
      })
      .returning();

    return NextResponse.json(account);
  } catch (error) {
    console.error("[SOCIAL_ACCOUNTS_CREATE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
