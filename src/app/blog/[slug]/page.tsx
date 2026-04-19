import { blogs } from '@/lib/content'
import { MDXContent } from '@/components/MdxComponents'
import { Badge } from '@/components/ui/badge'
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

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = blogs.find((b) => b.slug === slug)
  if (!post) return notFound()

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-12 space-y-4">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <h1 className="text-4xl font-bold tracking-tight leading-[1.1]">
          {post.title}
        </h1>
        <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
        <p className="text-sm text-muted-foreground">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      </header>

      <div className="prose prose-invert max-w-none">
        <MDXContent code={post.body} />
      </div>
    </article>
  )
}
