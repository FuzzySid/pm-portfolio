import type { ExternalBlog } from '@/lib/content'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'

interface Props {
  post: ExternalBlog
}

export default function ExternalBlogCard({ post }: Props) {
  return (
    <a href={post.url} target="_blank" rel="noopener noreferrer">
      <Card className="h-full bg-card border-border hover:border-primary/30 transition-all duration-200 overflow-hidden group">
        {post.thumbnail && (
          <div className="relative h-36 w-full overflow-hidden">
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <CardHeader className="pb-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-sm leading-snug text-foreground">
              {post.title}
            </h3>
            <ExternalLink className="shrink-0 mt-0.5 h-3.5 w-3.5 text-muted-foreground" />
          </div>
        </CardHeader>
        {post.description && (
          <CardContent>
            <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
              {post.description}
            </p>
          </CardContent>
        )}
      </Card>
    </a>
  )
}
