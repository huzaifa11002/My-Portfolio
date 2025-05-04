import { NextResponse } from "next/server";

export async function GET() {
  return await NextResponse.json([
    {
      skill: "Html",
      status: "advance",
    },
    {
      skill: "css",
      status: "advance",
    },
    {
      skill: "javascript",
      status: "beginner",
    },
    {
      skill: "typescript",
      status: "beginner",
    },
    {
      skill: "python",
      status: "beginner",
    },
    {
      skill: "nextjs",
      status: "advance",
    },
    {
      skill: "tailwind css",
      status: "advance",
    },
    {
      skill: "bootstrap",
      status: "advance",
    },
    {
      skill: "wordpress",
      status: "beginner",
    },
    {
      skill: "psd to webpage",
      status: "advance",
    },
  ]);
}
