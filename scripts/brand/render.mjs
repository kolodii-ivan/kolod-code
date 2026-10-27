// Generates the brand assets of code.ikolodiy.com from one source: the "K_" mark (the first letter
// and the blinking cursor of the hero's "Kolod Code_" wordmark) and the wordmark itself.
//   src/app/icon.svg, src/app/favicon.ico (16/32/48), src/app/apple-icon.png (180, opaque)
//   public/icons/icon-192.png, icon-512.png, icon-maskable-512.png (manifest), public/logo.svg
//   public/og/home.png (1200x630 share image, rendered from og-template.html)
// Re-run after changing the mark or the share image, then commit the outputs:
//   node scripts/brand/render.mjs <path to chrome or chrome-headless-shell>
// sharp comes with next (node_modules/sharp). The share image needs a headless Chromium (e.g. Playwright's
// chrome-headless-shell) and network access for the Google Fonts of the template.
// Glyph outlines: JetBrains Mono Bold (SIL Open Font License), converted to paths at 100px, baseline y=100.
import { execFileSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const CHROME = process.argv[2];

// Design tokens from src/app/globals.css.
const CHARCOAL = "#1A1A1A";
const LIGHT_TEXT = "#E5E5E5";
const CLAY = "#D4A574";
const GREEN = "#4ADE80";

const GLYPH_K =
  "M20.1 100L7.6 100L7.6 27L20.1 27L20.1 56.5L28.8 56.5L42.5 27L56.1 27L39.8 62L56.9 100L43 100L28.6 67.9L20.1 67.9L20.1 100Z";
const WORD_KOLOD =
  "M20.1 100L7.6 100L7.6 27L20.1 27L20.1 56.5L28.8 56.5L42.5 27L56.1 27L39.8 62L56.9 100L43 100L28.6 67.9L20.1 67.9L20.1 100ZM90 100.9L90 100.9Q83 100.9 77.8 98.3Q72.7 95.6 69.8 90.8Q67 85.9 67 79.3L67 79.3L67 65.7Q67 59.1 69.8 54.3Q72.7 49.4 77.8 46.8Q83 44.1 90 44.1L90 44.1Q97.1 44.1 102.2 46.8Q107.3 49.4 110.2 54.3Q113 59.1 113 65.6L113 65.6L113 79.3Q113 85.9 110.2 90.8Q107.3 95.6 102.2 98.3Q97.1 100.9 90 100.9ZM90 90L90 90Q95 90 97.8 87.3Q100.5 84.5 100.5 79.3L100.5 79.3L100.5 65.7Q100.5 60.4 97.8 57.7Q95 55 90 55L90 55Q85.1 55 82.3 57.7Q79.5 60.4 79.5 65.7L79.5 65.7L79.5 79.3Q79.5 84.5 82.3 87.3Q85.1 90 90 90ZM175.9 100L158.4 100Q153 100 148.9 97.8Q144.9 95.6 142.6 91.5Q140.3 87.5 140.3 82.2L140.3 82.2L140.3 38.3L122.7 38.3L122.7 27L152.8 27L152.8 82.2Q152.8 85.2 154.6 87.0Q156.3 88.7 159.3 88.7L159.3 88.7L175.9 88.7L175.9 100ZM210 100.9L210 100.9Q203 100.9 197.8 98.3Q192.7 95.6 189.8 90.8Q187 85.9 187 79.3L187 79.3L187 65.7Q187 59.1 189.8 54.3Q192.7 49.4 197.8 46.8Q203 44.1 210 44.1L210 44.1Q217.1 44.1 222.2 46.8Q227.3 49.4 230.2 54.3Q233 59.1 233 65.6L233 65.6L233 79.3Q233 85.9 230.2 90.8Q227.3 95.6 222.2 98.3Q217.1 100.9 210 100.9ZM210 90L210 90Q215 90 217.8 87.3Q220.5 84.5 220.5 79.3L220.5 79.3L220.5 65.7Q220.5 60.4 217.8 57.7Q215 55 210 55L210 55Q205.1 55 202.3 57.7Q199.5 60.4 199.5 65.7L199.5 65.7L199.5 79.3Q199.5 84.5 202.3 87.3Q205.1 90 210 90ZM265.3 101L265.3 101Q257.1 101 252.1 95.3Q247 89.6 247 80L247 80L247 65.1Q247 55.4 252 49.7Q257 44 265.3 44L265.3 44Q272.1 44 276.1 47.8Q280.1 51.7 280.1 58.4L280.1 58.4L277.3 55.5L280.2 55.5L279.8 42.4L279.8 27L292.3 27L292.3 100L280.1 100L280.1 89.5L277.3 89.5L280.1 86.6Q280.1 93.3 276.1 97.2Q272.1 101 265.3 101ZM269.7 90.2L269.7 90.2Q274.5 90.2 277.1 87.3Q279.8 84.5 279.8 79.4L279.8 79.4L279.8 65.6Q279.8 60.5 277.1 57.6Q274.5 54.8 269.7 54.8L269.7 54.8Q264.9 54.8 262.2 57.6Q259.5 60.4 259.5 65.6L259.5 65.6L259.5 79.4Q259.5 84.6 262.2 87.4Q264.9 90.2 269.7 90.2Z";
const WORD_CODE =
  "M390.4 101L390.4 101Q383.4 101 378.1 98.3Q372.9 95.7 370.1 90.8Q367.2 86 367.2 79.4L367.2 79.4L367.2 47.6Q367.2 40.9 370.1 36.1Q372.9 31.3 378.1 28.6Q383.4 26 390.4 26L390.4 26Q397.5 26 402.6 28.6Q407.8 31.3 410.7 36.1Q413.6 40.9 413.6 47.6L413.6 47.6L401 47.6Q401 42.4 398.3 39.7Q395.5 37 390.4 37L390.4 37Q385.3 37 382.5 39.7Q379.7 42.4 379.7 47.5L379.7 47.5L379.7 79.4Q379.7 84.5 382.5 87.3Q385.3 90 390.4 90L390.4 90Q395.5 90 398.3 87.3Q401 84.5 401 79.4L401 79.4L413.6 79.4Q413.6 85.9 410.7 90.8Q407.8 95.7 402.6 98.3Q397.5 101 390.4 101ZM450 100.9L450 100.9Q443 100.9 437.9 98.3Q432.7 95.6 429.9 90.8Q427 85.9 427 79.3L427 79.3L427 65.7Q427 59.1 429.9 54.3Q432.7 49.4 437.9 46.8Q443 44.1 450 44.1L450 44.1Q457.1 44.1 462.2 46.8Q467.3 49.4 470.1 54.3Q473 59.1 473 65.6L473 65.6L473 79.3Q473 85.9 470.1 90.8Q467.3 95.6 462.2 98.3Q457.1 100.9 450 100.9ZM450 90L450 90Q455 90 457.8 87.3Q460.5 84.5 460.5 79.3L460.5 79.3L460.5 65.7Q460.5 60.4 457.8 57.7Q455 55 450 55L450 55Q445.1 55 442.3 57.7Q439.5 60.4 439.5 65.7L439.5 65.7L439.5 79.3Q439.5 84.5 442.3 87.3Q445.1 90 450 90ZM505.3 101L505.3 101Q497.1 101 492.1 95.3Q487 89.6 487 80L487 80L487 65.1Q487 55.4 492 49.7Q497 44 505.3 44L505.3 44Q512.1 44 516.1 47.8Q520.1 51.7 520.1 58.4L520.1 58.4L517.3 55.5L520.2 55.5L519.8 42.4L519.8 27L532.3 27L532.3 100L520.1 100L520.1 89.5L517.3 89.5L520.1 86.6Q520.1 93.3 516.1 97.2Q512.1 101 505.3 101ZM509.7 90.2L509.7 90.2Q514.5 90.2 517.1 87.3Q519.8 84.5 519.8 79.4L519.8 79.4L519.8 65.6Q519.8 60.5 517.1 57.6Q514.5 54.8 509.7 54.8L509.7 54.8Q504.9 54.8 502.2 57.6Q499.5 60.4 499.5 65.6L499.5 65.6L499.5 79.4Q499.5 84.6 502.2 87.4Q504.9 90.2 509.7 90.2ZM570.1 101L570.1 101Q563.1 101 557.9 98.3Q552.7 95.6 549.9 90.8Q547 85.9 547 79.4L547 79.4L547 65.6Q547 59.1 549.9 54.3Q552.7 49.4 557.9 46.7Q563.1 44 570.1 44L570.1 44Q577 44 582.1 46.7Q587.3 49.4 590.1 54.3Q593 59.1 593 65.6L593 65.6L593 75.5L559.1 75.5L559.1 79.4Q559.1 85.2 561.9 88.2Q564.7 91.1 570.2 91.1L570.2 91.1Q574.4 91.1 577 89.7Q579.6 88.2 580.3 85.4L580.3 85.4L592.6 85.4Q591.2 92.5 585.0 96.8Q578.9 101 570.1 101ZM581.8 67.5L580.9 68.5L580.9 65.5Q580.9 59.8 578.2 56.8Q575.5 53.7 570.1 53.7L570.1 53.7Q564.7 53.7 561.9 56.8Q559.1 59.9 559.1 65.6L559.1 65.6L559.1 67.7L581.8 67.5Z";
const WORD_CURSOR = "M606 102.5H654V113.8H606Z";

// The "K_" mark on a 64x64 grid: the K (cap height 73 at 100px) scaled to 38 units, a cursor bar on its baseline.
// `zoom` shrinks the glyphs around the centre (safe zone of maskable and apple icons).
function markGlyphs(zoom = 1) {
  const s = 0.52;
  const kx = 8.2;
  const ky = 13;
  return `<g transform="translate(32 32) scale(${zoom}) translate(-32 -32)">
    <path fill="url(#kc)" transform="translate(${(kx - 7.6 * s).toFixed(2)} ${(ky - 27 * s).toFixed(2)}) scale(${s})" d="${GLYPH_K}"/>
    <rect fill="${GREEN}" x="37.8" y="45" width="18" height="6" rx="0.6"/>
  </g>`;
}

// In the K path's own (glyph) coordinates: clay at the top-left of the K, green at the bottom-right.
const MARK_GRADIENT = `<linearGradient id="kc" x1="7.6" y1="27" x2="56.9" y2="100" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="${CLAY}"/><stop offset="1" stop-color="${GREEN}"/></linearGradient>`;

// tile: "rounded" (favicon, manifest "any"), "square" (apple-icon and maskable: the platform crops it).
function markSvg({ tile = "rounded", zoom = 1 } = {}) {
  const bg =
    tile === "rounded"
      ? `<rect width="64" height="64" rx="14" fill="${CHARCOAL}"/>`
      : `<rect width="64" height="64" fill="${CHARCOAL}"/>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <defs>${MARK_GRADIENT}</defs>
  ${bg}
  ${markGlyphs(zoom)}
</svg>
`;
}

// Horizontal lockup: the mark tile plus the wordmark; "Kolod" follows the colour scheme (dark ink on light, light on dark).
function logoSvg() {
  const markScale = 120 / 64;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 120" role="img" aria-label="Kolod Code">
  <style>.ink{fill:${CHARCOAL}}@media (prefers-color-scheme:dark){.ink{fill:${LIGHT_TEXT}}}</style>
  <defs>${MARK_GRADIENT}
    <linearGradient id="wc" x1="367" y1="0" x2="593" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="${CLAY}"/><stop offset="1" stop-color="${GREEN}"/></linearGradient></defs>
  <g transform="scale(${markScale})">
    <rect width="64" height="64" rx="14" fill="${CHARCOAL}"/>
    ${markGlyphs()}
  </g>
  <g transform="translate(140.4 -3.5)">
    <path class="ink" d="${WORD_KOLOD}"/>
    <path fill="url(#wc)" d="${WORD_CODE}"/>
    <path fill="${GREEN}" d="${WORD_CURSOR}"/>
  </g>
</svg>
`;
}

function png(svg, size) {
  return sharp(Buffer.from(svg), { density: 72 * Math.ceil(size / 64) * 2 })
    .resize(size, size)
    .png({ compressionLevel: 9, palette: size <= 48 ? false : true, quality: 95 })
    .toBuffer();
}

// ICO with embedded PNG images (supported by every current browser).
function ico(images) {
  const header = Buffer.alloc(6 + 16 * images.length);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);
  let offset = header.length;
  images.forEach(({ size, data }, i) => {
    const entry = 6 + 16 * i;
    header.writeUInt8(size >= 256 ? 0 : size, entry);
    header.writeUInt8(size >= 256 ? 0 : size, entry + 1);
    header.writeUInt16LE(1, entry + 4);
    header.writeUInt16LE(32, entry + 6);
    header.writeUInt32LE(data.length, entry + 8);
    header.writeUInt32LE(offset, entry + 12);
    offset += data.length;
  });
  return Buffer.concat([header, ...images.map((image) => image.data)]);
}

function out(path, data) {
  const file = join(ROOT, path);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, data);
  console.log(path);
}

const rounded = markSvg();
out("src/app/icon.svg", rounded);
out("public/logo.svg", logoSvg());
out(
  "src/app/favicon.ico",
  ico(await Promise.all([16, 32, 48].map(async (size) => ({ size, data: await png(rounded, size) })))),
);
out("src/app/apple-icon.png", await png(markSvg({ tile: "square", zoom: 0.86 }), 180));
out("public/icons/icon-192.png", await png(rounded, 192));
out("public/icons/icon-512.png", await png(rounded, 512));
out("public/icons/icon-maskable-512.png", await png(markSvg({ tile: "square", zoom: 0.7 }), 512));

if (CHROME) {
  const template = join(ROOT, "scripts", "brand", "og-template.html");
  const target = join(ROOT, "public", "og", "home.png");
  mkdirSync(dirname(target), { recursive: true });
  const url = `file://${template}`;
  execFileSync(
    CHROME,
    [
      "--headless",
      "--hide-scrollbars",
      "--force-device-scale-factor=1",
      "--window-size=1200,630",
      "--virtual-time-budget=8000",
      `--screenshot=${target}`,
      url,
    ],
    { stdio: "ignore" },
  );
  const optimized = await sharp(target).png({ compressionLevel: 9, palette: true, quality: 95 }).toBuffer();
  out("public/og/home.png", optimized);
} else {
  console.log("public/og/home.png skipped: pass the path to a headless Chromium to render it");
}
