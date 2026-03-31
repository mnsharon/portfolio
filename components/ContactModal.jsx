"use client";

import { motion } from "framer-motion";

export default function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">

      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* MODAL */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-2xl w-[90%] max-w-md overflow-hidden"
      >

        {/* 🌸 Cute Background Blobs */}
        <div className="absolute -top-12 -left-12 w-40 h-40 bg-pink-200 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-rose-200 rounded-full blur-3xl opacity-40"></div>

        {/* 💖 Title */}
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-3">
          Let’s Connect 💖
        </h2>

        {/* ✨ Cute Message */}
        <p className="text-center text-gray-600 text-sm mb-6 leading-6">
          Let’s turn ideas into something beautiful ✨ <br />
          Whether it’s a virtual chat or a cozy coffee ☕💖
        </p>

        {/* FORM */}
        <form className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Your Name 🌸"
            className="p-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
          />

          <input
            type="email"
            placeholder="Your Email 💌"
            className="p-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
          />

          <textarea
            placeholder="Your Message ✨"
            rows="4"
            className="p-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
          />

          <button
            type="submit"
            className="mt-4 bg-gradient-to-r from-pink-400 to-rose-400 text-white py-3 rounded-full shadow hover:scale-105 transition"
          >
            Send Message 💖
          </button>

        </form>

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-400 hover:text-gray-700 text-lg"
        >
          ✕
        </button>

      </motion.div>
    </div>
  );
}