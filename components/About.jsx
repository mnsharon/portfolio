export default function About() {
  return (
    <section id="about" className="border-y border-white/10 bg-[#0e1117] px-6 py-28 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.65fr_1.35fr]">
        <div><p className="eyebrow">About me</p><p className="mt-4 text-sm leading-6 text-white/35">Curious by nature.<br/>Intentional by design.</p></div>
        <div>
          <h2 className="section-title">I turn ideas into <span className="text-white/30">useful, human-centered products.</span></h2>
          <div className="mt-10 grid gap-8 text-base leading-8 text-white/50 md:grid-cols-2">
            <p>I&apos;m a developer who enjoys working across the stack — shaping interfaces, building backend systems, and connecting the details that make a product feel complete.</p>
            <p>My work spans web applications, cloud-backed platforms, and AI experiments. I care about clarity, performance, thoughtful interaction, and continuously improving how I build.</p>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
            <div><p className="text-2xl font-semibold text-[#b9ff66]">Full-stack</p><p className="mt-1 text-xs text-white/35">Product engineering</p></div>
            <div><p className="text-2xl font-semibold text-[#b9ff66]">AI</p><p className="mt-1 text-xs text-white/35">Intelligent experiences</p></div>
            <div><p className="text-2xl font-semibold text-[#b9ff66]">Cloud</p><p className="mt-1 text-xs text-white/35">Scalable delivery</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
