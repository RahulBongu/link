'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  Code2,
  Github,
  ImageIcon,
  Layers3,
  Linkedin,
  PlayCircle,
  Sparkles,
  Star,
  Trophy,
  UserRound,
} from 'lucide-react';

const features = [
  {
    title: 'Recruiter-ready profile',
    description: 'Projects, resume, GitHub, coding stats, and contact details in one elegant view.',
    icon: UserRound,
  },
  {
    title: 'AI-powered growth',
    description: 'Get resume scoring, placement suggestions, and portfolio improvement insight.',
    icon: BrainCircuit,
  },
  {
    title: 'Lightning-fast experience',
    description: 'Every interaction feels premium, responsive, and built for zero-friction sharing.',
    icon: Sparkles,
  },
];

const stats = [
  { label: 'Profiles built', value: '12k+' },
  { label: 'Recruiter views', value: '1.2M' },
  { label: 'Average score', value: '96/100' },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute right-[-8%] top-20 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <section className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glow backdrop-blur-xl sm:p-10 lg:p-16"
        >
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
            <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1">New • AI portfolio intelligence</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Built for placements, hackathons, and hiring</span>
          </div>

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Your entire developer identity. <span className="text-cyan-300">One beautiful profile.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Everything recruiters need — projects, resume, GitHub, coding profiles, skills, achievements, and contact details — all surfaced in a premium experience worthy of modern hiring.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#features" className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-brand-600">
                  Get started <ArrowRight size={16} />
                </a>
                <a href="#preview" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-slate-100 transition hover:bg-white/10">
                  <PlayCircle size={16} /> View demo
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-400">
                {['GitHub', 'LinkedIn', 'Resume', 'Projects', 'Coding Profiles'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <BadgeCheck size={16} className="text-cyan-300" /> {item}
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="rounded-3xl border border-white/10 bg-slate-950/70 p-5 shadow-2xl"
            >
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">DevLink / alex</p>
                    <h2 className="mt-1 text-2xl font-semibold text-white">Alex Chen</h2>
                  </div>
                  <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 p-2 text-cyan-300">
                    <Sparkles size={18} />
                  </div>
                </div>
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-cyan-400 text-sm font-semibold">AC</div>
                    <div>
                      <p className="font-medium text-white">Full Stack Developer • AI Engineer</p>
                      <p className="text-sm text-slate-400">Stanford • Open to internships</p>
                    </div>
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl border border-white/10 bg-slate-900/80 p-3">
                      <div className="flex items-center gap-2 text-sm text-slate-400">
                        <Github size={14} /> GitHub activity
                      </div>
                      <div className="mt-3 h-2 rounded-full bg-slate-800">
                        <div className="h-2 w-4/5 rounded-full bg-gradient-to-r from-brand-500 to-cyan-400" />
                      </div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-slate-900/80 p-3">
                      <div className="flex items-center gap-2 text-sm text-slate-400">
                        <Code2 size={14} /> Coding platforms
                      </div>
                      <div className="mt-3 flex gap-2 text-xs text-slate-300">
                        <span className="rounded-full bg-white/10 px-2 py-1">LeetCode 480</span>
                        <span className="rounded-full bg-white/10 px-2 py-1">Codeforces 1800+</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-slate-100">Resume</button>
                  <button className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-slate-100">Contact</button>
                  <button className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-slate-100">Share</button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">Why DevLink</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">A platform designed to feel as premium as the developers it represents.</h2>
            <p className="mt-4 text-slate-400">From recruiter view to AI growth tools, every detail is optimized for clarity, trust, and conversion.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-[24px] border border-white/10 bg-slate-950/70 p-6"
                >
                  <div className="inline-flex rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">
                    <Icon size={18} />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-400">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="preview" className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl">
            <div className="flex items-center gap-3 text-sm text-slate-400">
              <Layers3 size={16} className="text-cyan-300" /> Live profile preview
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-white">Recruiters can understand your story in under a minute.</h2>
            <div className="mt-6 space-y-4 text-slate-300">
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                <Trophy size={18} className="mt-1 text-cyan-300" />
                <div>
                  <p className="font-medium text-white">Featured projects and achievements</p>
                  <p className="mt-1 text-sm text-slate-400">Premium cards make your work instantly scannable.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                <ImageIcon size={18} className="mt-1 text-cyan-300" />
                <div>
                  <p className="font-medium text-white">Polished visuals and smart layout</p>
                  <p className="mt-1 text-sm text-slate-400">Built for desktop, tablet, and mobile without compromise.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-slate-950/70 p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Developer profile</p>
                <h3 className="text-2xl font-semibold text-white">Alex Chen</h3>
              </div>
              <div className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-sm text-slate-300">Verified</div>
            </div>
            <div className="mt-6 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-cyan-400 text-lg font-semibold text-white">AC</div>
              <div>
                <p className="font-medium text-white">Senior Product Engineer</p>
                <p className="text-sm text-slate-400">Open Source • React • AI</p>
              </div>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Next.js', 'TypeScript', 'Supabase', 'Tailwind', 'Framer Motion'].map((skill) => (
                <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl">
          <p className="text-sm font-medium uppercase tracking-[0.32em] text-cyan-300">Designed for the future of developer hiring</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold text-white sm:text-4xl">
            Premium enough for recruiters. Powerful enough for builders.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-slate-300">
            <div className="rounded-full border border-white/10 bg-slate-950/60 px-4 py-2">Dark mode</div>
            <div className="rounded-full border border-white/10 bg-slate-950/60 px-4 py-2">Localized content</div>
            <div className="rounded-full border border-white/10 bg-slate-950/60 px-4 py-2">SEO optimized</div>
            <div className="rounded-full border border-white/10 bg-slate-950/60 px-4 py-2">Headless CMS blog</div>
          </div>
        </div>
      </section>
    </main>
  );
}
