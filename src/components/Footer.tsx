import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-sm text-muted-foreground">
          <div className="space-y-1">
            <p className="font-medium text-foreground">Siddhant Varma</p>
            <p>Product Manager · Builder · Strategist</p>
          </div>

          <div className="flex gap-6">
            <Link
              href="/projects"
              className="hover:text-foreground transition-colors"
            >
              Work
            </Link>
            <Link
              href="/blog"
              className="hover:text-foreground transition-colors"
            >
              Writing
            </Link>
            <Link
              href="/about"
              className="hover:text-foreground transition-colors"
            >
              About
            </Link>
          </div>

          <div className="flex gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        <p className="mt-8 text-xs text-muted-foreground border-t border-border pt-6">
          © {new Date().getFullYear()} Siddhant Varma. Built with Next.js and
          Velite.
        </p>
      </div>
    </footer>
  )
}
