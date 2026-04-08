import type { Project } from '@/lib/content'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Star } from 'lucide-react'
import Link from 'next/link'

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <Link href={project.permalink}>
      <Card className="bg-card border-border hover:border-primary/30 transition-all duration-200">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-1">
              <CardTitle className="text-base font-semibold leading-snug">
                {project.title}
              </CardTitle>
              <p className="text-xs text-muted-foreground">{project.role}</p>
            </div>
            {project.featured && (
              <span className="flex items-center gap-1 text-xs text-amber-400 shrink-0 mt-0.5">
                <Star className="w-3 h-3 fill-amber-400" />
                Featured
              </span>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          <blockquote className="border-l-2 border-border pl-3 text-xs text-foreground/70 leading-relaxed italic">
            {project.impact}
          </blockquote>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs px-2 py-0.5">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
