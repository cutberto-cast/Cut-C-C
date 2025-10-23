import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Download, GraduationCap, Briefcase, Award, Code, Database, Smartphone, Brain } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const experience = [
  {
    company: 'Sorom Asesores',
    position: 'Desarrollador Full-Stack',
    duration: '8 meses',
    description: 'Desarrollé paquete empresarial con app web (React) y app móvil (React Native + Expo). Colaboré en proyecto fullstack con Remix y Prisma.',
    technologies: ['React', 'React Native', 'Expo', 'Remix', 'Prisma', 'TypeScript'],
    current: true,
  },
  {
    company: 'MACAND',
    position: 'Frontend Developer',
    duration: '6 meses',
    description: 'Proyectos en Angular para impulso de infraestructura tecnológica en Veracruz.',
    technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'JavaScript'],
    current: false,
  },
  {
    company: 'Bio Retail',
    position: 'Analista de Datos',
    duration: '4 meses',
    description: 'Automatización con Python para análisis de afluencia urbana usando building footprints. Generación de reportes para decisiones de expansión de locales.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Data Analysis'],
    current: false,
  },
]

const education = [
  {
    institution: 'Instituto Tecnológico de Orizaba',
    degree: 'Ingeniería en Informática',
    duration: '2018 - 2022',
    description: 'Formación integral en desarrollo de software, bases de datos, algoritmos y arquitectura de sistemas.',
    current: false,
  },
]

const skills = [
  { name: 'TypeScript', level: 90, category: 'Lenguajes' },
  { name: 'React', level: 95, category: 'Frontend' },
  { name: 'Next.js', level: 90, category: 'Frontend' },
  { name: 'Node.js', level: 85, category: 'Backend' },
  { name: 'PostgreSQL', level: 80, category: 'Base de Datos' },
  { name: 'Prisma', level: 85, category: 'ORM' },
  { name: 'React Native', level: 80, category: 'Mobile' },
  { name: 'Python', level: 75, category: 'Data Science' },
  { name: 'Angular', level: 70, category: 'Frontend' },
  { name: 'Git', level: 90, category: 'Herramientas' },
  { name: 'Docker', level: 70, category: 'DevOps' },
  { name: 'AWS', level: 65, category: 'Cloud' },
]

const methodologies = [
  { name: 'Scrum', description: 'Metodología ágil para desarrollo de software' },
  { name: 'Git', description: 'Control de versiones distribuido' },
  { name: 'GitHub', description: 'Plataforma de desarrollo colaborativo' },
  { name: 'Jira', description: 'Gestión de proyectos y seguimiento de tareas' },
]

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                  Sobre <span className="text-primary">mí</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Ingeniero en Informática con experiencia en desarrollo Full-Stack, 
                  especializado en tecnologías modernas como TypeScript, React y Next.js.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Contactar
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/cv.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Descargar CV
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square max-w-md mx-auto">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary">C</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Experiencia Profesional</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Mi trayectoria profesional en el desarrollo de software
            </p>
          </div>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{job.position}</CardTitle>
                      <p className="text-lg font-medium text-primary">{job.company}</p>
                      <p className="text-sm text-muted-foreground">{job.duration}</p>
                    </div>
                    {job.current && (
                      <Badge variant="default">Actual</Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Formación Académica</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Mi educación y certificaciones profesionales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{edu.degree}</CardTitle>
                      <p className="text-lg font-medium text-primary">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.duration}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Habilidades Técnicas</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tecnologías y herramientas que domino
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <Card key={skill.name}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{skill.name}</CardTitle>
                    <Badge variant="secondary">{skill.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Nivel</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Methodologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Metodologías y Herramientas</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Metodologías de trabajo y herramientas que utilizo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologies.map((method) => (
              <Card key={method.name} className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">{method.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
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
