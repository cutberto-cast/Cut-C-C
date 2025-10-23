import Link from 'next/link'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/cutberto', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/cutberto', icon: Linkedin },
  { name: 'Email', href: 'mailto:cutberto@example.com', icon: Mail },
]

const footerLinks = {
  navigation: [
    { name: 'Inicio', href: '/' },
    { name: 'Sobre mí', href: '/about' },
    { name: 'Proyectos', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contacto', href: '/contact' },
  ],
  legal: [
    { name: 'Política de Privacidad', href: '/privacy' },
    { name: 'Términos de Uso', href: '/terms' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">C</span>
              </div>
              <span className="font-bold text-xl">Cutberto</span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Desarrollador Full-Stack especializado en TypeScript, React y Next.js. 
              Creando soluciones digitales innovadoras y escalables.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={item.name}
                >
                  <item.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2">
              {footerLinks.navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Cutberto. Todos los derechos reservados.
          </p>
          <p className="text-muted-foreground text-sm flex items-center mt-2 sm:mt-0">
            Hecho con <Heart className="h-4 w-4 text-red-500 mx-1" /> en México
          </p>
        </div>
      </div>
    </footer>
  )
}
