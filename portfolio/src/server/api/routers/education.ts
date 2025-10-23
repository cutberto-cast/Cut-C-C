import { z } from 'zod'
import { createTRPCRouter, publicProcedure, protectedProcedure } from '@/lib/trpc'

export const educationRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.education.findMany({
      orderBy: { order: 'asc' },
    })
  }),

  create: protectedProcedure
    .input(
      z.object({
        institution: z.string().min(1).max(100),
        degree: z.string().min(1).max(100),
        field: z.string().optional(),
        startDate: z.date(),
        endDate: z.date().optional(),
        current: z.boolean().default(false),
        description: z.string().optional(),
        order: z.number().default(0),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.education.create({
        data: input,
      })
    }),

  update: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        institution: z.string().min(1).max(100).optional(),
        degree: z.string().min(1).max(100).optional(),
        field: z.string().optional(),
        startDate: z.date().optional(),
        endDate: z.date().optional(),
        current: z.boolean().optional(),
        description: z.string().optional(),
        order: z.number().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input
      return ctx.db.education.update({
        where: { id },
        data,
      })
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.education.delete({
        where: { id: input.id },
      })
    }),
})
