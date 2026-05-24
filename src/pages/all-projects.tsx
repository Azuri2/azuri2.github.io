import { motion } from "framer-motion";
import { useState } from "react";
import data from "../data/project-page.json";

type TabType = "epitech" | "personal";

export default function ProjectsPage() {
    const [tab, setTab] = useState<TabType>("epitech");

    const projects = data[tab];

    return (
        <main className="min-h-screen text-white overflow-hidden relative">

        {/* ORBS */}
        <div
            className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none float"
            style={{
            background:
                "radial-gradient(circle, rgba(29,78,216,0.18) 0%, transparent 100%)",
            }}
        />

        <div
            className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full pointer-events-none float-r"
            style={{
            background:
                "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 100%)",
            }}
        />

        {/* HERO */}
        <section className="min-h-[60vh] flex items-center px-[8%] pt-32 relative z-10">
            <div className="max-w-5xl">

            <h1
                className="leading-none mb-6"
                style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(5rem,10vw,9rem)",
                letterSpacing: "2px",
                }}
            >
                MY{" "}
                <span
                style={{
                    background:
                    "linear-gradient(135deg, rgb(59, 130, 246), rgb(167, 139, 250))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
                >
                PROJECTS
                </span>
            </h1>

            <p className="text-slate-400 text-xl max-w-2xl mb-10">
                A selection of academic and personal projects.
            </p>

            {/* SELECTOR */}
            <div className="flex gap-3 mb-12">
                <button
                onClick={() => setTab("epitech")}
                className={`px-6 py-3 rounded-full border transition ${
                    tab === "epitech"
                    ? "bg-blue-500 border-blue-500 text-white"
                    : "border-white/20 text-slate-300"
                }`}
                >
                Epitech
                </button>

                <button
                onClick={() => setTab("personal")}
                className={`px-6 py-3 rounded-full border transition ${
                    tab === "personal"
                    ? "bg-blue-500 border-blue-500 text-white"
                    : "border-white/20 text-slate-300"
                }`}
                >
                Personal
                </button>
            </div>

            </div>
        </section>

        {/* PROJECTS GRID */}
        <section className="px-[8%] pb-32 relative z-10">
            <div className="grid lg:grid-cols-2 gap-10">

            {projects.map((project: any, index: number) => (
                <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[40px] border border-white/5 bg-[#111111]/60 backdrop-blur-sm hover:border-blue-500/20 transition-all duration-500"
                >

                {/* TOP PREVIEW */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#1d1d1d] to-[#0f0f0f] flex items-center justify-center">
                    <div className="text-[10rem] font-black text-white/[0.03] transition-transform duration-700">
                        {/* IMAGE BACKGROUND */}
                        <div
                            className="absolute inset-0 bg-cover bg-center group-hover:opacity-80 transition"
                            style={{
                            backgroundImage: project["img-background"]
                                ? `url(${project["img-background"]})`
                                : "none",
                            }}
                        />

                        {/* DARK OVERLAY */}
                        <div className="absolute inset-0 bg-black/40" />

                        {/* NUMBER */}
                        <div className="relative text-[10rem] font-black text-white/[0.1] group-hover:scale-110 transition-transform duration-700">
                            0{index + 1}
                        </div>
                    </div>


                    <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                        background:
                        "radial-gradient(circle at center, rgba(59,130,246,0.15), transparent 70%)",
                    }}
                    />
                </div>

                {/* CONTENT */}
                <div className="p-10">
                    <span className="uppercase tracking-[2px] text-blue-400 text-sm">
                    {project.category}
                    </span>

                    <h2 className="text-4xl font-bold mt-4 mb-5">
                    {project.title}
                    </h2>

                    <p className="text-slate-400 leading-relaxed mb-8">
                    {project.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-10">
                    {project.tech.map((tech: string, i: number) => (
                        <span
                        key={i}
                        className="px-4 py-2 rounded-full border border-white/5 bg-[#1a1a1a] text-slate-300 text-sm"
                        >
                        {tech}
                        </span>
                    ))}
                    </div>

                    <div className="flex gap-4 flex-wrap">
                    <a
                        href={project.github}
                        className="px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors font-semibold"
                    >
                        View Project
                    </a>

                    <a
                        href={project.github}
                        className="px-6 py-3 rounded-full border border-white/10 hover:border-white/30 transition-colors text-slate-300"
                    >
                        GitHub
                    </a>
                    </div>
                </div>

                </motion.div>
            ))}

            </div>
        </section>
        </main>
    );
}