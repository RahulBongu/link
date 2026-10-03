'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Moon, Sparkles, Sun } from 'lucide-react';

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('devlink-theme');
    const initialTheme = savedTheme === 'light' ? 'light' : 'dark';
    setTheme(initialTheme);
    document.documentElement.classList.toggle('light', initialTheme === 'light');
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
    window.localStorage.setItem('devlink-theme', theme);
  }, [theme]);

  return (
    <div className="min-h-screen text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
              <Sparkles size={18} />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.25em] text-white">DEVLINK</p>
              <p className="text-xs text-slate-400">Developer identity platform</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <Link href="/profile" className="transition hover:text-white">
              Profile demo
            </Link>
            <Link href="/blog" className="transition hover:text-white">
              Blog
            </Link>
            <a href="#features" className="transition hover:text-white">
              Features
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 transition hover:bg-white/10"
            aria-label="Toggle color theme"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </header>

      {children}

      <footer className="border-t border-white/10 bg-slate-950/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>DevLink • Built for placements, hackathons, internships, and hiring.</p>
          <div className="flex gap-4">
            <Link href="/profile" className="transition hover:text-white">
              Profile demo
            </Link>
            <Link href="/blog" className="transition hover:text-white">
              Blog
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
