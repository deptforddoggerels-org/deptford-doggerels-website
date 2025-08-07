// components/ContactForm.tsx
'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData); // Replace with your own logic (email, database, etc)
    alert('Message sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 space-y-4  border shadow-md rounded-md bg-parchment-light bg-[url('/noise.png')]"
    >
      <h2 className="text-4xl font-bold  mb-2 font-pirata">Contact Us</h2>
      <p>
        We are open to submissions of all kinds of poetry and spoken word.

      </p>

      <p>
        Enter your details below
      </p>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md bg-white border-gray-300 shadow-sm focus:ring-black focus:border-black p-2"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md bg-white border-gray-300 shadow-sm focus:ring-black focus:border-black p-2"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md bg-white border-gray-300 shadow-sm focus:ring-black focus:border-black p-2"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition font-pirata"
      >
        Send Message
      </button>
    </form>
  );
}
