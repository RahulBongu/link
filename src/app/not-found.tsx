import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">404</p>
      <h1 className="mt-4 text-4xl font-semibold text-white">This page is still being crafted.</h1>
      <p className="mt-4 text-lg text-slate-300">Return to the home experience and continue exploring DevLink.</p>
      <Link href="/" className="mt-8 rounded-full bg-brand-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-brand-600">
        Back home
      </Link>
    </main>
  );
}
