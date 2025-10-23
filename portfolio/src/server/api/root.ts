import { createTRPCRouter } from '@/lib/trpc'
import { projectRouter } from './routers/project'
import { blogRouter } from './routers/blog'
import { contactRouter } from './routers/contact'
import { skillRouter } from './routers/skill'
import { experienceRouter } from './routers/experience'
import { educationRouter } from './routers/education'

export const appRouter = createTRPCRouter({
  project: projectRouter,
  blog: blogRouter,
  contact: contactRouter,
  skill: skillRouter,
  experience: experienceRouter,
  education: educationRouter,
})

export type AppRouter = typeof appRouter
