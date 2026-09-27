import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 88,
          background: "#050505",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#F2F2F2",
          borderRadius: "36px",
          fontWeight: 900,
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          border: "4px solid #D71920",
          letterSpacing: "-2px",
        }}
      >
        <span style={{ color: "#D71920" }}>S</span>S
      </div>
    ),
    {
      ...size,
    }
  );
}
