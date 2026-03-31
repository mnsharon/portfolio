"use client";

import { TypeAnimation } from "react-type-animation";

export default function About() {
  return (
    <section className="px-24 py-32 bg-[#fdf4f5] relative overflow-hidden">

      <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-pink-200 rounded-full blur-[130px] opacity-40"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[420px] h-[420px] bg-rose-200 rounded-full blur-[130px] opacity-40"></div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">

        <h2 className="text-3xl font-semibold mb-8 text-gray-800">
          A Little About Me 🌷
        </h2>

        <div className="text-gray-600 leading-8 text-lg">

          <TypeAnimation
            sequence={[
              "I wouldn’t say I’ve always been obsessed with coding… 💻✨",
              1200,
              "But somehow, step by step, it kept pulling me in 🌸",
              1200,
              "It’s not always easy — sometimes confusing, sometimes overwhelming…",
              1500,
              "But there’s something about it that makes me want to keep going 💖",
              1500,
              "I’m learning, building, and figuring things out one step at a time…",
              1500,
              "And somehow, I’ve started creating things I never thought I could ✨",
              1500,
              "Maybe that’s what I love the most — turning small ideas into something real 🌷",
              1500,
            ]}
            wrapper="p"
            speed={50}
            repeat={0}
          />

        </div>

        <p className="text-pink-400 mt-8 font-medium text-lg">
          still learning… still building… still growing 💖✨
        </p>

      </div>
    </section>
  );
}