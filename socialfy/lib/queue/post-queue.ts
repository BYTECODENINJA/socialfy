import { Queue, Worker, Job } from "bullmq";
import IORedis from "ioredis";

const connection = new IORedis(process.env.REDIS_URL || "redis://localhost:6379", {
  maxRetriesPerRequest: null,
});

export const postQueue = new Queue("post-scheduling", {
  connection,
  defaultJobOptions: {
    attempts: 3,
    backoff: {
      type: "exponential",
      delay: 1000,
    },
  },
});

// Worker will be implemented in a separate file or service usually, 
// but for Next.js API routes we might need a different approach 
// or run it in a custom server/long-running process.
