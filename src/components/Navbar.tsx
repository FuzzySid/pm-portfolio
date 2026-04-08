import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

const links = [
  // { label: 'Work', href: '/projects' },
  // { label: 'Writing', href: '/blog' },
  { label: 'About', href: '/about' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-semibold text-sm tracking-tight text-foreground hover:text-muted-foreground transition-colors"
        >
          Siddhant Varma
        </Link>

        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          {links.map((link, i) => (
            <span key={link.href} className="flex items-center gap-1">
              <Link
                href={link.href}
                className="px-3 py-1 rounded-md hover:text-foreground hover:bg-muted transition-colors"
              >
                {link.label}
              </Link>
              {i < links.length - 1 && (
                <Separator orientation="vertical" className="h-4 mx-1" />
              )}
            </span>
          ))}
        </div>
      </nav>
    </header>
  )
}
