"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactModal({isOpen,onClose}) {
 const [status,setStatus]=useState("idle");
 const [error,setError]=useState("");
 if(!isOpen) return null;

 async function handleSubmit(e){
  e.preventDefault(); setStatus("sending"); setError("");
  const form=e.currentTarget;
  const data=Object.fromEntries(new FormData(form));
  try{
   const res=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)});
   const body=await res.json();
   if(!res.ok) throw new Error(body.error||"Message could not be sent.");
   setStatus("sent"); form.reset();
  }catch(err){setError(err.message||"Message could not be sent.");setStatus("error");}
 }

 function close(){setStatus("idle");setError("");onClose();}

 return <div className="fixed inset-0 z-50 flex items-center justify-center p-4"><button aria-label="Close modal" className="absolute inset-0 bg-black/70 backdrop-blur-md" onClick={close}/>
 <motion.div initial={{opacity:0,y:20,scale:.97}} animate={{opacity:1,y:0,scale:1}} className="relative w-full max-w-lg rounded-[2rem] border border-white/10 bg-[#12151c] p-7 shadow-2xl md:p-9">
  <button onClick={close} className="absolute right-6 top-5 text-xl text-white/35 hover:text-white">×</button>
  <p className="eyebrow">Contact</p><h2 className="mt-3 text-4xl font-semibold tracking-[-.04em]">Let&apos;s make something great.</h2>
  <p className="mt-4 text-sm leading-6 text-white/45">Have an opportunity, collaboration, or idea? Send a note and let&apos;s start a conversation.</p>
  {status==="sent" ? <div className="mt-8 rounded-2xl border border-[#b9ff66]/30 bg-[#b9ff66]/5 p-6"><p className="text-xl font-medium text-[#b9ff66]">Message sent ✓</p><p className="mt-2 text-sm leading-6 text-white/50">Thanks for reaching out. Your message has been delivered.</p><button onClick={close} className="mt-5 rounded-full border border-white/15 px-5 py-2 text-sm">Close</button></div> :
  <form className="mt-8 flex flex-col gap-3" onSubmit={handleSubmit}>
   <input name="name" required maxLength={100} type="text" placeholder="Your name" className="rounded-xl border border-white/10 bg-white/[.03] p-4 text-sm outline-none placeholder:text-white/25 focus:border-[#b9ff66]/60"/>
   <input name="email" required maxLength={200} type="email" placeholder="Email address" className="rounded-xl border border-white/10 bg-white/[.03] p-4 text-sm outline-none placeholder:text-white/25 focus:border-[#b9ff66]/60"/>
   <textarea name="message" required maxLength={5000} rows={5} placeholder="Tell me about your idea..." className="rounded-xl border border-white/10 bg-white/[.03] p-4 text-sm outline-none placeholder:text-white/25 focus:border-[#b9ff66]/60"/>
   {error&&<p className="text-sm text-red-300">{error}</p>}
   <button disabled={status==="sending"} type="submit" className="mt-2 rounded-full bg-[#b9ff66] py-4 font-medium text-[#0b0d12] disabled:cursor-not-allowed disabled:opacity-60">{status==="sending"?"Sending...":"Send message"}</button>
  </form>}
 </motion.div></div>
}
