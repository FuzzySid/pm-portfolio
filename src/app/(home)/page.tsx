import { blogs, projects } from '@/.velite'
import BentoGrid from '@/components/BentoGrid'
import BlogCard from '@/components/BlogCard'

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3)
  const recentBlogs = [...blogs]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 space-y-24">
      {/* Hero */}
      <section className="space-y-4 pt-8">
        <p className="text-sm text-muted-foreground tracking-widest uppercase">
          Product Manager
        </p>
        <h1 className="text-5xl font-bold tracking-tight leading-[1.1]">
          Siddhant Varma
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
          I build products at the intersection of data, infrastructure, and user
          experience. Currently focused on B2B SaaS and developer tooling.
        </p>
      </section>

      {/* Featured Work */}
      {featuredProjects.length > 0 && (
        <section>
          <h2 className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-6">
            Featured Work
          </h2>
          <BentoGrid projects={featuredProjects} />
        </section>
      )}

      {/* Recent Writing */}
      {recentBlogs.length > 0 && (
        <section>
          <h2 className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-6">
            Recent Writing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recentBlogs.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
