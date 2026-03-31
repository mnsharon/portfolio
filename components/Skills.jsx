"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaPython,
  FaAws,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiDocker,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Python", icon: <FaPython /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "Docker", icon: <SiDocker /> },
    { name: "Git", icon: <FaGitAlt /> },
  ];

  return (
    <section className="px-24 py-32 bg-gradient-to-b from-[#fff1f3] to-[#fdf4f5] text-center">
      
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold mb-16 text-gray-800"
      >
        My Skills ✨
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto">

        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ scale: 1.1, rotate: 2 }}
            className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/70 backdrop-blur-lg shadow-md hover:shadow-xl transition"
          >

            {/* ICON */}
            <div className="text-3xl text-pink-500 bg-pink-100 p-4 rounded-full group-hover:bg-pink-200 transition">
              {skill.icon}
            </div>

            {/* TEXT */}
            <p className="text-sm text-gray-700 font-medium">
              {skill.name}
            </p>

          </motion.div>
        ))}

      </div>
    </section>
  );
}