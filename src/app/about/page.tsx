export const metadata = { title: 'About' }

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20">
      <header className="mb-16">
        <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase mb-6">
          About
        </p>
        <h1 className="font-serif text-6xl md:text-7xl font-normal leading-[1.05] tracking-tight">
          Siddhant
          <br />
          <em>Varma</em>
        </h1>
      </header>

      <div className="space-y-6 text-base text-muted-foreground leading-relaxed">
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
      </div>

      <div className="mt-16 pt-8 border-t border-border">
        <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase mb-6">
          Elsewhere
        </p>
        <div className="flex flex-col gap-3 text-sm">
          <a
            href="https://www.linkedin.com/in/siddhantvarma99/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-muted-foreground transition-colors w-fit"
          >
            LinkedIn →
          </a>
          <a
            href="http://github.com/fuzzySid"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-muted-foreground transition-colors w-fit"
          >
            GitHub →
          </a>
          <a
            href="mailto:sid.cd.varma@gmail.com"
            className="text-foreground hover:text-muted-foreground transition-colors w-fit"
          >
            Email →
          </a>
        </div>
      </div>
    </div>
  )
}
