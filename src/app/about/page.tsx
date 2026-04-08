export const metadata = { title: 'About' }

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-12">
        <p className="text-sm text-muted-foreground tracking-widest uppercase mb-3">
          About
        </p>
        <h1 className="text-4xl font-bold tracking-tight">Siddhant Varma</h1>
      </header>

      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <p>
          I&apos;m a Product Manager focused on B2B SaaS, data infrastructure,
          and developer tooling. I work best at the intersection of technical
          depth and user empathy — the place where complex systems meet real
          human problems.
        </p>

        <p>
          My approach to product starts with discovery: understanding what
          people are actually trying to accomplish before proposing solutions.
          I&apos;m drawn to the messy, ambiguous problems — the ones where the
          right answer isn&apos;t obvious until you&apos;ve sat with enough
          users to see the pattern.
        </p>

        <p>
          Outside of work, I write about product management, data systems, and
          the craft of building things that last.
        </p>

        <div className="pt-4 flex gap-6 text-sm">
          <a
            href="https://www.linkedin.com/in/siddhantvarma99/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-muted-foreground transition-colors"
          >
            LinkedIn →
          </a>
          <a
            href="http://github.com/fuzzySid"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-muted-foreground transition-colors"
          >
            GitHub →
          </a>
          <a
            href="mailto:sid.cd.varma@gmail.com"
            className="text-foreground hover:text-muted-foreground transition-colors"
          >
            Email →
          </a>
        </div>
      </div>
    </div>
  )
}
