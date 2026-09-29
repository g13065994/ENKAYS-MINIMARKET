import { ImageResponse } from "next/og";
import { createElement } from "react";
import { BRAND_DESCRIPTION, SITE_NAME, SITE_TAGLINE } from "@/lib/constants";

export const runtime = "edge";

export async function GET() {
  const text = (value: string, style: Record<string, string | number>) =>
    createElement("div", { style }, value);

  const rootStyle = {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    background: "#f7f5ec",
    color: "#173b2b",
    padding: "72px",
    fontFamily: "sans-serif",
  };

  const content = createElement(
    "div",
    { style: rootStyle },
    createElement(
      "div",
      { style: { display: "flex", flexDirection: "column", gap: "18px" } },
      text(SITE_NAME, { fontSize: 34, fontWeight: 800, color: "#16824b" }),
      text(SITE_TAGLINE, { fontSize: 22, color: "#6b7280" }),
    ),
    createElement(
      "div",
      { style: { display: "flex", flexDirection: "column", gap: "20px", maxWidth: "1000px" } },
      text("NIGERIAN FOODSTUFF & EVERYDAY ESSENTIALS", { fontSize: 25, fontWeight: 800, color: "#d49b16", letterSpacing: "2px" }),
      text("Quality food essentials, made easy.", { fontSize: 58, fontWeight: 800, lineHeight: 1.08 }),
      text(BRAND_DESCRIPTION, { fontSize: 24, lineHeight: 1.4, color: "#4b5563" }),
    ),
    createElement(
      "div",
      { style: { display: "flex", justifyContent: "space-between", fontSize: 21, color: "#6b7280" } },
      createElement("span", null, "enkays-foods-and-more.vercel.app"),
      createElement("span", null, "Order directly through WhatsApp or phone"),
    ),
  );

  return new ImageResponse(content, { width: 1200, height: 630 });
}
