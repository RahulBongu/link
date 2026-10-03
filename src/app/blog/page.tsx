import Link from 'next/link';

const posts = [
  {
    title: 'Designing a recruiter-friendly developer profile',
    description: 'A playbook for surfacing projects, resumes, coding stats, and trust signals in a single view.',
    slug: 'recruiter-friendly-profile',
  },
  {
    title: 'Why developer identity matters in the AI era',
    description: 'How a polished digital identity becomes the bridge between talent, hiring, and opportunity.',
    slug: 'developer-identity-ai-era',
  },
];

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">DevLink Journal</p>
        <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">A modern blog for developers shaping the future of work.</h1>
        <p className="mt-5 text-lg leading-8 text-slate-300">Thoughtful stories on product design, portfolio strategy, AI, and the next generation of hiring.</p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="rounded-[28px] border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
            <p className="text-sm text-cyan-300">Read article</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">{post.title}</h2>
            <p className="mt-3 text-slate-400 leading-8">{post.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
