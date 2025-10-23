# Portfolio - Full-Stack Developer

Un portafolio profesional, escalable y mantenible para un Full-Stack Developer desarrollado con TypeScript, React y Next.js.

## Características

- **Moderno y Responsivo**: Diseño moderno con Tailwind CSS y componentes de shadcn/ui
- **TypeScript**: Tipado estático para mayor seguridad y mantenibilidad
- **Next.js 16**: App Router con Server Components y optimizaciones de rendimiento
- **Autenticación**: NextAuth.js con soporte para OAuth y email
- **Base de Datos**: PostgreSQL con Prisma ORM
- **API Tipada**: tRPC para comunicación tipo-segura entre cliente y servidor
- **Panel Admin**: Interfaz administrativa para gestión de contenido
- **SEO Optimizado**: Meta tags dinámicos, Open Graph y JSON-LD
- **Accesibilidad**: Cumple estándares WCAG AA
- **Testing**: Vitest para unit tests y Playwright para E2E

##  Stack Tecnológico

### Frontend
- **Next.js 16** - Framework React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de estilos
- **shadcn/ui** - Componentes UI accesibles
- **Radix UI** - Primitivos accesibles
- **Framer Motion** - Animaciones
- **React Hook Form** - Manejo de formularios
- **Zod** - Validación de esquemas

### Backend
- **Next.js API Routes** - API endpoints
- **tRPC** - Comunicación tipada
- **Prisma** - ORM para base de datos
- **NextAuth.js** - Autenticación
- **PostgreSQL** - Base de datos

### Herramientas
- **ESLint** - Linting
- **Prettier** - Formateo de código
- **Husky** - Git hooks
- **Commitlint** - Conventional commits
- **Vitest** - Testing unitario
- **Playwright** - Testing E2E

##  Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/cutberto/portfolio.git
   cd portfolio
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp env.example .env.local
   ```
   
   Edita `.env.local` con tus valores:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/portfolio"
   NEXTAUTH_SECRET="your-secret-key"
   GOOGLE_CLIENT_ID="your-google-client-id"
   GOOGLE_CLIENT_SECRET="your-google-client-secret"
   # ... más variables
   ```

4. **Configurar base de datos**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```

##  Base de Datos

El proyecto utiliza PostgreSQL con Prisma ORM. Los modelos incluyen:

- **User** - Usuarios del sistema
- **Project** - Proyectos del portafolio
- **BlogPost** - Artículos del blog
- **ContactMessage** - Mensajes de contacto
- **Skill** - Habilidades técnicas
- **Experience** - Experiencia laboral
- **Education** - Formación académica

##  Panel Administrativo

El panel administrativo permite:

- **Gestión de Proyectos**: Crear, editar y eliminar proyectos
- **Gestión de Blog**: Administrar artículos del blog
- **Gestión de Skills**: Administrar habilidades técnicas
- **Gestión de Experiencia**: Administrar experiencia laboral
- **Gestión de Educación**: Administrar formación académica
- **Mensajes de Contacto**: Ver y gestionar mensajes recibidos

Accede al panel en `/admin` (requiere autenticación).

##  Testing

### Unit Tests (Vitest)
```bash
npm run test
```

### E2E Tests (Playwright)
```bash
npm run test:e2e
```

### Coverage
```bash
npm run test:coverage
```

##  Deployment

### Vercel (Recomendado)

1. **Conectar repositorio**
   - Conecta tu repositorio de GitHub con Vercel
   - Configura las variables de entorno en Vercel

2. **Configurar base de datos**
   - Usa [Supabase](https://supabase.com/) o [PlanetScale](https://planetscale.com/)
   - Añade la URL de conexión a las variables de entorno

3. **Deploy automático**
   - Cada push a `main` desplegará automáticamente

### Otras plataformas

- **Netlify**: Compatible con Next.js
- **Railway**: Para full-stack deployment
- **Render**: Alternativa a Vercel

##  Estructura del Proyecto

```
portfolio/
├── src/
│   ├── app/                    # App Router de Next.js
│   │   ├── api/               # API routes
│   │   ├── admin/             # Panel administrativo
│   │   ├── projects/          # Páginas de proyectos
│   │   ├── blog/              # Blog
│   │   └── ...                # Otras páginas
│   ├── components/             # Componentes React
│   │   ├── ui/                # Componentes base (shadcn/ui)
│   │   ├── layout/            # Componentes de layout
│   │   └── forms/             # Formularios
│   ├── lib/                   # Utilidades y configuración
│   │   ├── auth/              # Configuración NextAuth
│   │   ├── db/                # Configuración Prisma
│   │   └── trpc/              # Configuración tRPC
│   ├── server/                # Servidor tRPC
│   │   └── api/               # Routers de tRPC
│   ├── hooks/                 # Custom hooks
│   ├── types/                 # Tipos TypeScript
│   └── utils/                  # Utilidades
├── prisma/                    # Esquema de base de datos
├── public/                    # Archivos estáticos
└── tests/                     # Tests
```

##  Personalización

### Colores y Tema

Los colores se configuran en `tailwind.config.ts` y `src/app/globals.css`:

```css
:root {
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  /* ... más variables */
}
```

##  Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

##  Contacto

- **Email**: cutberto@example.com
- **LinkedIn**: [Cutberto](https://linkedin.com/in/cutberto)
