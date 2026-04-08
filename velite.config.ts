import { defineConfig, s } from 'velite'

export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:8].[ext]',
    clean: true,
  },
  collections: {
    blogs: {
      name: 'Blog',
      pattern: 'blogs/**/*.mdx',
      schema: s
        .object({
          title: s.string().max(99),
          date: s.isodate(),
          excerpt: s.string().max(999),
          cover: s.string().optional(),
          tags: s.array(s.string()),
          slug: s.path(),
          body: s.mdx(),
        })
        .transform((data) => ({ ...data, permalink: `/blog/${data.slug}` })),
    },
    projects: {
      name: 'Project',
      pattern: 'projects/**/*.mdx',
      schema: s
        .object({
          title: s.string().max(99),
          description: s.string().max(999),
          role: s.string(),
          impact: s.string(),
          techStack: s.array(s.string()),
          featured: s.boolean().default(false),
          slug: s.path(),
          body: s.mdx(),
        })
        .transform((data) => ({ ...data, permalink: `/projects/${data.slug}` })),
    },
  },
})
