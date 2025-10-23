import { z } from 'zod'
import { createTRPCRouter, publicProcedure, protectedProcedure } from '@/lib/trpc'
import { ProjectType, ProjectStatus } from '@prisma/client'

export const projectRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).default(10),
        cursor: z.string().nullish(),
        type: z.nativeEnum(ProjectType).optional(),
        status: z.nativeEnum(ProjectStatus).default('PUBLISHED'),
      })
    )
    .query(async ({ ctx, input }) => {
      const { limit, cursor, type, status } = input
      const items = await ctx.db.project.findMany({
        take: limit + 1,
        where: {
          status,
          ...(type && { type }),
        },
        orderBy: { order: 'asc' },
        cursor: cursor ? { id: cursor } : undefined,
        include: {
          author: {
            select: {
              name: true,
              image: true,
            },
          },
        },
      })

      let nextCursor: typeof cursor | undefined = undefined
      if (items.length > limit) {
        const nextItem = items.pop()
        nextCursor = nextItem!.id
      }

      return {
        items,
        nextCursor,
      }
    }),

  getBySlug: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.project.findUnique({
        where: { slug: input.slug },
        include: {
          author: {
            select: {
              name: true,
              image: true,
            },
          },
        },
      })
    }),

  getFeatured: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.project.findMany({
      where: {
        featured: true,
        status: 'PUBLISHED',
      },
      orderBy: { order: 'asc' },
      take: 3,
      include: {
        author: {
          select: {
            name: true,
            image: true,
          },
        },
      },
    })
  }),

  create: protectedProcedure
    .input(
      z.object({
        title: z.string().min(1).max(100),
        slug: z.string().min(1).max(100),
        description: z.string().min(1).max(500),
        longDescription: z.string().optional(),
        image: z.string().optional(),
        images: z.array(z.string()).default([]),
        technologies: z.array(z.string()).default([]),
        type: z.nativeEnum(ProjectType),
        repositoryUrl: z.string().url().optional(),
        demoUrl: z.string().url().optional(),
        videoUrl: z.string().url().optional(),
        role: z.string().optional(),
        responsibilities: z.array(z.string()).default([]),
        challenges: z.array(z.string()).default([]),
        solutions: z.array(z.string()).default([]),
        metaTitle: z.string().optional(),
        metaDescription: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.project.create({
        data: {
          ...input,
          authorId: ctx.session.user.id,
        },
      })
    }),

  update: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        title: z.string().min(1).max(100).optional(),
        slug: z.string().min(1).max(100).optional(),
        description: z.string().min(1).max(500).optional(),
        longDescription: z.string().optional(),
        image: z.string().optional(),
        images: z.array(z.string()).optional(),
        technologies: z.array(z.string()).optional(),
        type: z.nativeEnum(ProjectType).optional(),
        status: z.nativeEnum(ProjectStatus).optional(),
        featured: z.boolean().optional(),
        order: z.number().optional(),
        repositoryUrl: z.string().url().optional(),
        demoUrl: z.string().url().optional(),
        videoUrl: z.string().url().optional(),
        role: z.string().optional(),
        responsibilities: z.array(z.string()).optional(),
        challenges: z.array(z.string()).optional(),
        solutions: z.array(z.string()).optional(),
        metaTitle: z.string().optional(),
        metaDescription: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input
      return ctx.db.project.update({
        where: { id },
        data,
      })
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.project.delete({
        where: { id: input.id },
      })
    }),
})
