import { access, mkdir, readdir, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const imagesDir = path.join(root, "public", "images");
const originalsDir = path.join(root, "assets-originals");

const jobs = [
  {
    source: "phoenix-rag-chatbot.png",
    dest: "phoenix-rag-chatbot-card.webp",
    width: 1200,
    height: 675,
    maxBytes: 150 * 1024,
    anchor: "centre",
  },
  {
    source: "צילום מסך 2026-11-05 105153.png",
    dest: "phoenix-rag-chatbot-chat.webp",
    width: 1600,
    height: 900,
    maxBytes: 300 * 1024,
    anchor: "left",
  },
  {
    source: "צילום מסך 2026-11-03 231956.png",
    dest: "calorie-calculator-card.webp",
    width: 1200,
    height: 675,
    maxBytes: 150 * 1024,
    anchor: "centre",
  },
  {
    source: "צילום מסך 2026-11-05 104954.png",
    dest: "calorie-calculator-chat.webp",
    width: 1600,
    height: 900,
    maxBytes: 300 * 1024,
    anchor: "right",
  },
];

function extractRect(width, height, anchor) {
  const ratio = 16 / 9;

  if (width / height > ratio) {
    const cropWidth = Math.round(height * ratio);
    const maxLeft = width - cropWidth;
    const left =
      anchor === "right" ? maxLeft : anchor === "left" ? 0 : Math.round(maxLeft / 2);

    return { left, top: 0, width: cropWidth, height };
  }

  const cropHeight = Math.min(height, Math.round(width / ratio));
  return { left: 0, top: 0, width, height: cropHeight };
}

async function encode(sourcePath, rect, width, height, maxBytes) {
  let quality = 80;
  let buffer = Buffer.alloc(0);

  while (quality >= 60) {
    buffer = await sharp(sourcePath)
      .extract(rect)
      .resize(width, height, { fit: "cover", position: "top" })
      .webp({ quality })
      .toBuffer();

    if (buffer.length <= maxBytes) {
      break;
    }

    quality -= 5;
  }

  return { buffer, quality };
}

await mkdir(imagesDir, { recursive: true });
await mkdir(originalsDir, { recursive: true });

async function resolveSource(name) {
  const inPublic = path.join(imagesDir, name);
  try {
    await access(inPublic);
    return inPublic;
  } catch {
    return path.join(originalsDir, name);
  }
}

for (const job of jobs) {
  const sourcePath = await resolveSource(job.source);
  const metadata = await sharp(sourcePath).metadata();
  const rect = extractRect(metadata.width, metadata.height, job.anchor);
  const { buffer, quality } = await encode(
    sourcePath,
    rect,
    job.width,
    job.height,
    job.maxBytes,
  );
  const destPath = path.join(imagesDir, job.dest);
  await writeFile(destPath, buffer);
  console.log(
    `${job.dest} ${job.width}x${job.height} q${quality} ${buffer.length} bytes from ${metadata.width}x${metadata.height}`,
  );
}

const placeholder = await sharp({
  create: {
    width: 1600,
    height: 900,
    channels: 3,
    background: { r: 17, g: 24, b: 39 },
  },
})
  .webp({ quality: 80 })
  .toBuffer();

await writeFile(path.join(imagesDir, "project-placeholder.webp"), placeholder);
console.log(`project-placeholder.webp 1600x900 ${placeholder.length} bytes`);

const originals = (await readdir(imagesDir)).filter((name) => !name.endsWith(".webp"));

for (const name of originals) {
  await rename(path.join(imagesDir, name), path.join(originalsDir, name));
  console.log(`moved ${name}`);
}
