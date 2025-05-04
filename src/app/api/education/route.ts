import { NextResponse } from "next/server";

export async function GET() {
  return await NextResponse.json([
    {
      edu: "matriculation",
      status: "passed",
    },
    {
      edu: "intermediate",
      status: "passed",
    },
    {
      edu: "bcom",
      status: "continue",
    },
    {
      edu: "giaic",
      status: "continue",
    },
  ]);
}
