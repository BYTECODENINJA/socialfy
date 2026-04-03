import { GoogleGenerativeAI } from "@google/generative-ai";

if (!process.env.GEMINI_API_KEY) {
  console.warn("GEMINI_API_KEY is not set.");
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
export const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

export async function generateSocialContent(prompt: string) {
  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}
