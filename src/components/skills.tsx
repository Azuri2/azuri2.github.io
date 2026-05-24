export default function Skills() {
  const skills = [
    'React',
    'TypeScript',
    'Python',
    'Laravel',
    'TailwindCSS',
    'MySQL',
    'Unity 3D',
    'Cybersecurity',
    'Git / GitHub',
    'Vue.js',
  ]

  return (
    <section id="skills" className="py-32 px-[8%] relative z-10">
      <div className="max-w-6xl mx-auto">

        <div className="mb-16">
          <p className="text-blue-500 uppercase tracking-[4px] text-sm mb-4 font-mono">
            Skills & Technologies
          </p>

          <h2 className="text-5xl font-bold text-white mb-6">
            Examples of the various tools I have used
          </h2>

          <p className="text-slate-400 max-w-2xl leading-relaxed text-lg">
            Technologies and tools I use to build my projects, create
            immersive experiences and scalable systems.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-blue-500/50 hover:-translate-y-1 transition-all duration-300"
            >
              <p className="text-slate-200 font-medium">
                {skill}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}