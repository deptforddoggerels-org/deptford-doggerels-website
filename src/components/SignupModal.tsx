'use client';

import { useState } from 'react';

export default function SignupPanel() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Sign Up Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-black font-pirata text-white px-4 py-2 rounded-full drop-shadow-lg hover:bg-gray-800 transition"
      >
        Newsletter Signup
      </button>

      {/* Overlay and Panel */}
      {open && (
        <div
          className="fixed inset-0 z-40 flex"
          aria-modal="true"
          role="dialog"
        >
          {/* Blurred dark background */}
          <div
            className="absolute inset-0 backdrop-blur-sm bg-black/50"
            onClick={() => setOpen(false)}
          />

          {/* Slide-in panel */}
          <div className="relative ml-auto w-full max-w-md bg-white shadow-lg h-full z-50 animate-slide-in">
            <div className="p-6 h-full flex flex-col justify-between">
              <div>
                {/* Close Button */}
                <div className="flex justify-end">
                  <button
                    onClick={() => setOpen(false)}
                    className="text-gray-500 hover:text-black text-2xl"
                    aria-label="Close sign up panel"
                  >
                    &times;
                  </button>
                </div>

                {/* Heading */}
                <h2 className="text-2xl font-bold mb-4 font-pirata">Join the Mailing List</h2>

                <p className='mb-4'>
                    Sign up to receive news and updates.
                </p>

                {/* Form */}
                <form className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-black text-white py-2 font-pirata rounded-md hover:bg-gray-800 transition"
                  >
                    Sign up
                  </button>
                </form>
              </div>

              {/* Footer (Optional) */}
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