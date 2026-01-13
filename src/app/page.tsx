// app/page.tsx (SERVER COMPONENT)

import ParallaxSection from "@/components/ParallaxSection";
import GalleryTeaser from "@/components/GalleryTeaser";
import Image from "next/image";
import JoinMailingListCTA from "@/components/CTASection";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="flex flex-col row-start-2 items-center">

      <HeroSection src="/images/gallery/2-untitled-2.jpg">
        <h1 className="text-4xl md:text-6xl font-pirata">
          Deptford Doggerels
        </h1>
      </HeroSection>

      {/* Who We Are */}
      <section className="relative w-full bg-parchment-light bg-[url('/noise.png')] bg-blend-multiply px-6 md:px-32 py-20 shadow-lg">
        <div className="mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="text-black md:w-1/2 text-center md:text-left">
            <h2 className="font-pirata text-2xl md:text-4xl mb-4">
              Who We Are
            </h2>
            <p className="text-lg font-lora md:text-xl leading-relaxed">
              A local lair for folks to showcase their words with people that
              will listen, putting artists and their work front and center.
              <br /><br />
              <b>First Thursday of every month.</b><br />
              <b>Doors 7:00 PM · Speakers 8:00 PM</b><br />
              Find us at{" "}
              <a
                href="https://maps.app.goo.gl/pZEqYdEcNN5xwkeB8"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Aaja Basement, Comet Pl, London SE8 4EP
              </a>
            </p>
          </div>

          <div className="hidden md:block md:w-1/2 relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/gallery/15-106-DSC01313.jpg"
              alt=""
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <ParallaxSection src="/images/gallery/crowd.jpg" height="min-h-[50vh]">
        <JoinMailingListCTA />
      </ParallaxSection>

      <GalleryTeaser />
    </main>
  );
}
