// Generate public/og.png from public/og.svg at 1200×630 — better compat for LinkedIn/Slack
// Run: node scripts/gen-og.mjs
import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const svg = readFileSync(resolve(__dirname, '../public/og.svg'));

const png = await sharp(svg, { density: 300 })
  .resize(1200, 630, { fit: 'cover' })
  .png({ quality: 92, compressionLevel: 9 })
  .toBuffer();

writeFileSync(resolve(__dirname, '../public/og.png'), png);
console.log(`✓ public/og.png written (${(png.length / 1024).toFixed(1)} KB)`);
