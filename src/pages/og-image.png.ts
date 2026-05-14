import type { APIRoute } from "astro";
import satori from "satori";
import { Resvg, initWasm } from "@resvg/resvg-wasm";
import { getPortfolioData } from "../lib/get-portfolio-data";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join, dirname } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

export const GET: APIRoute = async () => {
  try {
    const wasmPath = join(
      __dirname,
      "../../node_modules/@resvg/resvg-wasm/index_bg.wasm",
    );
    const wasmBinary = readFileSync(wasmPath);
    await initWasm(wasmBinary);
  } catch {
    // already initialized — safe to ignore
  }

  const data = await getPortfolioData();
  const { title, description } = data.meta;

  const fontData = readFileSync(
    join(__dirname, "../../public/fonts/JetBrainsMono-Regular.ttf"),
  );
  const boldFontData = readFileSync(
    join(__dirname, "../../public/fonts/JetBrainsMono-Bold.ttf"),
  );

  const avatarBuffer = readFileSync(join(__dirname, "../../public/avatar.png"));
  const avatarBase64 = `data:image/png;base64,${avatarBuffer.toString("base64")}`;

  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          width: "1200px",
          height: "630px",
          backgroundColor: "#1e1e2e",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 80px",
          fontFamily: '"JetBrains Mono"',
          boxSizing: "border-box",
        },
        children: [
          // top row: text left, avatar right
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
              },
              children: [
                // left: name + title
                {
                  type: "div",
                  props: {
                    style: { display: "flex", flexDirection: "column", gap: "16px" },
                    children: [
                      {
                        type: "div",
                        props: {
                          style: { color: "#89b4fa", fontSize: "18px", fontWeight: "400" },
                          children: "$ whoami",
                        },
                      },
                      {
                        type: "div",
                        props: {
                          style: { color: "#cdd6f4", fontSize: "64px", fontWeight: "700", lineHeight: "1.1" },
                          children: "Pablo Koll",
                        },
                      },
                      {
                        type: "div",
                        props: {
                          style: { color: "#a6adc8", fontSize: "26px", fontWeight: "400" },
                          children: "Backend Software Engineer",
                        },
                      },
                    ],
                  },
                },
                // right: avatar circle
                {
                  type: "img",
                  props: {
                    src: avatarBase64,
                    style: {
                      width: "200px",
                      height: "200px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    },
                  },
                },
              ],
            },
          },
          // bottom: description + url
          {
            type: "div",
            props: {
              style: { display: "flex", flexDirection: "column", gap: "20px" },
              children: [
                {
                  type: "div",
                  props: {
                    style: { color: "#6c7086", fontSize: "15px", lineHeight: "1.5", maxWidth: "800px" },
                    children: description,
                  },
                },
                {
                  type: "div",
                  props: {
                    style: { display: "flex", gap: "12px", alignItems: "center" },
                    children: [
                      {
                        type: "div",
                        props: {
                          style: { width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#a6e3a1" },
                        },
                      },
                      {
                        type: "div",
                        props: {
                          style: { color: "#a6adc8", fontSize: "15px" },
                          children: "pablokoll.com",
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "JetBrains Mono",
          data: fontData,
          weight: 400,
          style: "normal",
        },
        {
          name: "JetBrains Mono",
          data: boldFontData,
          weight: 700,
          style: "normal",
        },
      ],
    },
  );

  const resvg = new Resvg(svg, { fitTo: { mode: "width", value: 1200 } });
  const png = resvg.render().asPng();

  return new Response(png, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
