import { pgTable, text, timestamp, uuid, jsonb, boolean, integer, pgEnum } from "drizzle-orm/pg-core";

export const platformEnum = pgEnum("platform", [
  "instagram",
  "youtube",
  "tiktok",
  "facebook",
  "linkedin",
  "pinterest",
  "discord",
  "twitter",
  "slack",
]);

export const postStatusEnum = pgEnum("post_status", ["draft", "scheduled", "published", "failed"]);

export const users = pgTable("users", {
  id: text("id").primaryKey(), // Clerk user ID
  email: text("email").notNull().unique(),
  name: text("name"),
  imageUrl: text("image_url"),
  subscriptionId: text("subscription_id"),
  subscriptionPlan: text("subscription_plan").default("free"), // free, premium
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const socialAccounts = pgTable("social_accounts", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: text("user_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  platform: platformEnum("platform").notNull(),
  platformAccountId: text("platform_account_id").notNull(),
  platformAccountName: text("platform_account_name"),
  accessToken: text("access_token").notNull(),
  refreshToken: text("refresh_token"),
  expiresAt: timestamp("expires_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const posts = pgTable("posts", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: text("user_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  content: text("content"),
  mediaUrls: jsonb("media_urls").$type<string[]>(),
  platforms: jsonb("platforms").$type<string[]>().notNull(), // Target platforms
  status: postStatusEnum("status").default("draft").notNull(),
  scheduledAt: timestamp("scheduled_at"),
  publishedAt: timestamp("published_at"),
  aiGenerated: boolean("ai_generated").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const scheduledPosts = pgTable("scheduled_posts", {
  id: uuid("id").primaryKey().defaultRandom(),
  postId: uuid("post_id")
    .references(() => posts.id, { onDelete: "cascade" })
    .notNull(),
  platform: platformEnum("platform").notNull(),
  jobId: text("job_id"), // BullMQ job ID
  status: postStatusEnum("status").default("scheduled").notNull(),
  error: text("error"),
  scheduledAt: timestamp("scheduled_at").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const autoComments = pgTable("auto_comments", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: text("user_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  platform: platformEnum("platform").notNull(),
  keyword: text("keyword"), // Keyword to trigger reply, or null for all comments
  reply: text("reply").notNull(),
  isActive: boolean("is_active").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
