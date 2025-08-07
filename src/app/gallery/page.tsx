import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import { FadeImage } from '@/components/FadeImage';


export default function GalleryPage() {
  const images = getGalleryImages();

  return (
    <main className="px-6 pt-24 pb-12  bg-parchment-light bg-[url('/noise.png')]">
      <div className='max-w-6xl mx-auto'>
        <h1 className="text-4xl font-pirata mb-8">Gallery</h1>
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {images.map((img) => (
            <FadeImage
              key={img}
              src={`/images/gallery/${img}`}
              alt={img}
              className="break-inside-avoid rounded mb-6 shadow hover:shadow-lg transition-shadow duration-300"
            />
          ))}
        </div>
      </div>
    </main>
  );
}

function getGalleryImages(): string[] {
  const dir = path.join(process.cwd(), 'public', 'images', 'gallery');
  try {
    return fs.readdirSync(dir).filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file));
  } catch (err) {
    console.error('Error loading gallery images:', err);
    return [];
  }
}