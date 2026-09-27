import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 16,
          background: "#050505",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#F2F2F2",
          borderRadius: "6px",
          fontWeight: 800,
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          border: "1.5px solid #D71920",
          letterSpacing: "-0.5px",
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
