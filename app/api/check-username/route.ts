import { NextRequest, NextResponse } from "next/server";
import { lookupUsername } from "@/lib/mojang";

export async function GET(request: NextRequest) {
  const username = request.nextUrl.searchParams.get("username") ?? "";

  if (!username) {
    return NextResponse.json(
      { status: "invalid", username: "" },
      { status: 400 }
    );
  }

  const result = await lookupUsername(username);

  const httpStatus =
    result.status === "rate_limited" ? 429 : result.status === "error" ? 502 : 200;

  return NextResponse.json(result, {
    status: httpStatus,
    headers: {
      "Cache-Control":
        result.status === "taken" || result.status === "available"
          ? "public, max-age=30, s-maxage=60"
          : "no-store",
    },
  });
}
