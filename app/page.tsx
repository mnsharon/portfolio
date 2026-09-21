"use client";

import { useState } from "react";
import { FaArrowRight, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import About from "../components/About";
import ContactModal from "../components/ContactModal";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#0b0d12] text-[#f5f3ed]">
      <nav className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#0b0d12]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#home" className="text-lg font-semibold tracking-tight">SP<span className="text-[#b9ff66]">.</span></a>
          <div className="hidden items-center gap-8 text-sm text-white/60 md:flex">
            <a className="transition hover:text-white" href="#about">About</a>
            <a className="transition hover:text-white" href="#skills">Skills</a>
            <a className="transition hover:text-white" href="#projects">Work</a>
          </div>
          <button onClick={() => setOpen(true)} className="rounded-full border border-white/15 px-5 py-2 text-sm transition hover:border-[#b9ff66] hover:text-[#b9ff66]">
            Let&apos;s talk
          </button>
        </div>
      </nav>

      <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 lg:px-10">
        <div className="hero-glow" />
        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
          <div className="relative z-10">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#b9ff66]/25 bg-[#b9ff66]/5 px-4 py-2 text-xs uppercase tracking-[.22em] text-[#b9ff66]">
              <span className="h-2 w-2 rounded-full bg-[#b9ff66] animate-pulse" /> Available for opportunities
            </div>
            <p className="mb-4 text-sm uppercase tracking-[.3em] text-white/40">Full-stack developer · Creative technologist</p>
            <h1 className="max-w-4xl text-[clamp(3.6rem,8vw,7.8rem)] font-semibold leading-[.88] tracking-[-.065em]">
              Sharon<br/><span className="text-white/35">Preksha.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-white/55">
              I build thoughtful digital products that pair clean interfaces with reliable engineering — from full-stack platforms to AI-powered experiences.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#projects" className="group inline-flex items-center gap-3 rounded-full bg-[#b9ff66] px-6 py-3 font-medium text-[#0b0d12] transition hover:scale-[1.03]">
                View selected work <FaArrowRight className="transition group-hover:translate-x-1"/>
              </a>
              <button onClick={() => setOpen(true)} className="rounded-full border border-white/15 px-6 py-3 text-white/75 transition hover:bg-white/5">Contact me</button>
            </div>
            <div className="mt-12 flex gap-3">
              <a aria-label="GitHub" href="https://github.com/mnsharon" target="_blank" rel="noreferrer" className="social-link"><FaGithub/></a>
              <a aria-label="LinkedIn" href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="social-link"><FaLinkedinIn/></a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[480px]">
            <div className="portrait-frame">
              <div className="absolute inset-5 rounded-[2rem] border border-white/10" />
              <img src="/avatar.png" alt="Sharon Preksha" className="relative z-10 h-full w-full object-cover object-top" />
              <div className="absolute bottom-5 left-5 z-20 rounded-full bg-[#0b0d12]/85 px-4 py-2 text-xs text-white/65 backdrop-blur">
                Based in the US · Building for the web
              </div>
            </div>
            <div className="absolute -right-5 top-12 hidden rounded-2xl border border-white/10 bg-white/[.04] p-4 backdrop-blur md:block">
              <p className="text-3xl font-semibold text-[#b9ff66]">01</p><p className="mt-1 text-xs text-white/45">idea at a time</p>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Skills />
      <Projects />

      <section id="contact" className="px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#11141b] p-8 md:p-14">
          <p className="eyebrow">Have a project in mind?</p>
          <div className="mt-5 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <h2 className="max-w-3xl text-5xl font-semibold leading-[.95] tracking-[-.05em] md:text-7xl">Let&apos;s build something <span className="text-[#b9ff66]">worth remembering.</span></h2>
            <button onClick={() => setOpen(true)} className="shrink-0 rounded-full bg-[#b9ff66] px-7 py-4 font-medium text-[#0b0d12]">Start a conversation</button>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-sm text-white/35 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 sm:flex-row"><p>© 2026 Sharon Preksha</p><p>Designed & built with care.</p></div>
      </footer>
      <ContactModal isOpen={open} onClose={() => setOpen(false)} />
    </main>
  );
}
