// app/api/gallery/route.ts
import fs from 'fs';
import path from 'path';

export async function GET() {
  const galleryDir = path.join(process.cwd(), 'public/images/gallery');
  const images = fs
    .readdirSync(galleryDir)
    .filter(f => /\.(jpg|png|jpeg|webp)$/i.test(f))
    .map(f => `/images/gallery/${f}`);

  return new Response(JSON.stringify(images));
}