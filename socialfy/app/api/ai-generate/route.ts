import { generateSocialContent } from "@/lib/gemini";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { userId } = await auth();

  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return new NextResponse("Prompt is required", { status: 400 });
    }

    const content = await generateSocialContent(prompt);

    return NextResponse.json({ content });
  } catch (error) {
    console.error("[AI_GENERATE_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
