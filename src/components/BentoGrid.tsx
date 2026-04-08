import type { Project } from '@/lib/content'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Star } from 'lucide-react'
import Link from 'next/link'

interface Props {
  projects: Project[]
}

export default function BentoGrid({ projects }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:auto-rows-[180px]">
      {projects.map((project, i) => (
        <Link
          key={project.slug}
          href={project.permalink}
          className={
            i === 0
              ? 'md:col-span-2 md:row-span-2'
              : ''
          }
        >
          <Card className="h-full bg-card border-border hover:border-primary/30 transition-all duration-200 overflow-hidden group">
            <CardHeader className={i === 0 ? 'pb-3' : 'pb-2'}>
              <div className="flex items-start justify-between gap-2">
                <CardTitle
                  className={`font-semibold leading-snug ${i === 0 ? 'text-lg' : 'text-sm'}`}
                >
                  {project.title}
                </CardTitle>
                {project.featured && (
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 shrink-0 mt-0.5" />
                )}
              </div>
              <p className="text-xs text-muted-foreground">{project.role}</p>
            </CardHeader>
            <CardContent>
              {i === 0 && (
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              )}
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.slice(0, i === 0 ? 6 : 3).map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-xs px-2 py-0.5"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
