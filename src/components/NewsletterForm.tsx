"use client";

import { useState, FormEvent } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | string>("idle");

  const validateEmail = (value: string) => {
    // Basic regex (better than browser default)
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(value.toLowerCase());
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        Email address
      </label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-black text-white py-2 font-pirata rounded-md hover:bg-gray-800 transition"
      >
        {status === "loading" ? "Signing up..." : "Sign up"}
      </button>

      {status === "success" && (
        <p className="text-green-600 text-sm">Thanks for subscribing!</p>
      )}
      {status !== "idle" && status !== "loading" && status !== "success" && (
        <p className="text-red-600 text-sm">{status}</p>
      )}
    </form>
  );
}
