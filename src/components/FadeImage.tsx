'use client';

import { useState } from 'react';
import Image from 'next/image';

type FadeImageProps = {
  src: string;
  alt: string;
};

export function FadeImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={className}>
      <Image
        src={src}
        alt={alt}
        width={800}
        height={600}
        className={`object-cover w-full h-auto transition-all duration-700 ease-out
          ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        onLoadingComplete={() => setLoaded(true)}
      />
    </div>
  );
}
