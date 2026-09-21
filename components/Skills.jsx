"use client";
import { FaReact, FaPython, FaAws, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiNextdotjs, SiMongodb, SiTailwindcss, SiDocker, SiPostgresql } from "react-icons/si";

export default function Skills() {
 const skills=[["JavaScript",<SiJavascript/>],["TypeScript",<SiTypescript/>],["React",<FaReact/>],["Next.js",<SiNextdotjs/>],["Python",<FaPython/>],["Node.js",<FaNodeJs/>],["PostgreSQL",<SiPostgresql/>],["MongoDB",<SiMongodb/>],["Tailwind CSS",<SiTailwindcss/>],["AWS",<FaAws/>],["Docker",<SiDocker/>],["Git",<FaGitAlt/>]];
 return <section id="skills" className="px-6 py-28 lg:px-10"><div className="mx-auto max-w-7xl">
   <p className="eyebrow">Toolkit</p>
   <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end"><h2 className="section-title">Tools I use to<br/><span className="text-white/30">ship ideas.</span></h2><p className="max-w-md text-sm leading-7 text-white/40">A practical stack for building modern interfaces, dependable APIs, data-driven products, and cloud-ready applications.</p></div>
   <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">{skills.map(([name,icon],i)=><div key={i} className="card flex items-center gap-4 p-5"><span className="text-2xl text-[#b9ff66]">{icon}</span><span className="text-sm text-white/65">{name}</span></div>)}</div>
 </div></section>;
}
