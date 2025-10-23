import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { ArrowRight, Github, ExternalLink, Filter, Search } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Plataforma de comercio electrónico completa con carrito de compras, pagos y panel administrativo.',
    longDescription: 'Desarrollo de una plataforma de e-commerce completa utilizando Next.js, TypeScript y Prisma. Incluye sistema de autenticación, carrito de compras, procesamiento de pagos con Stripe, y panel administrativo para gestión de productos y órdenes.',
    image: '/projects/ecommerce.jpg',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'Stripe', 'Tailwind CSS'],
    type: 'FULLSTACK',
    status: 'PUBLISHED',
    featured: true,
    repositoryUrl: 'https://github.com/cutberto/ecommerce',
    demoUrl: 'https://ecommerce-demo.vercel.app',
    role: 'Desarrollador Full-Stack',
    responsibilities: ['Arquitectura del sistema', 'Desarrollo frontend y backend', 'Integración de pagos', 'Optimización de rendimiento'],
    challenges: ['Escalabilidad de la base de datos', 'Optimización de consultas', 'Gestión de estado complejo'],
    solutions: ['Implementación de caché con Redis', 'Optimización de queries con Prisma', 'Uso de Zustand para estado global'],
    createdAt: '2024-01-15',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Aplicación de gestión de tareas con colaboración en tiempo real.',
    longDescription: 'Aplicación web para gestión de tareas con funcionalidades de colaboración en tiempo real, notificaciones push, y sincronización offline. Desarrollada con React, Node.js y Socket.io.',
    image: '/projects/taskmanager.jpg',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    type: 'FULLSTACK',
    status: 'PUBLISHED',
    featured: true,
    repositoryUrl: 'https://github.com/cutberto/task-manager',
    demoUrl: 'https://taskmanager-demo.vercel.app',
    role: 'Desarrollador Full-Stack',
    responsibilities: ['Desarrollo de API REST', 'Implementación de WebSockets', 'Diseño de UI/UX', 'Testing automatizado'],
    challenges: ['Sincronización en tiempo real', 'Gestión de conflictos', 'Optimización de rendimiento'],
    solutions: ['Implementación de WebSockets', 'Sistema de resolución de conflictos', 'Lazy loading y virtualización'],
    createdAt: '2024-02-20',
  },
  {
    id: 3,
    title: 'Mobile Banking App',
    description: 'Aplicación móvil de banca digital con funcionalidades avanzadas.',
    longDescription: 'Aplicación móvil desarrollada con React Native y Expo para banca digital. Incluye autenticación biométrica, transferencias, pagos, y notificaciones push. Integración con APIs bancarias y sistemas de seguridad.',
    image: '/projects/banking.jpg',
    technologies: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'PostgreSQL'],
    type: 'MOBILE',
    status: 'PUBLISHED',
    featured: false,
    repositoryUrl: 'https://github.com/cutberto/banking-app',
    demoUrl: 'https://banking-demo.vercel.app',
    role: 'Desarrollador Mobile',
    responsibilities: ['Desarrollo de componentes nativos', 'Integración de APIs', 'Implementación de seguridad', 'Optimización de rendimiento'],
    challenges: ['Seguridad de datos financieros', 'Rendimiento en dispositivos antiguos', 'Integración con sistemas bancarios'],
    solutions: ['Cifrado end-to-end', 'Optimización de imágenes y datos', 'APIs robustas con validación'],
    createdAt: '2024-03-10',
  },
  {
    id: 4,
    title: 'Data Analytics Dashboard',
    description: 'Dashboard de análisis de datos con visualizaciones interactivas.',
    longDescription: 'Dashboard de análisis de datos desarrollado con React y D3.js para visualización de métricas empresariales. Incluye gráficos interactivos, filtros avanzados, y exportación de reportes.',
    image: '/projects/dashboard.jpg',
    technologies: ['React', 'D3.js', 'Python', 'Pandas', 'FastAPI'],
    type: 'DATA_SCIENCE',
    status: 'PUBLISHED',
    featured: false,
    repositoryUrl: 'https://github.com/cutberto/analytics-dashboard',
    demoUrl: 'https://dashboard-demo.vercel.app',
    role: 'Desarrollador de Datos',
    responsibilities: ['Análisis de datos', 'Desarrollo de visualizaciones', 'Optimización de consultas', 'Automatización de reportes'],
    challenges: ['Procesamiento de grandes volúmenes', 'Rendimiento de visualizaciones', 'Integración de múltiples fuentes'],
    solutions: ['Implementación de caché', 'Optimización de algoritmos', 'APIs unificadas'],
    createdAt: '2024-04-05',
  },
]

const projectTypes = [
  { value: 'ALL', label: 'Todos' },
  { value: 'FULLSTACK', label: 'Full-Stack' },
  { value: 'FRONTEND', label: 'Frontend' },
  { value: 'BACKEND', label: 'Backend' },
  { value: 'MOBILE', label: 'Mobile' },
  { value: 'DATA_SCIENCE', label: 'Data Science' },
]

export default function Projects() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              Mis <span className="text-primary">Proyectos</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Una colección de proyectos que demuestran mis habilidades en desarrollo 
              Full-Stack, Frontend, Mobile y Data Science.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <span className="font-medium">Filtrar por tipo:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {projectTypes.map((type) => (
                <Button
                  key={type.value}
                  variant={type.value === 'ALL' ? 'default' : 'outline'}
                  size="sm"
                >
                  {type.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl font-bold text-primary/60">P{project.id}</div>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="default">Destacado</Badge>
                    </div>
                  )}
                </div>
                
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <Badge variant="secondary" className="mt-2">
                        {project.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="mb-4">
                    {project.description}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3} más
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild className="flex-1">
                      <Link href={`/projects/${project.id}`}>
                        Ver detalles
                      </Link>
                    </Button>
                    {project.repositoryUrl && (
                      <Button size="sm" variant="outline" asChild>
                        <Link href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                    {project.demoUrl && (
                      <Button size="sm" variant="outline" asChild>
                        <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            ¿Interesado en trabajar juntos?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Si tienes un proyecto en mente o quieres colaborar, no dudes en contactarme.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">
                Contactar
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/about">
                Conocer más sobre mí
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
