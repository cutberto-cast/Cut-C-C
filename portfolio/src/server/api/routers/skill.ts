import { z } from 'zod'
import { createTRPCRouter, publicProcedure, protectedProcedure } from '@/lib/trpc'
import { SkillCategory } from '@prisma/client'

export const skillRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(
      z.object({
        category: z.nativeEnum(SkillCategory).optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      return ctx.db.skill.findMany({
        where: input.category ? { category: input.category } : undefined,
        orderBy: { order: 'asc' },
      })
    }),

  create: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1).max(100),
        category: z.nativeEnum(SkillCategory),
        level: z.number().min(1).max(100),
        order: z.number().default(0),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.skill.create({
        data: input,
      })
    }),

  update: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string().min(1).max(100).optional(),
        category: z.nativeEnum(SkillCategory).optional(),
        level: z.number().min(1).max(100).optional(),
        order: z.number().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input
      return ctx.db.skill.update({
        where: { id },
        data,
      })
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.skill.delete({
        where: { id: input.id },
      })
    }),
})
