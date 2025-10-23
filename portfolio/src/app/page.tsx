import { ArrowRight, Code, Database, Smartphone, Brain, Download, Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

const skills = [
  { name: 'TypeScript', level: 90, category: 'Lenguajes' },
  { name: 'React', level: 95, category: 'Frontend' },
  { name: 'Next.js', level: 90, category: 'Frontend' },
  { name: 'Node.js', level: 85, category: 'Backend' },
  { name: 'PostgreSQL', level: 80, category: 'Base de Datos' },
  { name: 'Prisma', level: 85, category: 'ORM' },
]

const projectTypes = [
  { name: 'Full-Stack', icon: Code, count: 8 },
  { name: 'Frontend', icon: Code, count: 12 },
  { name: 'Mobile', icon: Smartphone, count: 3 },
  { name: 'Data Science', icon: Brain, count: 2 },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold">Portfolio</div>
            <div className="flex space-x-6">
              <Link href="/" className="hover:text-primary">Inicio</Link>
              <Link href="/about" className="hover:text-primary">Sobre mí</Link>
              <Link href="/projects" className="hover:text-primary">Proyectos</Link>
              <Link href="/contact" className="hover:text-primary">Contacto</Link>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                  Hola, soy{' '}
                  <span className="text-blue-600">Cutberto</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl">
                  Desarrollador Full-Stack especializado en TypeScript, React y Next.js. 
                  Creando soluciones digitales innovadoras y escalables.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/projects"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Ver Proyectos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Contactar
                </Link>
              </div>

              <div className="flex items-center space-x-6">
                <Link
                  href="https://github.com/cutberto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                >
                  <Github className="h-6 w-6" />
                </Link>
                <Link
                  href="https://linkedin.com/in/cutberto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link 
                  href="/cv.pdf" 
                  download
                  className="inline-flex items-center text-sm text-gray-600 hover:text-blue-600"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Descargar CV
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square max-w-md mx-auto">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center">
                  <div className="text-6xl font-bold text-blue-600">C</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Tecnologías</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stack tecnológico que domino y utilizo en mis proyectos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                  <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">{skill.category}</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Nivel</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Tipos de Proyectos</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experiencia diversa en diferentes áreas del desarrollo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectTypes.map((type) => (
              <div key={type.name} className="bg-white p-6 rounded-lg shadow-sm border text-center">
                <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                  <type.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{type.name}</h3>
                <p className="text-2xl font-bold text-blue-600">{type.count}</p>
                <p className="text-sm text-gray-600">proyectos</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Proyectos Destacados</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Algunos de mis trabajos más recientes e importantes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm border overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-50" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Proyecto {i}</h3>
                  <p className="text-gray-600 mb-4">
                    Descripción breve del proyecto y las tecnologías utilizadas.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">React</span>
                    <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">TypeScript</span>
                    <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">Next.js</span>
                  </div>
                  <div className="flex gap-2">
                    <Link 
                      href={`/projects/proyecto-${i}`}
                      className="px-4 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50"
                    >
                      Ver más
                    </Link>
                    <Link 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50"
                    >
                      <Github className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/projects"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Ver todos los proyectos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; 2024 Cutberto. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
