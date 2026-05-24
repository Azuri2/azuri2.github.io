export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen px-[8%] py-32 flex items-center"
    >
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-20 items-center">
        <div className="flex justify-center">
          <img
            src="/image.png"
            alt="Antoine Graber"
            className="w-[320px] h-[420px] object-cover rounded-3xl border border-white/10 shadow-2xl"
          />
        </div>

        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-px bg-blue-500" />

            <span
              className="uppercase text-blue-500 tracking-[3px]"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              About Me
            </span>
          </div>

          <h2
            className="text-slate-50 mb-8 leading-none"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(3rem,7vw,5rem)",
            }}
          >
            Passionate About
            <span className="block text-blue-500">
              Building & Learning
            </span>
          </h2>

          <p className="text-slate-400 leading-relaxed text-lg mb-6">
            I am a student at Epitech passionate about web development,
            cybersecurity and artificial intelligence.
          </p>

          <p className="text-slate-500 leading-relaxed">
            My goal is to create modern and meaningful digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
}