import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Theme Preview";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "linear-gradient(to bottom, #dbf4ff, #fff1f1)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#000",
        }}
      >
        <div style={{ fontSize: 64, marginBottom: 20 }}>🎨</div>
        <div style={{ fontSize: 48, marginBottom: 10 }}>Raycast Theme</div>
        <div style={{ fontSize: 32, opacity: 0.7 }}>Beautiful themes for Raycast</div>
      </div>
    ),
    {
      ...size,
    },
  );
}
