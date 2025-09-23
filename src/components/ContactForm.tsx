'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Message sent!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert(data.error || "Something went wrong.");
      }
    } catch (err) {
      alert("Failed to send. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };


  return (
    <form
      onSubmit={handleSubmit}
      className="w-full mx-auto p-8 space-y-6 bg-parchment-light bg-[url('/noise.png')] bg-blend-multiply shadow-lg rounded-xl"
    >


      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 font-lora"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md bg-white border border-gray-300 shadow-sm focus:ring-2 focus:ring-black focus:border-black p-3"
          placeholder="Your name"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 font-lora"
        >
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md bg-white border border-gray-300 shadow-sm focus:ring-2 focus:ring-black focus:border-black p-3"
          placeholder="you@example.com"
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 font-lora"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          id="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md bg-white border border-gray-300 shadow-sm focus:ring-2 focus:ring-black focus:border-black p-3"
          placeholder="Write your message..."
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-black text-white py-3 rounded-md font-pirata text-lg hover:bg-gray-800 transition disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
