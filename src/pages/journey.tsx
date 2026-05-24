function Journey() {
  const learning = [
    {
      title: 'Front-End Development',
      text: 'Learned how to build responsive and interactive interfaces using React, TailwindCSS and modern JavaScript.'
    },
    {
      title: 'Back-End Architecture',
      text: 'Worked with Node.js, MySQL and APIs to create scalable web applications and manage complex data flows.'
    },
    {
      title: 'Cybersecurity',
      text: 'Developed a strong interest in cybersecurity, networking and system protection through personal research and projects.'
    },
    {
      title: 'Project Management',
      text: 'Improved teamwork, autonomy and problem-solving skills through Epitech projects and collaborative work.'
    },
    {
      title: 'IA-DATA',
      text: 'Explored the world of data science, machine learning and AI, and how they can be applied to solve real-world problems.'
    },
    {
      title: 'Product Design',
      text: 'Gained experience in designing user-centered products, from wireframing to prototyping, with a focus on usability and aesthetics.'
    },
  ]

  return (
    <section id="journey" className="py-32 px-[8%] relative z-10">
      <div className="max-w-6xl mx-auto">

        <div className="mb-20">
          <p className="text-blue-500 uppercase tracking-[4px] text-sm mb-4 font-mono">
            Learning Journey
          </p>

          <h2 className="text-5xl font-bold text-white mb-6">
            What I Learned
          </h2>

          <p className="text-slate-400 max-w-3xl text-lg leading-relaxed">
            Throughout my journey at Epitech, I continuously improved my
            technical and professional skills by building projects,
            collaborating with teams and exploring new technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {learning.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-blue-500/30 transition-all"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                {item.title}
              </h3>

              <p className="text-slate-400 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
export default Journey
