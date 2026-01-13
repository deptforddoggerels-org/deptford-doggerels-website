import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Deptford Doggerels for inquiries, performances, or just to say hi!",
};


export default function ContactPage() {
  return (
    <main className="px-6 lg:px-32 pt-24 pb-16 bg-parchment-light bg-[url('/noise.png')] bg-blend-multiply min-h-screen text-black">
      <div className="mx-auto flex flex-col lg:flex-row items-center gap-12">

        

        {/* Left Side: Contact Info + Form */}
        <div className="w-full lg:w-1/2 space-y-4">
          <h2 className="text-4xl md:text-5xl font-pirata mb-2">Who We Are</h2>
          <p className="text-lg md:text-xl font-lora leading-relaxed">
            Put simply, we're creating a space we want to be a part of in the community we love. We want to find local people with the same inkling.
          </p>
          <p className="text-lg md:text-xl font-lora leading-relaxed">
            There’s not enough poetry nights in Deptford, until now.
          </p>
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

          <h1 className="font-pirata text-3xl md:text-5xl mb-6 text-center md:text-left">
            Get In Touch
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-8 text-center md:text-left">
            Have a question, want to perform, or just want to say hi?
            We are open to submissions of all kinds of poetry and spoken word.
            <br/>
            <br/>
            Fill out the form and we’ll get back to you soon.
          </p>

          
        </div>

        {/* Right Side: Visual */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="w-full backdrop-blur-sm shadow-lg rounded-xl border border-gray-700">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
