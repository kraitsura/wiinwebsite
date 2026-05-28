import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { PageHeader } from "@/components/layout/page-header"
import { BLOG_POSTS, getPost } from "@/lib/blog-data"

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return { title: "Article not found — WiiN Journal" }
  return { title: `${post.title} — WiiN Journal`, description: post.excerpt }
}

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  return (
    <div className="min-h-screen">
      <PageHeader />
      <article className="mx-auto max-w-3xl px-4 pb-20 pt-32 md:px-8">
        <Link
          href="/blog"
          className="group mb-10 mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-foreground/70 transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Journal
        </Link>

        <p className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">
          {formatDate(post.date)} • {post.readingTime} • {post.author}
        </p>
        <h1 className="mb-10 text-4xl md:text-6xl font-bold uppercase leading-[0.95] tracking-tight">
          {post.title}
        </h1>

        <div className="space-y-6 text-base md:text-lg leading-relaxed text-foreground/85">
          {post.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-16 border-t border-foreground/15 pt-8">
          <Link
            href="/contact"
            className="inline-block border-2 border-primary bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-all hover:bg-transparent hover:text-primary"
          >
            Get in touch
          </Link>
        </div>
      </article>
    </div>
  )
}
