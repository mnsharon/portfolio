"use client";

import { useState } from "react";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactModal from "../components/ContactModal";
import About from "../components/About";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className="bg-[#fafafa] text-gray-800 font-sans">

      {/* HERO */}
      <section className="h-screen flex items-center justify-between px-24">

        {/* LEFT */}
        <div className="max-w-xl">
          <h1 className="text-6xl font-semibold leading-tight">
            Hello! I'm{" "}
            <span className="bg-pink-100 px-2 rounded-md">
              Sharon Preksha 👋
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            A multidisciplinary <span className="text-pink-400">developer</span> and{" "}
            <span className="text-pink-400">designer</span> (sometimes) with a passion
            for creating engaging, entertaining user experiences ✨
          </p>

          {/* 💖 CONTACT BUTTON (ADDED HERE) */}
          <button
            onClick={() => setOpen(true)}
            className="mt-6 px-6 py-3 bg-gradient-to-r from-pink-400 to-rose-400 text-white rounded-full shadow hover:scale-105 transition"
          >
            Let’s Connect 💖
          </button>
        </div>

        {/* RIGHT AVATAR */}
        <div className="flex justify-center items-center">
          <div className="bg-pink-100 rounded-full p-5">
            <img
              src="/avatar.png"
              className="w-70 h-70 rounded-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* SCROLL ICON */}
      <div className="flex justify-center -mt-16">
        <div className="animate-bounce text-pink-400 text-2xl">
          ↓
        </div>
      </div>

      {/* SKILLS */}
      <Skills />

      {/* PROJECTS */}
      <section className="px-24 py-32 bg-[#fff7f8]">
        <h2 className="text-3xl font-semibold mb-16 text-center text-gray-800">
          My Projects 💖
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* Bliss By Andrea */}
          <div className="group">
  <div className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">

    {/* TITLE */}
    <h3 className="text-xl font-semibold text-gray-800">
      Bliss By Andrea 💍
    </h3>

    {/* DESCRIPTION */}
    <p className="text-gray-600 mt-3 leading-6">
      A portfolio platform designed to showcase wedding coordination services,
      built with scalable backend systems and smooth user experience.
    </p>

    {/* BUTTON (aligned properly) */}
    <div className="mt-5">
      <a
        href="https://blissbyandrea.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-sm bg-pink-400 text-white px-5 py-2 rounded-full hover:scale-105 hover:shadow-md transition"
      >
        View Live 💖
      </a>
    </div>

  </div>
</div>
          {/* Skill Sprints */}
<div className="group">
  <div className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">

    {/* TITLE */}
    <h3 className="text-xl font-semibold text-gray-800">
      Skill Sprints 🚀
    </h3>

    {/* DESCRIPTION */}
    <p className="text-gray-600 mt-3 leading-6">
      A full-stack job platform connecting employers and candidates with
      real-time tracking, secure APIs, and scalable backend systems.
    </p>

    {/* BUTTON */}
    <div className="mt-5">
      <a
        href="https://www.skillsprints.in/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-sm bg-gradient-to-r from-pink-400 to-rose-400 text-white px-5 py-2 rounded-full hover:scale-105 hover:shadow-md transition"
      >
        View Project 🚀
      </a>
    </div>

  </div>
</div>

          {/* Portfolio */}
          <div className="group">
            <div className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition">
              <h3 className="text-xl font-semibold">Portfolio Website</h3>
              <p className="text-gray-600 mt-3">
                Built using Next.js and Tailwind CSS with aesthetic UI design.
              </p>
            </div>
          </div>

          {/* AI Chatbot */}
          <div className="group">
            <div className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition">
              <h3 className="text-xl font-semibold">AI Chatbot</h3>
              <p className="text-gray-600 mt-3">
                Built using Python and LangChain for intelligent conversations.
              </p>
            </div>
          </div>

          /* RouteBuddy */
<div className="group">
  <div className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">

    {/* TITLE */}
    <h3 className="text-xl font-semibold text-gray-800">
      RouteBuddy 🌿
    </h3>

    {/* DESCRIPTION */}
    <p className="text-gray-600 mt-3 leading-6">
      A soft, interactive app designed to help people find walking buddies,
      bike rides, and real-world connections — turning everyday routes into shared experiences 💖
    </p>

    {/* TECH */}
    <div className="flex flex-wrap gap-2 mt-4">
      {["React", "Maps API", "Node.js", "Real-time", "UI/UX"].map((t, i) => (
        <span
          key={i}
          className="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full"
        >
          {t}
        </span>
      ))}
    </div>

    {/* 🌿 BUTTONS */}
    <div className="flex gap-4 mt-6">

      {/* LIVE */}
      <a
        href="routebuddy.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-sm bg-gradient-to-r from-green-400 to-emerald-400 text-white px-5 py-2 rounded-full hover:scale-105 hover:shadow-md transition"
      >
        Explore 🌿
      </a>

      {/* GITHUB */}
      <a
        href="https://github.com/mnsharon/routebuddy"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-sm border border-green-300 text-green-600 px-5 py-2 rounded-full hover:bg-green-50 transition"
      >
        Code 💻
      </a>

    </div>

    {/* 🌿 underline */}
    <div className="mt-5 h-[2px] bg-gradient-to-r from-green-300 to-emerald-300 scale-x-0 group-hover:scale-x-100 transition origin-left"></div>

  </div>
</div>

        </div>
      </section>

      <About />

      {/* CONTACT SECTION */}
      <section className="px-24 py-32 text-center">
        <h2 className="text-2xl font-semibold mb-6">
          Let’s connect ✨
        </h2>

        <button
          onClick={() => setOpen(true)}
          className="bg-pink-400 text-white px-6 py-3 rounded-full hover:scale-105 transition"
        >
          Contact Me 💖
        </button>
      </section>

      {/* 💖 MODAL (THIS IS THE MAGIC) */}
      <ContactModal isOpen={open} onClose={() => setOpen(false)} />

    </main>
  );
}