import { projects } from '@/lib/content'
import ProjectCard from '@/components/ProjectCard'

export const metadata = { title: 'Projects' }

export default function ProjectsPage() {
  const sorted = [...projects].sort(
    (a, b) => Number(b.featured) - Number(a.featured)
  )

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <header className="mb-12">
        <p className="text-sm text-muted-foreground tracking-widest uppercase mb-3">
          Work
        </p>
        <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
      </header>

      <div className="grid grid-cols-1 gap-4">
        {sorted.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  )
}
