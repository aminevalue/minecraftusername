import { NextRequest, NextResponse } from "next/server";
import { fetchSkinUrl, lookupByUuid } from "@/lib/mojang";

export async function GET(request: NextRequest) {
  const uuid = request.nextUrl.searchParams.get("uuid") ?? "";
  const includeSkin = request.nextUrl.searchParams.get("includeSkin") === "true";

  if (!uuid) {
    return NextResponse.json({ status: "invalid", uuid: "" }, { status: 400 });
  }

  const result = await lookupByUuid(uuid);

  let skinUrl: string | undefined;
  if (includeSkin && result.status === "found") {
    skinUrl = await fetchSkinUrl(result.uuid);
  }

  const httpStatus =
    result.status === "rate_limited" ? 429 : result.status === "error" ? 502 : 200;

  return NextResponse.json(
    { ...result, skinUrl },
    {
      status: httpStatus,
      headers: {
        "Cache-Control":
          result.status === "found" || result.status === "not_found"
            ? "public, max-age=30, s-maxage=60"
            : "no-store",
      },
    }
  );
}
