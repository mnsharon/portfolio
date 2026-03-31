export default function Hero({ onContactClick }) {
    return (
      <section className="relative h-screen flex items-center justify-between px-20 overflow-hidden bg-[#fff0f5]">
  
        {/* BACKGROUND BLOBS */}
        <div className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-pink-300 rounded-full blur-[120px] opacity-60 z-0"></div>
        <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-rose-300 rounded-full blur-[120px] opacity-60 z-0"></div>
  
        {/* LEFT */}
        <div className="relative z-10">
          <h1 className="text-5xl font-semibold leading-tight text-gray-800">
            Hello! I'm{" "}
            <span className="bg-pink-200 px-3 py-1 rounded-xl">
              Sharon
            </span>
            <br />
            <span className="bg-rose-200 px-3 py-1 rounded-xl">
              Preksha 👋
            </span>
          </h1>
  
          <p className="mt-5 text-lg text-gray-600 max-w-md">
            A soft aesthetic{" "}
            <span className="text-pink-500 font-medium">developer</span> who loves
            building cute, meaningful digital experiences ✨
          </p>
  
          {/* 💖 BUTTON */}
          <button
            onClick={onContactClick}
            className="mt-6 px-6 py-3 bg-gradient-to-r from-pink-400 to-rose-400 text-white rounded-full shadow-md hover:scale-105 transition"
          >
            Let’s Connect 💖
          </button>
        </div>
  
        {/* RIGHT */}
        <div className="relative z-10 flex items-center justify-center">
  
          <div className="absolute w-80 h-80 bg-pink-300 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute w-64 h-64 border-4 border-pink-300 rounded-full"></div>
  
          <img
            src="/avatar.png"
            className="relative w-60 h-60 rounded-full object-cover shadow-xl"
          />
        </div>
  
      </section>
    );
  }