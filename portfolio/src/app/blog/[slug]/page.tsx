import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Calendar, Clock, User, Share2 } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

// Mock data - en producción vendría de la base de datos
const blogPosts = {
  'introduccion-nextjs-16': {
    id: 1,
    title: 'Introducción a Next.js 16: Nuevas Características',
    slug: 'introduccion-nextjs-16',
    content: `
# Introducción a Next.js 16: Nuevas Características

Next.js 16 ha llegado con una serie de mejoras significativas que hacen que el desarrollo de aplicaciones React sea aún más eficiente y potente. En este artículo, exploraremos las características más destacadas de esta nueva versión.

## Características Principales

### 1. App Router Mejorado
El App Router ha recibido importantes mejoras en rendimiento y estabilidad. Las rutas dinámicas ahora son más eficientes y el sistema de navegación ha sido optimizado.

### 2. Server Components Avanzados
Los Server Components han sido mejorados para ofrecer mejor rendimiento y una experiencia de desarrollo más fluida.

### 3. Optimizaciones de Rendimiento
Next.js 16 incluye optimizaciones automáticas que mejoran significativamente el rendimiento de las aplicaciones.

## Conclusión

Next.js 16 representa un paso importante en la evolución del framework, ofreciendo herramientas más potentes para los desarrolladores.
    `,
    excerpt: 'Explorando las nuevas características de Next.js 16 y cómo aprovecharlas en tus proyectos.',
    image: '/blog/nextjs-16.jpg',
    publishedAt: '2024-01-15',
    readingTime: 5,
    author: {
      name: 'Cutberto',
      image: '/authors/cutberto.jpg',
    },
    tags: ['Next.js', 'React', 'JavaScript'],
  },
  'typescript-avanzado-patrones': {
    id: 2,
    title: 'TypeScript Avanzado: Patrones y Mejores Prácticas',
    slug: 'typescript-avanzado-patrones',
    content: `
# TypeScript Avanzado: Patrones y Mejores Prácticas

TypeScript se ha convertido en el estándar de facto para el desarrollo de aplicaciones JavaScript a gran escala. En este artículo, exploraremos patrones avanzados y mejores prácticas.

## Patrones Avanzados

### 1. Utility Types
Los utility types de TypeScript nos permiten crear tipos más flexibles y reutilizables.

### 2. Conditional Types
Los conditional types nos permiten crear lógica condicional a nivel de tipos.

### 3. Template Literal Types
Los template literal types nos permiten crear tipos basados en strings de manera más dinámica.

## Mejores Prácticas

1. **Usa tipos estrictos**: Evita el uso de \`any\` y utiliza tipos específicos.
2. **Aprovecha la inferencia**: Deja que TypeScript infiera tipos cuando sea posible.
3. **Documenta tus tipos**: Usa JSDoc para documentar tipos complejos.

## Conclusión

TypeScript avanzado nos permite crear aplicaciones más robustas y mantenibles.
    `,
    excerpt: 'Descubre patrones avanzados de TypeScript para escribir código más robusto y mantenible.',
    image: '/blog/typescript-advanced.jpg',
    publishedAt: '2024-01-10',
    readingTime: 8,
    author: {
      name: 'Cutberto',
      image: '/authors/cutberto.jpg',
    },
    tags: ['TypeScript', 'JavaScript', 'Patrones'],
  },
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Article Header */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Button variant="ghost" asChild>
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Volver al blog
                </Link>
              </Button>
            </div>

            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
              
              <div className="flex items-center space-x-6 text-muted-foreground mb-8">
                <div className="flex items-center">
                  <User className="mr-2 h-4 w-4" />
                  {post.author.name}
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  {new Date(post.publishedAt).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4" />
                  {post.readingTime} min lectura
                </div>
                <Button variant="ghost" size="sm">
                  <Share2 className="mr-2 h-4 w-4" />
                  Compartir
                </Button>
              </div>
            </div>

            <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-12" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
