import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: {
    canonical: "/about",
  },
  title: "About",
  description:
    "Frequently Asked Questions about Deptford Doggerels poetry and spoken word night in Deptford, London.",
};


export default function AboutPage() {
  return (
    <main className="px-6 lg:px-32 pt-24 pb-16 bg-parchment-light bg-[url('/noise.png')] bg-blend-multiply min-h-screen text-black">
      <div className="mx-auto flex flex-col lg:flex-row items-center gap-12 ">

        {/* Left Side: Text */}
        <div className="w-full lg:w-1/2 space-y-8">
          <h2 className="text-4xl md:text-5xl font-pirata mb-6">FAQs</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-pirata mb-2">
                How long is a scheduled reading?
              </h3>
              <p className="text-lg md:text-lg font-lora leading-relaxed">
                Scheduled speakers have a <strong>5-minute slot</strong>. This could be three poems,
                or one or two short stories, it's up to you. Please time yourself to have an idea.
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-pirata mb-2">
                What time do speakers start?
              </h3>
              <p className="text-lg md:text-lg font-lora leading-relaxed">
                Speakers begin at <strong> 8:00pm sharp</strong>.
                If you're late without letting us know beforehand ,
                we will have to ask you to perform at the Open Mic section at the very end.
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-pirata mb-2">
                How does the Open Mic work?
              </h3>
              <p className="text-lg md:text-lg font-lora leading-relaxed">
                We typically have an Open Mic at the end of our scheduled speakers.
                5 people are chosen from the sign up sheet we pass around on the night.
                If more than 5 sign up, we pick names from a hat.
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-pirata mb-2">
                How long is an Open Mic slot?
              </h3>
              <p className="text-lg md:text-lg font-lora leading-relaxed">
                Open Mic readers perform <strong>one piece only</strong>, lasting around
                <strong> three minutes</strong>.
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-pirata mb-2">
                How can I stay in the loop?
              </h3>
              <p className="text-lg md:text-lg font-lora leading-relaxed">
                For updates on when the readers form goes live, or for any questions, follow our{" "}
                <Link
                  href="https://www.instagram.com/deptforddoggerels/"
                  className="underline underline-offset-4 hover:opacity-70 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram page
                </Link>{" "}
                or get in touch via the{" "}
                <Link
                  href="/contact"
                  className="underline underline-offset-4 hover:opacity-70 transition"
                >
                  Contact
                </Link>{" "}
                page.
              </p>
            </div>
          </div>
        </div>


        {/* Right Side: Image */}
        <div className="w-full lg:w-1/2 hidden lg:flex justify-center lg:justify-end">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/gallery/26-untitled--19.webp" // You can swap for another poster or event photo
              alt="Deptford Doggerels speaker performing"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
