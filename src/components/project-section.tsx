const projects = [
{
    title: 'E-TODO',
    tag: 'React, Nodejs, TypeScript, MYSQL - EPITECH',
    desc: 'A web-based organizational app that lets you create, edit, and delete tasks, with a deadline feature.',
    year: '2025',
    gradient: 'linear-gradient(135deg,#1d4ed8,#7c3aed)',
    icon: '📋',
    github: '#',
},
{
    title: 'Hack&Juice',
    tag: 'Pentesting - EPITECH',
    desc: 'Penetration testing a website to identify vulnerabilities and address them.',
    year: '2025',
    gradient: 'linear-gradient(135deg,#0ea5e9,#2563eb)',
    icon: '🛡️',
    github: '#',
},
{
    title: 'YOWL',
    tag: 'React, Nodejs, TypeScript, MYSQL - EPITECH',
    desc: 'Design the MVP for a new social web application that addresses a specific user need.',
    year: '2025',
    gradient: 'linear-gradient(135deg,#7c3aed,#db2777)',
    icon: '📱',
    github: '#',
},
{
    title: 'Tardis',
    tag: 'Python - EPITECH',
    desc: 'Using data from the SNCF, the goal was to clean and analyze historical delay data in order to develop a predictive model and an interactive Streamlit dashboard.',
    year: '2026',
    gradient: 'linear-gradient(135deg,#059669,#0ea5e9)',
    icon: '🚆',
    github: '#',
},
{
    title: 'NextBuy',
    tag: 'Python - EPITECH',
    desc: 'Data Analysis: Turning millions of raw grocery purchase records into actionable strategies.',
    year: '2026',
    gradient: 'linear-gradient(135deg,#059669,#0ea5e9)',
    icon: '🛒',
    github: '#',
},
{
    title: 'Alice in wonderland',
    tag: 'Python - EPITECH',
    desc: 'Develop a command-line NLP engine that transforms long books into concise summaries.',
    year: '2026',
    gradient: 'linear-gradient(135deg,#059669,#0ea5e9)',
    icon: '📚',
    github: '#',
},
{
    title: 'Eliza',
    tag: 'Python - EPITECH',
    desc: 'Design and implement an intelligent chatbot based on large language models.',
    year: '2026',
    gradient: 'linear-gradient(135deg,#059669,#0ea5e9)',
    icon: '🤖',
    github: '#',
},
]

export default function Projects() {
return (
    <section id="projects" className="py-32 px-[8%] relative overflow-hidden">
        {/* Background orb */}
        <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none blur-3xl"
            style={{
            background:
                'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)',
            }}
        />

        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
            <span className="inline-block w-10 h-px bg-blue-500" />

            <span
            className="text-blue-500 uppercase"
            style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.75rem',
                letterSpacing: '3px',
            }}
            >
            Selected work
            </span>
        </div>

        {/* Title */}
        <h2
            className="mb-16 leading-none"
            style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(3rem,7vw,6rem)',
            letterSpacing: '2px',
            }}
        >
            <span className="text-slate-50">Preview of </span>

            <span
            style={{
                background: 'linear-gradient(135deg,#3b82f6,#a78bfa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
            }}
            >
            PROJECTS
            </span>
        </h2>

        {/* SLIDER */}
        <div className="relative">
            {/* LEFT FADE */}
            <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />

            {/* RIGHT FADE */}
            <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-slate-950 via-slate-950/80 to-transparent" />

            {/* SCROLL CONTAINER */}
            <div
                className="
                    flex gap-7
                    overflow-x-auto
                    px-10 md:px-14
                    py-4 pb-8
                    snap-x snap-mandatory
                    custom-scroll
                "
                >
                {projects.map((p) => (
                    <a
                    key={p.title}
                    href={p.github}
                    className="
                        group relative
                        min-w-[340px]
                        max-w-[340px]
                        rounded-3xl
                        p-7
                        flex flex-col gap-5
                        flex-shrink-0
                        snap-center
                        transition-all duration-500
                        hover:-translate-y-3
                        bg-white/[0.03]
                        border border-white/[0.07]
                        backdrop-blur-xl
                        hover:border-blue-500/30
                        hover:bg-white/[0.05]
                        hover:shadow-[0_0_40px_rgba(59,130,246,0.12)]
                    "
                    >
                {/* TOP */}
                <div className="flex items-start justify-between gap-4">
                    <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-lg"
                    style={{ background: p.gradient }}
                    >
                    {p.icon}
                    </div>

                    <div className="flex items-center gap-2 flex-1 justify-end min-w-0">
                    <div className="flex flex-wrap gap-1 justify-end max-w-[170px]">
                        {p.tag.split(',').map((tagItem) => (
                        <span
                            key={tagItem}
                            className="
                            px-2 py-1
                            rounded-md
                            text-[9px]
                            font-mono
                            whitespace-nowrap
                            bg-blue-500/10
                            text-blue-400
                            border border-blue-500/20
                            "
                        >
                            {tagItem.trim()}
                        </span>
                        ))}
                    </div>

                    <span
                        className="flex-shrink-0 font-mono text-slate-600"
                        style={{ fontSize: '0.65rem' }}
                    >
                        {p.year}
                    </span>
                    </div>
                </div>

                {/* CONTENT */}
                <div>
                    <h3
                    className="
                        text-slate-100
                        mb-3
                        text-3xl
                        tracking-wide
                        transition-colors
                        group-hover:text-blue-400
                    "
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                    {p.title}
                    </h3>

                    <p className="text-slate-400 text-sm leading-relaxed font-light">
                    {p.desc}
                    </p>
                </div>

                {/* FOOTER */}
                <div
                    className="
                    mt-auto
                    flex items-center gap-2
                    text-slate-500
                    group-hover:text-blue-400
                    transition-colors
                    text-xs
                    font-mono
                    "
                >
                    <span>View on GitHub</span>

                    <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="transition-transform group-hover:translate-x-1"
                    >
                    <path
                        d="M2 6h8M7 3l3 3-3 3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    </svg>
                </div>

                {/* GLOW */}
                <div
                    className="
                    absolute inset-0
                    rounded-3xl
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                    pointer-events-none
                    bg-gradient-to-br
                    from-blue-500/[0.06]
                    to-purple-500/[0.06]
                    "
                />
                </a>
            ))}
            </div>
        </div>
    </section>
)
}