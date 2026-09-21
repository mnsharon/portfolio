"use client";
import { motion } from "framer-motion";

export default function ContactModal({isOpen,onClose}) {
 if(!isOpen) return null;
 return <div className="fixed inset-0 z-50 flex items-center justify-center p-4"><button aria-label="Close modal" className="absolute inset-0 bg-black/70 backdrop-blur-md" onClick={onClose}/>
 <motion.div initial={{opacity:0,y:20,scale:.97}} animate={{opacity:1,y:0,scale:1}} className="relative w-full max-w-lg rounded-[2rem] border border-white/10 bg-[#12151c] p-7 shadow-2xl md:p-9">
  <button onClick={onClose} className="absolute right-6 top-5 text-xl text-white/35 hover:text-white">×</button>
  <p className="eyebrow">Contact</p><h2 className="mt-3 text-4xl font-semibold tracking-[-.04em]">Let&apos;s make something great.</h2>
  <p className="mt-4 text-sm leading-6 text-white/45">Have an opportunity, collaboration, or idea? Send a note and let&apos;s start a conversation.</p>
  <form className="mt-8 flex flex-col gap-3" onSubmit={(e)=>e.preventDefault()}>
   <input required type="text" placeholder="Your name" className="rounded-xl border border-white/10 bg-white/[.03] p-4 text-sm outline-none placeholder:text-white/25 focus:border-[#b9ff66]/60"/>
   <input required type="email" placeholder="Email address" className="rounded-xl border border-white/10 bg-white/[.03] p-4 text-sm outline-none placeholder:text-white/25 focus:border-[#b9ff66]/60"/>
   <textarea required rows={5} placeholder="Tell me about your idea..." className="rounded-xl border border-white/10 bg-white/[.03] p-4 text-sm outline-none placeholder:text-white/25 focus:border-[#b9ff66]/60"/>
   <button type="submit" className="mt-2 rounded-full bg-[#b9ff66] py-4 font-medium text-[#0b0d12]">Send message</button>
  </form>
 </motion.div></div>
}
