"use client";

import { useModal } from "@/components/ModalProvider";
import NewsletterForm from "./NewsletterForm";

export default function SignupModal() {
  const { open, setOpen } = useModal();

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-black font-pirata text-white px-4 py-2 rounded-full drop-shadow-lg hover:bg-gray-800 transition cursor-pointer"
      >
        Newsletter Signup
      </button>

      {/* Modal Overlay */}
      {open && (
        <div className="fixed inset-0 z-50 flex" aria-modal="true" role="dialog">
          <div
            className="absolute inset-0 backdrop-blur-sm bg-black/50"
            onClick={() => setOpen(false)}
          />
          <div className="relative ml-auto w-full max-w-md bg-white shadow-lg h-full animate-slide-in">
            <div className="p-6 h-full flex flex-col justify-between">
              {/* Close button */}
              <div className="flex justify-end">
                <button
                  onClick={() => setOpen(false)}
                  className="text-gray-500 hover:text-black text-2xl cursor-pointer"
                >
                  &times;
                </button>
              </div>

              {/* Content */}
              <h2 className="text-2xl font-bold mb-4 font-pirata text-black">Join the Mailing List</h2>
              <p className="mb-4 text-black">Sign up to receive news and updates.</p>

              <NewsletterForm />
              {/** 
              <form className="space-y-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
                <button
                  type="submit"
                  className="w-full bg-black text-white py-2 font-pirata rounded-md hover:bg-gray-800 transition"
                >
                  Sign up
                </button>
              </form>
              */}


              <p className="text-xs text-gray-400 text-center mt-6">
                You can unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
