import type { Blog } from '@/.velite'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
  post: Blog
}

export default function BlogCard({ post }: Props) {
  return (
    <Link href={post.permalink}>
      <Card className="h-full bg-card border-border hover:border-primary/30 transition-all duration-200 overflow-hidden group">
        {post.cover && (
          <div className="relative h-36 w-full overflow-hidden">
            <Image
              src={post.cover}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <CardHeader className="pb-2 space-y-2">
          <div className="flex flex-wrap gap-1.5">
            {post.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs px-2 py-0.5">
                {tag}
              </Badge>
            ))}
          </div>
          <h3 className="font-semibold text-sm leading-snug text-foreground">
            {post.title}
          </h3>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
          <p className="text-xs text-muted-foreground">
            {new Date(post.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </p>
        </CardContent>
      </Card>
    </Link>
  )
}
