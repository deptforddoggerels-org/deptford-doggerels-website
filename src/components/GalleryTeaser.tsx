'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import Image from 'next/image';

const galleryImages = [
  '/images/gallery/1-untitled-.jpg',
  '/images/gallery/2-untitled-2.jpg',
  '/images/gallery/3-untitled-4216.jpg',
];

export default function GalleryTeaser() {
  return (
    <section className="bg-parchment-light py-16 px-12 md:px-32 w-full h-[75vh] bg-[url('/noise.png')] text-black">
      <div className="w-full mx-auto h-full flex flex-col md:flex-row items-center gap-8">

        {/* Left: Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl md:text-4xl font-pirata mb-4">See the Night in Action</h3>
          <p className="mb-6 text-base max-w-md mx-auto md:mx-0">
            Curious what it looks like? Explore moments from past events in our gallery.
          </p>
          <a
            href="/gallery"
            className="inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition font-pirata"
          >
            View Gallery
          </a>
        </div>

        {/* Right: Slideshow */}
        <div className="md:w-1/2 hidden md:block relative">
          <div className="w-full aspect-[4/3] relative overflow-hidden rounded shadow-lg">
            <Swiper
              modules={[Autoplay, Navigation]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              navigation
              className="w-full h-full"
            >
              {galleryImages.map((src, i) => (
                <SwiperSlide key={i}>
                  <Image
                    src={src}
                    alt={`Gallery Image ${i + 1}`}
                    fill
                    className="rounded-md object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
