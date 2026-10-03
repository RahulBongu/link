import { BadgeCheck, Code2, ExternalLink, Github, Linkedin, Mail, MapPin, Phone, Rocket, Sparkles } from 'lucide-react';

const links = [
  { label: 'GitHub', icon: Github, href: '#' },
  { label: 'LinkedIn', icon: Linkedin, href: '#' },
  { label: 'Resume', icon: ExternalLink, href: '#' },
];

const projects = [
  {
    title: 'AI Hiring Copilot',
    description: 'A recruiter assistant that summarizes candidate fit across GitHub, projects, and coding profiles.',
    stack: ['Next.js', 'OpenAI', 'Supabase'],
  },
  {
    title: 'CodeSignal Studio',
    description: 'A collaborative coding workspace for hackathons and assessment rounds.',
    stack: ['TypeScript', 'Socket.IO', 'Postgres'],
  },
];

export default function ProfilePage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <section className="overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 shadow-glow backdrop-blur-xl">
        <div className="h-48 bg-gradient-to-r from-brand-500 via-cyan-400 to-slate-900" />
        <div className="px-8 pb-8 pt-0 sm:px-10 lg:px-12">
          <div className="-mt-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="flex items-end gap-4">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-slate-950 bg-gradient-to-br from-brand-500 to-cyan-400 text-2xl font-semibold text-white">AC</div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-3xl font-semibold text-white">Alex Chen</h1>
                  <BadgeCheck className="text-cyan-300" size={20} />
                </div>
                <p className="mt-2 text-lg text-slate-300">Full Stack Developer • AI Engineer • Open to internships</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-full bg-brand-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-600">Resume</button>
              <button className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:bg-white/10">Contact</button>
              <button className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:bg-white/10">Share</button>
            </div>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">About</p>
                <p className="mt-3 text-slate-300 leading-8">
                  I build fast, thoughtful products at the intersection of design, AI, and developer tools. I enjoy creating polished experiences that help teams ship smarter and faster.
                </p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-white">Featured projects</h2>
                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">Featured</span>
                </div>
                <div className="mt-5 space-y-4">
                  {projects.map((project) => (
                    <div key={project.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-white">{project.title}</h3>
                        <Rocket size={16} className="text-cyan-300" />
                      </div>
                      <p className="mt-2 text-sm leading-7 text-slate-400">{project.description}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.stack.map((tag) => (
                          <span key={tag} className="rounded-full border border-white/10 bg-slate-900/70 px-2.5 py-1 text-xs text-slate-300">{tag}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Quick links</p>
                <div className="mt-4 space-y-3">
                  {links.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a key={link.label} href={link.href} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition hover:bg-white/10">
                        <span className="flex items-center gap-3">
                          <Icon size={16} className="text-cyan-300" />
                          {link.label}
                        </span>
                        <ExternalLink size={14} className="text-slate-500" />
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Profile highlights</p>
                <div className="mt-4 space-y-4 text-sm text-slate-300">
                  <div className="flex items-center gap-3"><MapPin size={16} className="text-cyan-300" /> Stanford, CA</div>
                  <div className="flex items-center gap-3"><Mail size={16} className="text-cyan-300" /> alex@devlink.app</div>
                  <div className="flex items-center gap-3"><Phone size={16} className="text-cyan-300" /> +1 (415) 555-0142</div>
                  <div className="flex items-center gap-3"><Code2 size={16} className="text-cyan-300" /> LeetCode 480 • Codeforces 1800+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
