import { blogs } from '@/lib/content'
import { MDXContent } from '@/components/MdxComponents'
import { notFound } from 'next/navigation'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const post = blogs.find((b) => b.slug === slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
  }
}

function readingTime(body: string): string {
  const matches = body.match(/"([^"\\]{4,})"/g) ?? []
  const words = matches
    .join(' ')
    .replace(/[^a-zA-Z\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length
  return `${Math.max(1, Math.round(words / 200))} min read`
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = blogs.find((b) => b.slug === slug)
  if (!post) return notFound()

  const firstTag = post.tags[0]
  const label = [firstTag?.toUpperCase(), readingTime(post.body)]
    .filter(Boolean)
    .join(' · ')

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article className="mx-auto max-w-2xl px-6 py-20">
      <header className="mb-12">
        {label && (
          <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase mb-6">
            {label}
          </p>
        )}
        <h1 className="font-serif text-5xl md:text-[3.5rem] font-normal leading-[1.1] tracking-tight mb-6">
          {post.title}
        </h1>
        <p className="font-serif italic text-lg text-muted-foreground leading-relaxed mb-6">
          {post.excerpt}
        </p>
        <p className="text-xs text-muted-foreground tracking-wide">
          Siddhant Varma&nbsp;&nbsp;&middot;&nbsp;&nbsp;{formattedDate}
        </p>
      </header>

      <hr className="border-border mb-12" />

      <div className="article-body">
        <MDXContent code={post.body} />
      </div>
    </article>
  )
}
