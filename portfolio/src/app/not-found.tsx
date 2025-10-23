import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Home, Search } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <Card>
          <CardHeader>
            <div className="mx-auto mb-4 p-3 bg-muted rounded-full w-fit">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>
            <CardTitle className="text-2xl">Página no encontrada</CardTitle>
            <CardDescription>
              La página que buscas no existe o ha sido movida.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-6xl font-bold text-muted-foreground">404</div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild className="flex-1">
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Ir al inicio
                </Link>
              </Button>
              <Button variant="outline" asChild className="flex-1">
                <Link href="/projects">
                  Ver proyectos
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
