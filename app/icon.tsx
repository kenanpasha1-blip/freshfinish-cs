import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/**
 * Dynamically generated favicon using the brand palette.
 * Deep teal background + bright cyan "F" + sparkle, lifted straight
 * from the logo system so the favicon matches the site.
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#06455b",
          borderRadius: 14,
          position: "relative",
        }}
      >
        <span
          style={{
            fontSize: 46,
            fontWeight: 800,
            color: "#07bce5",
            letterSpacing: -2,
            fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
            lineHeight: 1,
          }}
        >
          F
        </span>
        {/* Sparkle */}
        <span
          style={{
            position: "absolute",
            top: 8,
            right: 10,
            width: 10,
            height: 10,
            background: "#07bce5",
            transform: "rotate(45deg)",
            borderRadius: 2,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
