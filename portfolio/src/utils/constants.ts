export const SITE_CONFIG = {
  name: 'Portfolio - Cutberto',
  description: 'Portfolio profesional de un desarrollador Full-Stack especializado en TypeScript, React y Next.js.',
  url: 'https://portfolio.cutberto.dev',
  ogImage: 'https://portfolio.cutberto.dev/og.jpg',
  links: {
    twitter: 'https://twitter.com/cutberto',
    github: 'https://github.com/cutberto',
    linkedin: 'https://linkedin.com/in/cutberto',
  },
} as const

export const NAVIGATION = [
  { name: 'Inicio', href: '/' },
  { name: 'Sobre mí', href: '/about' },
  { name: 'Proyectos', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contacto', href: '/contact' },
] as const

export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    href: 'https://github.com/cutberto',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/cutberto',
    icon: 'linkedin',
  },
  {
    name: 'Email',
    href: 'mailto:cutberto@example.com',
    icon: 'mail',
  },
] as const

export const PROJECT_TYPES = [
  { value: 'ALL', label: 'Todos' },
  { value: 'FULLSTACK', label: 'Full-Stack' },
  { value: 'FRONTEND', label: 'Frontend' },
  { value: 'BACKEND', label: 'Backend' },
  { value: 'MOBILE', label: 'Mobile' },
  { value: 'DATA_SCIENCE', label: 'Data Science' },
] as const

export const SKILL_CATEGORIES = [
  { value: 'FRONTEND', label: 'Frontend' },
  { value: 'BACKEND', label: 'Backend' },
  { value: 'DATABASE', label: 'Base de Datos' },
  { value: 'DEVOPS', label: 'DevOps' },
  { value: 'TOOLS', label: 'Herramientas' },
  { value: 'LANGUAGES', label: 'Lenguajes' },
  { value: 'FRAMEWORKS', label: 'Frameworks' },
  { value: 'OTHER', label: 'Otros' },
] as const
