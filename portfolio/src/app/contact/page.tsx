'use client'

import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Github, Linkedin, Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(1, 'El nombre es requerido').max(100, 'El nombre es muy largo'),
  email: z.string().email('Email inválido'),
  subject: z.string().min(1, 'El asunto es requerido').max(200, 'El asunto es muy largo'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres').max(2000, 'El mensaje es muy largo'),
})

type ContactForm = z.infer<typeof contactSchema>

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'cutberto@example.com',
    href: 'mailto:cutberto@example.com',
  },
  {
    icon: Phone,
    title: 'Teléfono',
    value: '+52 123 456 7890',
    href: 'tel:+521234567890',
  },
  {
    icon: MapPin,
    title: 'Ubicación',
    value: 'Veracruz, México',
    href: '#',
  },
]

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/cutberto',
    icon: Github,
    description: 'Revisa mis proyectos y contribuciones',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/cutberto',
    icon: Linkedin,
    description: 'Conecta conmigo profesionalmente',
  },
  {
    name: 'Email',
    href: 'mailto:cutberto@example.com',
    icon: Mail,
    description: 'Envíame un mensaje directo',
  },
]

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true)
    
    try {
      // Aquí se implementaría la lógica para enviar el formulario
      // Por ejemplo, usando tRPC o una API route
      console.log('Form data:', data)
      
      // Simular envío
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setIsSubmitted(true)
      reset()
    } catch (error) {
      console.error('Error sending message:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-md mx-auto">
            <div className="mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold mb-4">¡Mensaje enviado!</h1>
              <p className="text-muted-foreground mb-8">
                Gracias por contactarme. Te responderé lo antes posible.
              </p>
              <Button onClick={() => setIsSubmitted(false)}>
                Enviar otro mensaje
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="text-primary">Contacto</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él. 
              Envíame un mensaje y trabajemos juntos.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Enviar mensaje</CardTitle>
              <CardDescription>
                Completa el formulario y me pondré en contacto contigo pronto.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nombre *
                    </label>
                    <Input
                      id="name"
                      {...register('name')}
                      placeholder="Tu nombre"
                      className={errors.name ? 'border-red-500' : ''}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      {...register('email')}
                      placeholder="tu@email.com"
                      className={errors.email ? 'border-red-500' : ''}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Asunto *
                  </label>
                  <Input
                    id="subject"
                    {...register('subject')}
                    placeholder="¿En qué puedo ayudarte?"
                    className={errors.subject ? 'border-red-500' : ''}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensaje *
                  </label>
                  <Textarea
                    id="message"
                    {...register('message')}
                    placeholder="Cuéntame sobre tu proyecto..."
                    rows={6}
                    className={errors.message ? 'border-red-500' : ''}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Enviar mensaje
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Información de contacto</CardTitle>
                <CardDescription>
                  Otras formas de contactarme
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{info.title}</p>
                      <a
                        href={info.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Redes sociales</CardTitle>
                <CardDescription>
                  Conecta conmigo en las redes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="p-2 bg-primary/10 rounded-full">
                      <social.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{social.name}</p>
                      <p className="text-sm text-muted-foreground">{social.description}</p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
