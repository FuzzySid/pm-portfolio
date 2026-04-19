import _blogs from '../../.velite/blogs.json'
import _projects from '../../.velite/projects.json'

import type { Blog, Project } from '@/.velite'

export const blogs = _blogs as Blog[]
export const projects = _projects as Project[]
export type { Blog, Project }
