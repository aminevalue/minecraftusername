import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(to bottom, #020617, #0f172a)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 96,
            height: 96,
            borderRadius: 20,
            background: "#10b981",
            color: "#020617",
            fontSize: 40,
            fontWeight: 700,
            marginBottom: 32,
          }}
        >
          MU
        </div>
        <div style={{ fontSize: 64, fontWeight: 700, display: "flex" }}>{SITE_NAME}</div>
        <div style={{ fontSize: 28, color: "#94a3b8", marginTop: 16, display: "flex" }}>
          {SITE_TAGLINE}
        </div>
      </div>
    ),
    { ...size }
  );
}
