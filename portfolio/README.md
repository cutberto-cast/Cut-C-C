# Portfolio - Full-Stack Developer

Un portafolio profesional, escalable y mantenible para un Full-Stack Developer desarrollado con TypeScript, React y Next.js.

## 🚀 Características

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

## 🛠️ Stack Tecnológico

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

## 📦 Instalación

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

## 🗄️ Base de Datos

El proyecto utiliza PostgreSQL con Prisma ORM. Los modelos incluyen:

- **User** - Usuarios del sistema
- **Project** - Proyectos del portafolio
- **BlogPost** - Artículos del blog
- **ContactMessage** - Mensajes de contacto
- **Skill** - Habilidades técnicas
- **Experience** - Experiencia laboral
- **Education** - Formación académica

### Migraciones

```bash
# Crear migración
npx prisma migrate dev --name init

# Aplicar migraciones
npx prisma migrate deploy

# Resetear base de datos
npx prisma migrate reset
```

## 🔐 Autenticación

El sistema de autenticación utiliza NextAuth.js con soporte para:

- **Email/Password** - Autenticación tradicional
- **Google OAuth** - Login con Google
- **GitHub OAuth** - Login con GitHub

### Configuración OAuth

1. **Google OAuth**
   - Ve a [Google Cloud Console](https://console.cloud.google.com/)
   - Crea un proyecto y habilita Google+ API
   - Crea credenciales OAuth 2.0
   - Añade `GOOGLE_CLIENT_ID` y `GOOGLE_CLIENT_SECRET` al `.env.local`

2. **GitHub OAuth**
   - Ve a [GitHub Developer Settings](https://github.com/settings/developers)
   - Crea una nueva OAuth App
   - Añade `GITHUB_ID` y `GITHUB_SECRET` al `.env.local`

## 📝 Panel Administrativo

El panel administrativo permite:

- **Gestión de Proyectos**: Crear, editar y eliminar proyectos
- **Gestión de Blog**: Administrar artículos del blog
- **Gestión de Skills**: Administrar habilidades técnicas
- **Gestión de Experiencia**: Administrar experiencia laboral
- **Gestión de Educación**: Administrar formación académica
- **Mensajes de Contacto**: Ver y gestionar mensajes recibidos

Accede al panel en `/admin` (requiere autenticación).

## 🧪 Testing

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

## 🚀 Deployment

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

## 📁 Estructura del Proyecto

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

## 🎨 Personalización

### Colores y Tema

Los colores se configuran en `tailwind.config.ts` y `src/app/globals.css`:

```css
:root {
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  /* ... más variables */
}
```

### Contenido

1. **Información Personal**
   - Edita `src/app/page.tsx` para cambiar la información personal
   - Actualiza `src/app/about/page.tsx` para tu biografía

2. **Proyectos**
   - Añade proyectos desde el panel admin o directamente en la base de datos
   - Cada proyecto puede tener imágenes, tecnologías, y enlaces

3. **Blog**
   - Crea artículos desde el panel admin
   - Soporte para MDX con sintaxis resaltada

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run start        # Servidor de producción

# Base de datos
npm run db:generate  # Generar cliente Prisma
npm run db:push      # Sincronizar esquema
npm run db:migrate   # Ejecutar migraciones
npm run db:studio    # Abrir Prisma Studio

# Testing
npm run test         # Unit tests
npm run test:e2e     # E2E tests
npm run test:ui      # Tests con UI

# Linting
npm run lint         # ESLint
npm run lint:fix     # Fix automático
npm run format       # Prettier

# Otros
npm run type-check   # Verificar tipos
npm run clean        # Limpiar build
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Contacto

- **Email**: cutberto@example.com
- **GitHub**: [@cutberto](https://github.com/cutberto)
- **LinkedIn**: [Cutberto](https://linkedin.com/in/cutberto)

## 🙏 Agradecimientos

- [Next.js](https://nextjs.org/) - Framework React
- [Tailwind CSS](https://tailwindcss.com/) - Framework de estilos
- [shadcn/ui](https://ui.shadcn.com/) - Componentes UI
- [Prisma](https://prisma.io/) - ORM
- [tRPC](https://trpc.io/) - Comunicación tipada
- [NextAuth.js](https://next-auth.js.org/) - Autenticación