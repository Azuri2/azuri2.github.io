import { useState } from 'react'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xlgvjqvd'

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [sent, setSent] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        try {
        const res = await fetch(FORMSPREE_ENDPOINT, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            },
            body: JSON.stringify(form),
        })

        if (!res.ok) throw new Error()

        setSent(true)
        setForm({ name: '', email: '', message: '' })
        } catch {
        setError('Something went wrong. Please try again or email me directly.')
        } finally {
        setLoading(false)
        }
    }

    const socials = [
        {
        label: 'GitHub',
        handle: 'Azuri2',
        href: 'https://github.com/Azuri2',
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.58 2 12.21c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.72 0 0 .84-.28 2.75 1.05a9.4 9.4 0 0 1 2.5-.34c.85 0 1.7.11 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.58.69.48A10.22 10.22 0 0 0 22 12.21C22 6.58 17.52 2 12 2Z" />
            </svg>
        ),
        },
        {
        label: 'LinkedIn',
        handle: 'Antoine Graber',
        href: 'https://www.linkedin.com/in/antoine-graber-550852355/',
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
            </svg>
        ),
        },
        {
        label: 'Email',
        handle: 'antoine.graber@epitech.eu',
        href: 'mailto:antoine.graber@epitech.eu',
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m2 7 10 7 10-7" />
            </svg>
        ),
        },
    ]

    return (
        <section id="contact" className="py-32 px-[8%] relative overflow-hidden">

        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
            <span className="inline-block w-10 h-px bg-blue-500" />
            <span
            className="text-blue-500 uppercase"
            style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.75rem', letterSpacing: '3px' }}
            >
            Get in touch
            </span>
        </div>

        {/* Title */}
        <h2
            className="mb-16 leading-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3rem,7vw,6rem)', letterSpacing: '2px' }}
        >
            <span className="text-slate-50">CONTACT </span>
            <span
            style={{
                background: 'linear-gradient(135deg,#3b82f6,#a78bfa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
            }}
            >
            ME
            </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
            {/* LEFT — socials + blurb */}
            <div>
            <p className="text-slate-400 leading-relaxed mb-10 font-light max-w-md">
                I'm always open to new opportunities, collaborations, or just a good tech conversation.
                Feel free to reach out via the form or through any of the links below.
            </p>

            <div className="flex flex-col gap-4">
                {socials.map((s) => (
                <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    group flex items-center gap-4
                    p-4 rounded-2xl
                    bg-white/[0.03] border border-white/[0.07]
                    hover:border-blue-500/30 hover:bg-white/[0.05]
                    transition-all duration-300
                    "
                >
                    <div className="text-slate-500 group-hover:text-blue-400 transition-colors">
                    {s.icon}
                    </div>
                    <div>
                    <div className="text-slate-200 text-sm font-medium">{s.label}</div>
                    <div className="text-slate-500 text-xs font-mono">{s.handle}</div>
                    </div>
                    <svg
                    className="ml-auto text-slate-700 group-hover:text-blue-400 group-hover:translate-x-1 transition-all"
                    width="14" height="14" viewBox="0 0 12 12" fill="none"
                    >
                    <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>
                ))}
            </div>
            </div>

            {/* RIGHT — Form */}
            <div>
            {sent ? (
                <div className="h-full flex flex-col items-center justify-center gap-4 rounded-3xl border border-blue-500/20 bg-blue-500/5 p-12 text-center">
                <h3
                    className="text-slate-100 text-2xl"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '2px' }}
                >
                    Message sent!
                </h3>
                <p className="text-slate-400 text-sm">I'll get back to you as soon as possible.</p>
                <button
                    onClick={() => setSent(false)}
                    className="mt-4 text-blue-400 text-xs font-mono hover:text-blue-300 transition-colors"
                >
                    Send another
                </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name */}
                <div className="flex flex-col gap-2">
                    <label className="text-slate-500 font-mono text-xs" style={{ letterSpacing: '1px' }}>
                    NAME
                    </label>
                    <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="
                        w-full px-4 py-3 rounded-xl
                        bg-white/[0.04] border border-white/[0.08]
                        text-slate-200 text-sm font-light
                        placeholder:text-slate-600
                        focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.06]
                        transition-all duration-300
                    "
                    />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                    <label className="text-slate-500 font-mono text-xs" style={{ letterSpacing: '1px' }}>
                    EMAIL
                    </label>
                    <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="
                        w-full px-4 py-3 rounded-xl
                        bg-white/[0.04] border border-white/[0.08]
                        text-slate-200 text-sm font-light
                        placeholder:text-slate-600
                        focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.06]
                        transition-all duration-300
                    "
                    />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                    <label className="text-slate-500 font-mono text-xs" style={{ letterSpacing: '1px' }}>
                    MESSAGE
                    </label>
                    <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="What's on your mind?"
                    className="
                        w-full px-4 py-3 rounded-xl
                        bg-white/[0.04] border border-white/[0.08]
                        text-slate-200 text-sm font-light
                        placeholder:text-slate-600
                        focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.06]
                        transition-all duration-300
                        resize-none
                    "
                    />
                </div>

                {/* Error message */}
                {error && (
                    <p className="text-red-400 text-xs font-mono">{error}</p>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    className="
                    mt-2 w-full py-3 rounded-xl
                    bg-blue-600 hover:bg-blue-500
                    disabled:opacity-50 disabled:cursor-not-allowed
                    text-white font-mono text-sm
                    tracking-wider
                    transition-all duration-300
                    hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]
                    "
                >
                    {loading ? 'SENDING...' : 'SEND MESSAGE →'}
                </button>
                </form>
            )}
            </div>
        </div>
        </section>
    )
}