import Link from 'next/link';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
      <Link href="/blog" className="text-sm text-cyan-300">← Back to blog</Link>
      <article className="mt-8 rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Featured article</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">{params.slug.replace(/-/g, ' ')}</h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          This article preview shows how DevLink can power a polished content experience alongside the product experience. A headless CMS can be layered in later for full editorial workflows.
        </p>
      </article>
    </main>
  );
}
