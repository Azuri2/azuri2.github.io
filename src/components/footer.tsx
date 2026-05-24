export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-[8%] mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        <div>
          <h3
            className="text-white text-2xl"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            ANTOINE <span className="text-blue-500">GRABER</span>
          </h3>

          <p className="text-slate-500 mt-2 text-sm">
            Epitech Student
          </p>
        </div>

        <div className="flex items-center gap-6 text-slate-400 text-sm font-mono">

          <a
            href="https://github.com/Azuri2"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/antoine-graber-550852355"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>

          <a
            href="mailto:antoine.graber@epitech.eu"
            className="hover:text-white transition-colors"
          >
            Contact
          </a>

        </div>
      </div>
    </footer>
  )
}