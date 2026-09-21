import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

const projects=[
 {num:"01",title:"Bliss By Andrea",desc:"A polished portfolio platform for wedding coordination services, combining an elegant client-facing experience with dependable backend and deployment workflows.",tech:["React","JavaScript","AWS"],live:"https://blissbyandrea.com/"},
 {num:"02",title:"Skill Sprints",desc:"A full-stack job platform connecting employers and candidates with secure APIs, advanced filtering, scalable data handling, and real-time workflow features.",tech:["Python","Django","React","PostgreSQL","AWS"],live:"https://www.skillsprints.in/"},
 {num:"03",title:"RouteBuddy",desc:"A social route experience that helps people find walking and cycling buddies, turning everyday movement into real-world connection.",tech:["React","Maps API","Node.js","Real-time"],live:"https://routebuddy.vercel.app",code:"https://github.com/mnsharon/routebuddy"},
 {num:"04",title:"AI Chatbot",desc:"An intelligent conversational experience exploring Python and LangChain patterns for useful, context-aware interactions.",tech:["Python","LangChain","AI"]},
];

export default function Projects(){
 return <section id="projects" className="border-y border-white/10 bg-[#0e1117] px-6 py-28 lg:px-10"><div className="mx-auto max-w-7xl">
  <p className="eyebrow">Selected work</p><h2 className="section-title mt-4">Projects built with<br/><span className="text-white/30">purpose & curiosity.</span></h2>
  <div className="mt-14 grid gap-4 md:grid-cols-2">{projects.map((p)=><article key={p.num} className="card group flex min-h-[340px] flex-col p-7 md:p-9">
    <div className="flex items-start justify-between"><span className="text-sm text-white/25">{p.num}</span><div className="flex gap-2">{p.code&&<a aria-label="View code" className="social-link" href={p.code} target="_blank" rel="noreferrer"><FaGithub/></a>}{p.live&&<a aria-label="View live project" className="social-link" href={p.live} target="_blank" rel="noreferrer"><FaArrowUpRightFromSquare/></a>}</div></div>
    <div className="mt-auto"><h3 className="text-3xl font-semibold tracking-[-.04em]">{p.title}</h3><p className="mt-4 max-w-xl leading-7 text-white/45">{p.desc}</p><div className="mt-6 flex flex-wrap gap-2">{p.tech.map(t=><span key={t} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/40">{t}</span>)}</div></div>
  </article>)}</div>
 </div></section>
}
