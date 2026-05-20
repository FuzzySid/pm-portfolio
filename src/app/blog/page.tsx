import { blogs, externalBlogs } from '@/lib/content'
import Link from 'next/link'

export const metadata = { title: 'Writing' }

const SOURCE_NAMES: Record<string, string> = {
  'blog.sentry.io': 'Sentry',
  'influxdata.com': 'InfluxData',
  'semaphoreci.com': 'Semaphore',
  'coderpad.io': 'CoderPad',
  'dnsstuff.com': 'DNSStuff',
  'traceable.ai': 'Traceable',
  'stackhawk.com': 'StackHawk',
  'wrangle.io': 'Wrangle',
  'loginradius.com': 'LoginRadius',
  'cloudbees.com': 'CloudBees',
  'fusebit.io': 'Fusebit',
  'zilliz.com': 'Zilliz',
  'proxyrack.com': 'Proxyrack',
  'waldo.com': 'Waldo',
  'waldo.io': 'Waldo',
  'draft.dev': 'Draft.dev',
}

function sourceName(url: string): string {
  try {
    const host = new URL(url).hostname.replace(/^www\./, '')
    if (SOURCE_NAMES[host]) return SOURCE_NAMES[host]
    const sub = host.replace(/^blog\./, '')
    if (SOURCE_NAMES[sub]) return SOURCE_NAMES[sub]
    const name = sub.split('.')[0]
    return name.charAt(0).toUpperCase() + name.slice(1)
  } catch {
    return 'External'
  }
}

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

export default function BlogPage() {
  const sorted = [...blogs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <div className="mx-auto max-w-2xl px-6 py-20">
      {/* Hero */}
      <header className="mb-16">
        <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase mb-6">
          Writing
        </p>
        <h1 className="font-serif text-6xl md:text-7xl font-normal leading-[1.05] tracking-tight">
          All <em>Posts.</em>
        </h1>
      </header>

      {/* Internal posts */}
      <section>
        <div className="flex items-center justify-between pb-3 border-b border-border mb-0">
          <span className="text-xs text-muted-foreground tracking-[0.2em] uppercase">
            All Posts
          </span>
        </div>
        <div>
          {sorted.map((post) => (
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

      {/* Published Elsewhere */}
      <section className="mt-16">
        <div className="flex items-center justify-between pb-3 border-b border-border mb-0">
          <span className="text-xs text-muted-foreground tracking-[0.2em] uppercase">
            Published Elsewhere
          </span>
        </div>
        <div>
          {externalBlogs.map((post) => (
            <a
              key={post.url}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="flex items-baseline gap-4 py-4 border-b border-border -mx-6 px-6 hover:bg-muted/30 transition-colors">
                <span className="flex-1 text-sm text-foreground group-hover:text-foreground/80 transition-colors">
                  {post.title}
                </span>
                <span className="text-xs text-muted-foreground tracking-[0.15em] uppercase shrink-0 hidden sm:block">
                  {sourceName(post.url)}&nbsp;&middot;&nbsp;Cross-Post&nbsp;&#8599;
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
