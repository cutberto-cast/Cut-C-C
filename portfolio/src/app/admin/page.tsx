'use client'

import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Plus, Edit, Trash2, Eye, Settings, Users, FileText, MessageSquare, BarChart3 } from 'lucide-react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const adminStats = [
  {
    title: 'Proyectos',
    value: '12',
    description: 'Proyectos publicados',
    icon: FileText,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    title: 'Artículos',
    value: '8',
    description: 'Posts del blog',
    icon: FileText,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    title: 'Mensajes',
    value: '24',
    description: 'Mensajes de contacto',
    icon: MessageSquare,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    title: 'Visitas',
    value: '1,234',
    description: 'Este mes',
    icon: BarChart3,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
  },
]

const quickActions = [
  {
    title: 'Nuevo Proyecto',
    description: 'Crear un nuevo proyecto',
    icon: Plus,
    href: '/admin/projects/new',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    title: 'Nuevo Artículo',
    description: 'Escribir un artículo',
    icon: Plus,
    href: '/admin/blog/new',
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    title: 'Gestionar Skills',
    description: 'Administrar habilidades',
    icon: Settings,
    href: '/admin/skills',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    title: 'Ver Mensajes',
    description: 'Revisar contactos',
    icon: MessageSquare,
    href: '/admin/messages',
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
  },
]

export default function AdminDashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'loading') return
    if (!session) {
      router.push('/auth/signin')
    }
  }, [session, status, router])

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Panel Administrativo</h1>
              <p className="text-muted-foreground">Gestiona tu portafolio y contenido</p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline">
                <Users className="mr-2 h-4 w-4" />
                {session.user?.name || 'Admin'}
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {adminStats.map((stat) => (
              <Card key={stat.title}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {stat.title}
                  </CardTitle>
                  <div className={`p-2 rounded-full ${stat.bgColor}`}>
                    <stat.icon className={`h-4 w-4 ${stat.color}`} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Acciones Rápidas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action) => (
              <Card key={action.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-full ${action.bgColor}`}>
                      <action.icon className={`h-5 w-5 ${action.color}`} />
                    </div>
                    <CardTitle className="text-lg">{action.title}</CardTitle>
                  </div>
                  <CardDescription>{action.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href={action.href}>
                      {action.title}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Actividad Reciente</h2>
          <div className="space-y-4">
            {[
              {
                action: 'Nuevo proyecto creado',
                item: 'E-commerce Platform',
                time: 'Hace 2 horas',
                type: 'project',
              },
              {
                action: 'Artículo publicado',
                item: 'Introducción a Next.js 16',
                time: 'Hace 1 día',
                type: 'blog',
              },
              {
                action: 'Mensaje recibido',
                item: 'De: juan@example.com',
                time: 'Hace 2 días',
                type: 'message',
              },
              {
                action: 'Proyecto actualizado',
                item: 'Task Management App',
                time: 'Hace 3 días',
                type: 'project',
              },
            ].map((activity, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-muted rounded-full">
                        <FileText className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-medium">{activity.action}</p>
                        <p className="text-sm text-muted-foreground">{activity.item}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-muted-foreground">{activity.time}</span>
                      <Button size="sm" variant="ghost">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
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
