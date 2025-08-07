import GalleryTeaser from "@/components/GalleryTeaser";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col row-start-2 items-center">
        {/* Hero Section */}
        <section className="relative min-h-screen w-full">
          <Image
            src="/images/gallery/2-untitled-2.jpg"
            alt="Deptford Arches"
            fill
            priority
            className="!absolute object-cover object-center z-0"
          />
          <div className="absolute inset-0 bg-black/30 z-10 flex items-center justify-center text-white">
            <h1 className="text-4xl md:text-6xl font-pirata">
              Deptford Doggerels
            </h1>
          </div>

          
        </section>

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
                <br />
                <br />
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

        {/* Call to Action */}
        <section className="relative w-full bg-parchment-dark bg-[url('/noise.png')] px-6 md:px-32 py-20 shadow-inner">
          <div className="w-full mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="hidden md:block md:w-1/2 relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/gallery/16-untitled--11.jpg"
                alt="Description"
                fill
                className="object-cover"
              />
            </div>

            <div className="md:block md:w-1/2 mx-auto space-y-4 text-center md:text-left">
              <h2 className="font-pirata text-2xl md:text-4xl">
                Want To Get Involved?
              </h2>
              <p>
                Interested in showcasing your work? Just looking to hear some
                poetry?
                <br />
                Get in touch through our contact page or join the mailing list
                to receive all our news and updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a
                  href="/contact"
                  className="bg-black text-white border border-white px-6 py-3 rounded hover:bg-gray-800 transition text-center font-pirata"
                >
                  Contact Us
                </a>
                <a
                  href="#newsletter"
                  className="bg-white text-black border border-black px-6 py-3 rounded hover:bg-gray-100 transition text-center font-pirata"
                >
                  Join the Mailing List
                </a>
              </div>
            </div>
          </div>

          {/* Fade to gallery */}
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-b from-parchment-dark to-white" />
        </section>

        {/* Gallery Teaser */}
        <GalleryTeaser />
      </main>
    </div>
  );
}
