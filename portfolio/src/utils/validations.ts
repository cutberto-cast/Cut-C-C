import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(1, 'El nombre es requerido').max(100, 'El nombre es muy largo'),
  email: z.string().email('Email inválido'),
  subject: z.string().min(1, 'El asunto es requerido').max(200, 'El asunto es muy largo'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres').max(2000, 'El mensaje es muy largo'),
})

export const projectSchema = z.object({
  title: z.string().min(1, 'El título es requerido').max(100, 'El título es muy largo'),
  slug: z.string().min(1, 'El slug es requerido').max(100, 'El slug es muy largo'),
  description: z.string().min(1, 'La descripción es requerida').max(500, 'La descripción es muy larga'),
  longDescription: z.string().optional(),
  image: z.string().url('URL de imagen inválida').optional(),
  images: z.array(z.string().url('URL de imagen inválida')).default([]),
  technologies: z.array(z.string()).default([]),
  type: z.enum(['FULLSTACK', 'FRONTEND', 'BACKEND', 'MOBILE', 'DATA_SCIENCE', 'OTHER']),
  repositoryUrl: z.string().url('URL de repositorio inválida').optional(),
  demoUrl: z.string().url('URL de demo inválida').optional(),
  videoUrl: z.string().url('URL de video inválida').optional(),
  role: z.string().optional(),
  responsibilities: z.array(z.string()).default([]),
  challenges: z.array(z.string()).default([]),
  solutions: z.array(z.string()).default([]),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
})

export const blogPostSchema = z.object({
  title: z.string().min(1, 'El título es requerido').max(100, 'El título es muy largo'),
  slug: z.string().min(1, 'El slug es requerido').max(100, 'El slug es muy largo'),
  excerpt: z.string().optional(),
  content: z.string().min(1, 'El contenido es requerido'),
  image: z.string().url('URL de imagen inválida').optional(),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
})

export const skillSchema = z.object({
  name: z.string().min(1, 'El nombre es requerido').max(100, 'El nombre es muy largo'),
  category: z.enum(['FRONTEND', 'BACKEND', 'DATABASE', 'DEVOPS', 'TOOLS', 'LANGUAGES', 'FRAMEWORKS', 'OTHER']),
  level: z.number().min(1, 'El nivel debe ser al menos 1').max(100, 'El nivel debe ser máximo 100'),
  order: z.number().default(0),
})

export const experienceSchema = z.object({
  company: z.string().min(1, 'La empresa es requerida').max(100, 'El nombre de la empresa es muy largo'),
  position: z.string().min(1, 'El puesto es requerido').max(100, 'El puesto es muy largo'),
  description: z.string().min(1, 'La descripción es requerida'),
  startDate: z.date(),
  endDate: z.date().optional(),
  current: z.boolean().default(false),
  technologies: z.array(z.string()).default([]),
  order: z.number().default(0),
})

export const educationSchema = z.object({
  institution: z.string().min(1, 'La institución es requerida').max(100, 'El nombre de la institución es muy largo'),
  degree: z.string().min(1, 'El grado es requerido').max(100, 'El grado es muy largo'),
  field: z.string().optional(),
  startDate: z.date(),
  endDate: z.date().optional(),
  current: z.boolean().default(false),
  description: z.string().optional(),
  order: z.number().default(0),
})
