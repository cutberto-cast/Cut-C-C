import { db } from './index'

export async function getProjectBySlug(slug: string) {
  return db.project.findUnique({
    where: { slug },
    include: {
      author: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  })
}

export async function getBlogPostBySlug(slug: string) {
  return db.blogPost.findUnique({
    where: { slug },
    include: {
      author: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  })
}

export async function getFeaturedProjects(limit: number = 3) {
  return db.project.findMany({
    where: {
      featured: true,
      status: 'PUBLISHED',
    },
    orderBy: { order: 'asc' },
    take: limit,
    include: {
      author: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  })
}

export async function getFeaturedBlogPosts(limit: number = 3) {
  return db.blogPost.findMany({
    where: {
      featured: true,
      status: 'PUBLISHED',
    },
    orderBy: { publishedAt: 'desc' },
    take: limit,
    include: {
      author: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  })
}

export async function getSkillsByCategory() {
  return db.skill.findMany({
    orderBy: { order: 'asc' },
  })
}

export async function getExperiences() {
  return db.experience.findMany({
    orderBy: { order: 'asc' },
  })
}

export async function getEducation() {
  return db.education.findMany({
    orderBy: { order: 'asc' },
  })
}
