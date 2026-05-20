import { blogs } from '@/lib/content'
import Image from 'next/image'
import Link from 'next/link'

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

export default function HomePage() {
  const recentBlogs = [...blogs]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 space-y-24">
      {/* Hero */}
      <section className="grid gap-10 pt-8 items-center md:grid-cols-[minmax(0,1fr)_260px] md:gap-14">
        <div className="space-y-6">
          <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase">
            Product Manager
          </p>
          <h1 className="font-serif text-6xl md:text-7xl font-normal leading-[1.05] tracking-tight">
            Siddhant
            <br />
            <em>Varma</em>
          </h1>
          <p className="text-base text-muted-foreground max-w-sm leading-[1.75]">
            I build products at the intersection of data, infrastructure, and user
            experience. Currently focused on B2B SaaS and developer tooling.
          </p>
        </div>
        <div className="relative mx-auto aspect-[4/5] w-full max-w-[260px] overflow-hidden rounded-2xl border border-border/50 bg-card md:mx-0 md:justify-self-end">
          <Image
            src="/me.JPG"
            alt="Portrait of Siddhant Varma"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Recent Writing */}
      {recentBlogs.length > 0 && (
        <section>
          <div className="flex items-center justify-between pb-3 border-b border-border">
            <span className="text-xs text-muted-foreground tracking-[0.2em] uppercase">
              Recent Writing
            </span>
            <Link
              href="/blog"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              All posts →
            </Link>
          </div>
          <div>
            {recentBlogs.map((post) => (
              <Link key={post.slug} href={post.permalink} className="group block">
                <div className="flex items-baseline gap-4 py-4 border-b border-border -mx-6 px-6 hover:bg-muted/30 transition-colors">
                  <span className="text-xs text-muted-foreground w-20 shrink-0 tabular-nums">
                    {formatDate(post.date)}
                  </span>
                  <span className="flex-1 text-sm text-foreground group-hover:text-foreground/80 transition-colors">
                    {post.title}
                  </span>
                  {post.tags[0] && (
                    <span className="text-xs text-muted-foreground tracking-[0.15em] uppercase shrink-0 hidden sm:block">
                      {post.tags[0]}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
