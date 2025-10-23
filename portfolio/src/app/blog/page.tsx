import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Calendar, Clock, User } from 'lucide-react'
import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: 'Introducción a Next.js 16: Nuevas Características',
    slug: 'introduccion-nextjs-16',
    excerpt: 'Explorando las nuevas características de Next.js 16 y cómo aprovecharlas en tus proyectos.',
    content: 'Contenido completo del artículo...',
    image: '/blog/nextjs-16.jpg',
    publishedAt: '2024-01-15',
    readingTime: 5,
    author: {
      name: 'Cutberto',
      image: '/authors/cutberto.jpg',
    },
    tags: ['Next.js', 'React', 'JavaScript'],
  },
  {
    id: 2,
    title: 'TypeScript Avanzado: Patrones y Mejores Prácticas',
    slug: 'typescript-avanzado-patrones',
    excerpt: 'Descubre patrones avanzados de TypeScript para escribir código más robusto y mantenible.',
    content: 'Contenido completo del artículo...',
    image: '/blog/typescript-advanced.jpg',
    publishedAt: '2024-01-10',
    readingTime: 8,
    author: {
      name: 'Cutberto',
      image: '/authors/cutberto.jpg',
    },
    tags: ['TypeScript', 'JavaScript', 'Patrones'],
  },
  {
    id: 3,
    title: 'Construyendo APIs Escalables con tRPC',
    slug: 'apis-escalables-trpc',
    excerpt: 'Aprende a construir APIs tipo-seguras y escalables usando tRPC y Prisma.',
    content: 'Contenido completo del artículo...',
    image: '/blog/trpc-api.jpg',
    publishedAt: '2024-01-05',
    readingTime: 6,
    author: {
      name: 'Cutberto',
      image: '/authors/cutberto.jpg',
    },
    tags: ['tRPC', 'API', 'Prisma'],
  },
]

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="text-primary">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Artículos sobre desarrollo web, tecnologías modernas y mejores prácticas.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Artículo Destacado</h2>
          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="aspect-video lg:aspect-square bg-gradient-to-br from-primary/20 to-primary/5" />
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <Badge variant="default">Destacado</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-1 h-4 w-4" />
                    {new Date(blogPosts[0].publishedAt).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </div>
                </div>
                <CardTitle className="text-2xl mb-4">{blogPosts[0].title}</CardTitle>
                <CardDescription className="text-base mb-6">
                  {blogPosts[0].excerpt}
                </CardDescription>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-1 h-4 w-4" />
                      {blogPosts[0].readingTime} min lectura
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <User className="mr-1 h-4 w-4" />
                      {blogPosts[0].author.name}
                    </div>
                  </div>
                  <Button asChild>
                    <Link href={`/blog/${blogPosts[0].slug}`}>
                      Leer más
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Todos los Artículos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5" />
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge variant="secondary">{post.tags[0]}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-1 h-3 w-3" />
                      {post.readingTime} min
                    </div>
                  </div>
                  <CardTitle className="text-lg">{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-1 h-4 w-4" />
                      {new Date(post.publishedAt).toLocaleDateString('es-ES', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </div>
                    <Button size="sm" variant="outline" asChild>
                      <Link href={`/blog/${post.slug}`}>Leer</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
