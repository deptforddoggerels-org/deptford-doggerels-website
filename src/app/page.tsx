"use client";
import ParallaxSection from "@/components/ParallaxSection";
import GalleryTeaser from "@/components/GalleryTeaser";
import Image from "next/image";
import { useModal } from "@/components/ModalProvider";


export default function Home() {
  const { setOpen } = useModal();
  return (
    <div>
      <main className="flex flex-col row-start-2 items-center">

        {/* Hero with Parallax */}
        <ParallaxSection src="/images/gallery/2-untitled-2.jpg" alt="Deptford Arches">
          <h1 className="text-4xl md:text-6xl font-pirata">Deptford Doggerels</h1>
        </ParallaxSection>

        {/* Who We Are */}
        <section className="relative w-full bg-parchment-light bg-[url('/noise.png')] bg-blend-multiply px-6 md:px-32 py-20 shadow-lg">
          <div className="mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="font-pirata text-2xl md:text-4xl mb-4">
                Who We Are
              </h2>
              <p className="text-lg font-lora md:text-xl leading-relaxed">
                A local lair for folks to showcase their words with people that
                will listen, putting artists and their work front and center.
                <br /><br />
                Held on the <b>first Thursday of every month at 7:00 PM</b>
                <br />
                at:
                <a
                  href="https://maps.app.goo.gl/pZEqYdEcNN5xwkeB8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-black inline-block text-lg md:text-xl ml-1"
                >
                  Aaja Basement, Comet Pl, London SE8 4EP
                </a>
              </p>
            </div>

            <div className="hidden md:block md:w-1/2 relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/gallery/14-untitled-4272.jpg"
                alt="Description"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Call to Action with Parallax */}
        <ParallaxSection
          src="/images/gallery/crowd.jpg"
          alt="Call to Action"
          height="min-h-[50vh]"
        >
          <div className="bg-black/40 p-6 rounded-lg text-center">
            <h2 className="font-pirata text-2xl md:text-4xl mb-4">Want To Get Involved?</h2>
            <p>
              Interested in showcasing your work? Looking to hear some poetry?
              <br />
              Get in touch through our contact page or join the mailing list to
              receive all our news and updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="/contact"
                className="bg-white text-black border border-black px-6 py-3 rounded hover:bg-gray-200 transition text-center font-pirata"
              >
                Contact Us
              </a>
              <button
                onClick={() => setOpen(true)}
                className="bg-black text-white border border-white px-6 py-3 rounded hover:bg-gray-800 transition text-center font-pirata cursor-pointer"
              >
                Join the Mailing List
              </button>
            </div>
          </div>
        </ParallaxSection>

        {/* Gallery */}
        <GalleryTeaser />

      </main>
    </div>
  );
}
