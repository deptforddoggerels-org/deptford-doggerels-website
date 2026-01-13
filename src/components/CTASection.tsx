// components/JoinMailingListCTA.tsx
"use client";

import { useModal } from "@/components/ModalProvider";

export default function JoinMailingListCTA() {
  const { setOpen } = useModal();

  return (
    <div className="bg-black/40 p-6 rounded-lg text-center text-white">
      <h2 className="font-pirata text-2xl md:text-4xl mb-4">
        Want To Get Involved?
      </h2>
      <p>
        Interested in showcasing your work? Looking to hear some poetry?
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
        <a
          href="/contact"
          className="bg-white text-black border border-black px-6 py-3 rounded font-pirata"
        >
          Contact Us
        </a>

        <button
          onClick={() => setOpen(true)}
          className="bg-black text-white border border-white px-6 py-3 rounded font-pirata cursor-pointer"
        >
          Join the Mailing List
        </button>
      </div>
    </div>
  );
}
