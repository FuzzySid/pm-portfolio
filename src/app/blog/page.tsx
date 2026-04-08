import { blogs } from '@/lib/content'
import BlogCard from '@/components/BlogCard'

export const metadata = { title: 'Writing' }

export default function BlogPage() {
  const sorted = [...blogs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <header className="mb-12">
        <p className="text-sm text-muted-foreground tracking-widest uppercase mb-3">
          Writing
        </p>
        <h1 className="text-4xl font-bold tracking-tight">All Posts</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sorted.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
