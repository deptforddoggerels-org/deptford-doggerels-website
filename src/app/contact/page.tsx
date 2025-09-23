import ContactForm from "@/components/ContactForm";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="px-6 md:px-32 pt-24 pb-16 bg-parchment-light bg-[url('/noise.png')] bg-blend-multiply min-h-screen text-black">
      <div className="mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Left Side: Contact Info + Form */}
        <div className="w-full md:w-1/2">
          <h1 className="font-pirata text-3xl md:text-5xl mb-6 text-center md:text-left">
            Get In Touch
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-8 text-center md:text-left">
            Have a question, want to perform, or just want to say hi?
            We are open to submissions of all kinds of poetry and spoken word.
            <br/>
            <br/>
            Fill out the form below and we’ll get back to you soon.
          </p>

          <div className=" backdrop-blur-sm shadow-lg rounded-xl border border-gray-700">
            <ContactForm />
          </div>
        </div>

        {/* Right Side: Visual */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/gallery/crowd.jpg" // Suggest a crowd / poetry night image
              alt="Deptford Doggerels event"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
