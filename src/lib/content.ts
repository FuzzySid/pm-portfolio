import _blogs from '../../.velite/blogs.json'
import _projects from '../../.velite/projects.json'
import _externalBlogs from '@/data/external-blogs.json'

import type { Blog, Project } from '@/.velite'

export interface ExternalBlog {
  title: string
  url: string
  thumbnail: string
  description: string
}

export const blogs = _blogs as Blog[]
export const projects = _projects as Project[]
export const externalBlogs = _externalBlogs as ExternalBlog[]
export type { Blog, Project }
