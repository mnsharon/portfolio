export default function Projects() {
    const projects = [
      {
        title: "Bliss By Andrea",
        description:
          "Built and scaled backend systems for a dynamic portfolio platform. Developed CMS features, optimized data handling, and ensured seamless UI/UX collaboration with efficient AWS deployment.",
        tech: ["React", "JavaScript", "AWS", "HTML", "CSS"],
      },
      {
        title: "Skill Sprints",
        description:
          "Developed a full-stack job platform connecting employers and candidates. Built secure REST APIs, advanced filtering, and scalable backend systems with real-time tracking features.",
        tech: ["Python", "Django", "React", "PostgreSQL", "MongoDB", "AWS"],
      },
    ];
  
    return (
      <section className="px-20 py-32 bg-[#fff7f8]">
        <h2 className="text-3xl font-semibold mb-12 text-gray-800 text-center">
          My Projects 💖
        </h2>
  
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-6 bg-white/80 backdrop-blur-lg rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800">
                {project.title}
              </h3>
  
              {/* Description */}
              <p className="text-gray-600 mt-3 leading-6">
                {project.description}
              </p>
  
              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mt-5">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-pink-100 text-pink-600 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
  
              {/* Cute hover line */}
              <div className="mt-5 h-[2px] bg-gradient-to-r from-pink-300 to-rose-300 scale-x-0 group-hover:scale-x-100 transition origin-left"></div>
            </div>
          ))}
        </div>
      </section>
    );
  }