import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="px-6 md:px-32 pt-24 pb-16 bg-parchment-light bg-[url('/noise.png')] bg-blend-multiply min-h-screen">
      <div className="mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Left Side: Text */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-4xl md:text-5xl font-pirata mb-2">Who We Are</h2>
          <p className="text-lg md:text-xl font-lora leading-relaxed">
            Put simply, we're creating a space we want to be a part of in the community we love. We want to find local people with the same inkling.
          </p>
          <p className="text-lg md:text-xl font-lora leading-relaxed">
            There’s not enough poetry nights in Deptford, until now.
          </p>
          <p className="text-red-600 text-lg md:text-xl font-pirata">woof</p>
          <p className="text-lg md:text-xl font-lora leading-relaxed">
            Find us at:{" "}
            <a
              href="https://maps.app.goo.gl/pZEqYdEcNN5xwkeB8"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-black"
            >
              Aaja Basement, Comet Pl, London SE8 4EP
            </a>
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/gallery/4-untitled-4219.jpg" // You can swap for another poster or event photo
              alt="Deptford Doggerels Poster"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
