import { db } from "@/lib/db";
import { posts, scheduledPosts } from "@/lib/db/schema";
import { postQueue } from "@/lib/queue/post-queue";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { z } from "zod";
import { eq } from "drizzle-orm";

const createPostSchema = z.object({
  content: z.string().optional(),
  mediaUrls: z.array(z.string()).optional(),
  platforms: z.array(z.string()).min(1),
  scheduledAt: z.string().optional(), // ISO date string
  aiGenerated: z.boolean().default(false),
});

export async function POST(req: Request) {
  const { userId } = await auth();

  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const json = await req.json();
    const { content, mediaUrls, platforms, scheduledAt, aiGenerated } = createPostSchema.parse(json);

    const isScheduled = !!scheduledAt;
    const status = isScheduled ? "scheduled" : "published";

    const [post] = await db.insert(posts).values({
      userId,
      content,
      mediaUrls,
      platforms,
      status,
      scheduledAt: scheduledAt ? new Date(scheduledAt) : null,
      aiGenerated,
      publishedAt: isScheduled ? null : new Date(),
    }).returning();

    if (isScheduled && scheduledAt) {
      const scheduledDate = new Date(scheduledAt);
      const delay = scheduledDate.getTime() - Date.now();

      if (delay > 0) {
        // Create scheduled post entries for each platform
        for (const platform of platforms) {
          const job = await postQueue.add(
            `post-${post.id}-${platform}`,
            {
              postId: post.id,
              userId,
              platform,
              content,
              mediaUrls,
            },
            {
              delay: delay,
            }
          );

          await db.insert(scheduledPosts).values({
            postId: post.id,
            platform: platform as any,
            jobId: job.id,
            scheduledAt: scheduledDate,
          });
        }
      } else {
         // If scheduled time is in the past, maybe publish immediately or error?
         // For now, let's treat it as immediate publish if delay <= 0
      }
    } else {
        // Immediate publish - triggered via a job for better handling or direct API calls?
        // Usually it's better to queue it even for immediate publish.
        for (const platform of platforms) {
            await postQueue.add(`post-${post.id}-${platform}-immediate`, {
                postId: post.id,
                userId,
                platform,
                content,
                mediaUrls,
            });
        }
    }

    return NextResponse.json(post);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new NextResponse(JSON.stringify(error.issues), { status: 400 });
    }
    console.error("[POSTS_CREATE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function GET() {
    const { userId } = await auth();
    if (!userId) {
        return new NextResponse("Unauthorized", { status: 401 });
    }

    const userPosts = await db.select().from(posts).where(eq(posts.userId, userId)).orderBy(posts.createdAt);
    return NextResponse.json(userPosts);
}
