import Image from "next/image";

export default function Home() {
  return (
    <div>

      <main className="py-4 px-6 sm:px-12 flex flex-col gap-12 row-start-2 items-center">
        {/* Hero Section */}
        <div className="relative w-full max-w-5xl font-pirata">
          <Image
            src="/DeptfordArches.jpg"
            alt="Deptford Arches"
            width={1200}
            height={800}
            className="w-full h-auto object-cover rounded-md"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-4xl sm:text-6xl font-bold drop-shadow-lg text-center">
              Deptford Doggerels
            </h2>
          </div>
        </div>

        {/* Event Info */}
        <section className="text-center max-w-xl">
          <h3 className="text-2xl font-semibold mb-2 font-pirata">Next Event</h3>
          <p className="text-lg">The first Thursday of every month – 7:00 PM</p>
          <a
            href="https://maps.app.goo.gl/pZEqYdEcNN5xwkeB8"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-black"
          >
            Aaja Basement, Comet Pl, London SE8 4EP
          </a>
        </section>

        {/* About Section */}
        <section className="text-center max-w-2xl mb-2">
          <p className="text-base sm:text-lg leading-relaxed">
            A Local Lair for  folks to showcase their words with people that will listen, putting artists and their work front and center.
          </p>
        </section>

        {/* Call to Action */}
        <section>

          <p>
            Interested in showcasing your work? Head to our contact page to get in touch.
          </p>

          <p className="mb-2">
            If you're looking to keep up to date, sign up to our newsletter to receive news and updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition text-center font-pirata"
            >
              Contact Us
            </a>
            <a
              href="#newsletter" // or link to your newsletter section or form
              className="bg-white text-black border border-black px-6 py-3 rounded hover:bg-gray-100 transition text-center font-pirata"
            >
              Join the Mailing List
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
