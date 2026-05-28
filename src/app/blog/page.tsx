import type { Metadata } from "next"
import Link from "next/link"
import { PageHeader } from "@/components/layout/page-header"
import { BLOG_POSTS } from "@/lib/blog-data"

export const metadata: Metadata = {
  title: "WiiN Journal — Science, Wellness & Updates",
  description:
    "The WiiN Journal: notes on full-body wellness, the science behind the WiiN Daily Complex™, and what's next.",
}

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <PageHeader />
      <div className="mx-auto max-w-5xl px-4 pb-16 pt-32 md:px-8">
        <div className="mb-12 mt-12">
          <h1 className="text-power-gradient mb-4 text-5xl md:text-7xl font-bold uppercase tracking-wider">
            Journal
          </h1>
          <p className="max-w-2xl text-lg uppercase tracking-wide text-muted-foreground">
            Science, wellness, and updates from the WiiN team.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col border-3 border-foreground p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              <p className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">
                {formatDate(post.date)} • {post.readingTime}
              </p>
              <h2 className="mb-3 text-2xl font-bold uppercase leading-tight tracking-tight transition-colors group-hover:text-primary">
                {post.title}
              </h2>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Read article →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
