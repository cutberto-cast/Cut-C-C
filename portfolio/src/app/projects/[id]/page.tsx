import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Github, ExternalLink, Calendar, User, Code, Database, Smartphone, Brain } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface ProjectPageProps {
  params: {
    id: string
  }
}

// Mock data - en producción vendría de la base de datos
const projects = {
  '1': {
    id: 1,
    title: 'E-commerce Platform',
    slug: 'ecommerce-platform',
    description: 'Plataforma de comercio electrónico completa con carrito de compras, pagos y panel administrativo.',
    longDescription: 'Desarrollo de una plataforma de e-commerce completa utilizando Next.js, TypeScript y Prisma. Incluye sistema de autenticación, carrito de compras, procesamiento de pagos con Stripe, y panel administrativo para gestión de productos y órdenes.',
    image: '/projects/ecommerce.jpg',
    images: ['/projects/ecommerce-1.jpg', '/projects/ecommerce-2.jpg', '/projects/ecommerce-3.jpg'],
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'Stripe', 'Tailwind CSS', 'PostgreSQL'],
    type: 'FULLSTACK',
    status: 'PUBLISHED',
    featured: true,
    repositoryUrl: 'https://github.com/cutberto/ecommerce',
    demoUrl: 'https://ecommerce-demo.vercel.app',
    videoUrl: 'https://youtube.com/watch?v=example',
    role: 'Desarrollador Full-Stack',
    responsibilities: [
      'Arquitectura del sistema',
      'Desarrollo frontend y backend',
      'Integración de pagos',
      'Optimización de rendimiento'
    ],
    challenges: [
      'Escalabilidad de la base de datos',
      'Optimización de consultas',
      'Gestión de estado complejo'
    ],
    solutions: [
      'Implementación de caché con Redis',
      'Optimización de queries con Prisma',
      'Uso de Zustand para estado global'
    ],
    metrics: {
      performance: '95%',
      accessibility: '98%',
      bestPractices: '92%',
      seo: '89%'
    },
    createdAt: '2024-01-15',
    updatedAt: '2024-01-20',
  },
  '2': {
    id: 2,
    title: 'Task Management App',
    slug: 'task-management-app',
    description: 'Aplicación de gestión de tareas con colaboración en tiempo real.',
    longDescription: 'Aplicación web para gestión de tareas con funcionalidades de colaboración en tiempo real, notificaciones push, y sincronización offline. Desarrollada con React, Node.js y Socket.io.',
    image: '/projects/taskmanager.jpg',
    images: ['/projects/taskmanager-1.jpg', '/projects/taskmanager-2.jpg'],
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    type: 'FULLSTACK',
    status: 'PUBLISHED',
    featured: true,
    repositoryUrl: 'https://github.com/cutberto/task-manager',
    demoUrl: 'https://taskmanager-demo.vercel.app',
    role: 'Desarrollador Full-Stack',
    responsibilities: [
      'Desarrollo de API REST',
      'Implementación de WebSockets',
      'Diseño de UI/UX',
      'Testing automatizado'
    ],
    challenges: [
      'Sincronización en tiempo real',
      'Gestión de conflictos',
      'Optimización de rendimiento'
    ],
    solutions: [
      'Implementación de WebSockets',
      'Sistema de resolución de conflictos',
      'Lazy loading y virtualización'
    ],
    metrics: {
      performance: '88%',
      accessibility: '95%',
      bestPractices: '90%',
      seo: '85%'
    },
    createdAt: '2024-02-20',
    updatedAt: '2024-02-25',
  },
}

const typeIcons = {
  FULLSTACK: Code,
  FRONTEND: Code,
  BACKEND: Database,
  MOBILE: Smartphone,
  DATA_SCIENCE: Brain,
  OTHER: Code,
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects[params.id as keyof typeof projects]

  if (!project) {
    notFound()
  }

  const TypeIcon = typeIcons[project.type as keyof typeof typeIcons]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Project Header */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <Button variant="ghost" asChild>
                <Link href="/projects">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Volver a proyectos
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <TypeIcon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="secondary">{project.type}</Badge>
                  {project.featured && <Badge variant="default">Destacado</Badge>}
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">{project.title}</h1>
                
                <p className="text-xl text-muted-foreground mb-8">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">{tech}</Badge>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  {project.repositoryUrl && (
                    <Button asChild>
                      <Link href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Ver código
                      </Link>
                    </Button>
                  )}
                  {project.demoUrl && (
                    <Button variant="outline" asChild>
                      <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Ver demo
                      </Link>
                    </Button>
                  )}
                </div>
              </div>

              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Descripción del Proyecto</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-6">Rol y Responsabilidades</h2>
                  <div className="space-y-4">
                    {project.responsibilities.map((responsibility, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-muted-foreground">{responsibility}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-6">Retos Técnicos</h2>
                  <div className="space-y-6">
                    {project.challenges.map((challenge, index) => (
                      <Card key={index}>
                        <CardHeader>
                          <CardTitle className="text-lg">Reto {index + 1}</CardTitle>
                          <CardDescription>{challenge}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            <strong>Solución:</strong> {project.solutions[index]}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Información del Proyecto</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Rol</p>
                      <p className="text-sm">{project.role}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Tipo</p>
                      <p className="text-sm">{project.type}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Fecha de creación</p>
                      <p className="text-sm">
                        {new Date(project.createdAt).toLocaleDateString('es-ES', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Métricas de Rendimiento</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                          <span>{value}</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full transition-all duration-300"
                            style={{ width: value }}
                          />
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
