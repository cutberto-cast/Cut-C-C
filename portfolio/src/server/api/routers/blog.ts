import { z } from 'zod'
import { createTRPCRouter, publicProcedure, protectedProcedure } from '@/lib/trpc'
import { PostStatus } from '@prisma/client'

export const blogRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).default(10),
        cursor: z.string().nullish(),
        status: z.nativeEnum(PostStatus).default('PUBLISHED'),
      })
    )
    .query(async ({ ctx, input }) => {
      const { limit, cursor, status } = input
      const items = await ctx.db.blogPost.findMany({
        take: limit + 1,
        where: { status },
        orderBy: { publishedAt: 'desc' },
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
      return ctx.db.blogPost.findUnique({
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
    return ctx.db.blogPost.findMany({
      where: {
        featured: true,
        status: 'PUBLISHED',
      },
      orderBy: { publishedAt: 'desc' },
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
        excerpt: z.string().optional(),
        content: z.string().min(1),
        image: z.string().optional(),
        metaTitle: z.string().optional(),
        metaDescription: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.blogPost.create({
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
        excerpt: z.string().optional(),
        content: z.string().min(1).optional(),
        image: z.string().optional(),
        status: z.nativeEnum(PostStatus).optional(),
        featured: z.boolean().optional(),
        order: z.number().optional(),
        metaTitle: z.string().optional(),
        metaDescription: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input
      return ctx.db.blogPost.update({
        where: { id },
        data,
      })
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.blogPost.delete({
        where: { id: input.id },
      })
    }),
})
