import { z } from 'zod'
import { createTRPCRouter, publicProcedure, protectedProcedure } from '@/lib/trpc'

export const experienceRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.experience.findMany({
      orderBy: { order: 'asc' },
    })
  }),

  create: protectedProcedure
    .input(
      z.object({
        company: z.string().min(1).max(100),
        position: z.string().min(1).max(100),
        description: z.string().min(1),
        startDate: z.date(),
        endDate: z.date().optional(),
        current: z.boolean().default(false),
        technologies: z.array(z.string()).default([]),
        order: z.number().default(0),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.experience.create({
        data: input,
      })
    }),

  update: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        company: z.string().min(1).max(100).optional(),
        position: z.string().min(1).max(100).optional(),
        description: z.string().min(1).optional(),
        startDate: z.date().optional(),
        endDate: z.date().optional(),
        current: z.boolean().optional(),
        technologies: z.array(z.string()).optional(),
        order: z.number().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input
      return ctx.db.experience.update({
        where: { id },
        data,
      })
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.experience.delete({
        where: { id: input.id },
      })
    }),
})
