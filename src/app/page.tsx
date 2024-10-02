'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github, Linkedin, Twitter, Mail, Code, Paintbrush, Megaphone } from 'lucide-react'
import Link from 'next/link'

const projects = {
  developer: [
    { id: 1, title: 'Ibenteu', description: 'Plataforma web en Next.js para buscar, gestionar y reservar salones de eventos, con pagos en línea y recomendaciones personalizadas.', image: '/IBENTEU.PNG' },
    { id: 2, title: '€NLIGNE', description: 'Conversor de divisas desarrollado en PHP y React, que utiliza la API de Fixer para calcular tipos de cambio al instante, facilitando transacciones internacionales de manera rápida y eficiente.', image: '/enligne.png' },
    { id: 3, title: 'WonderWagons', description: 'WonderWagons es una plataforma web desarrollada en Next.js que permite a los usuarios descargar un juego de realidad virtual. Además, cuenta con una tienda de comercio electrónico integrada con Shopify para adquirir complementos del juego.', image: '/WonderWagons.png' },
  ],
  marketing: [
    { id: 1, title: 'Propuesta de marketing para "El Zarandeado"', description: 'Conversor de divisas desarrollado en PHP y React, que utiliza la API de Fixer para calcular tipos de cambio al instante, facilitando transacciones internacionales de manera rápida y eficiente.', image: '/zarandeado.png' },
    { id: 2, title: 'Propuesta de marketing para "Celda27"', description: 'Developed and implemented a social media strategy that grew followers by 200%', image: '/celda27.jpg' },
    { id: 3, title: 'Lead Marketing', description: 'Como Marketing Lead en Araxys, diseñé propuestas para aumentar la visibilidad de "El Zarandeado" y "Celda 27", gestionando redes sociales, creando contenido visual y planificando eventos para atraer y fidelizar clientes.', image: '/Celda-20.jpg' },
  ],
  design: [
    { id: 1, title: 'El Rincón del Grano UI/UX', description: 'Creé una landing page centrada en el diseño UI/UX, utilizando Next.js y Tailwind CSS. La página destaca la identidad del café con un diseño atractivo y funcional, optimizando la experiencia del usuario.', image: '/rinconcafe.png' },
    { id: 2, title: 'Aroma Café UI/UX', description: 'Desarrollé una landing page que enfatiza un diseño UI/UX intuitivo. Implementé Next.js y Tailwind CSS para garantizar una carga rápida y una navegación fluida, presentando las ofertas del café de manera efectiva.', image: '/cafearoma.png' },
    { id: 3, title: 'Infographic Design', description: 'Designed an infographic that effectively communicated complex data', image: '/placeholder.svg?height=200&width=300' },
  ],
}

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('developer')

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <header className="py-6 px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">Ramon Aguilera</Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex space-x-4"
          >
            <Link href="https://github.com/RamonAguileraa" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors" />
            </Link>
            <Link href="https://www.linkedin.com/in/ramón-aguilera-95a2732a9/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors" />
            </Link>
            <Link href="https://www.instagram.com/ramon_aguileraa/" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-6 h-6 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors" />
            </Link>
            <Link href="mailto:ramonaguileradve@gmail.com">
              <Mail className="w-6 h-6 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors" />
            </Link>
          </motion.div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <section className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Avatar className="w-32 h-32 mx-auto mb-4">
              <AvatarImage src="/yo.jpg" alt="Ramon Aguilera" />
              <AvatarFallback>RA</AvatarFallback>
            </Avatar>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Hi, I'm Ramon Aguilera</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">Developer | Marketer | Designer</p>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Soy un estudiante de ingenieria en Tic´s Entornos vitruales y negocios digitales apacionado, versátil y con experiencia en desarrollo, marketing y diseño.
            Me encanta crear soluciones innovadoras, aprender y dar vida a las ideas a través del código y la creatividad
            </p>
          </motion.div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">Mis proyectos</h2>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="developer" className="flex items-center">
                <Code className="w-5 h-5 mr-2" />
                Developer
              </TabsTrigger>
              <TabsTrigger value="marketing" className="flex items-center">
                <Megaphone className="w-5 h-5 mr-2" />
                Marketing
              </TabsTrigger>
              <TabsTrigger value="design" className="flex items-center">
                <Paintbrush className="w-5 h-5 mr-2" />
                Design
              </TabsTrigger>
            </TabsList>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <TabsContent value={activeTab} className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects[activeTab].map((project) => (
                      <Card key={project.id} className="overflow-hidden">
                        <CardHeader className="p-0">
                          <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                        </CardHeader>
                        <CardContent className="p-4">
                          <CardTitle>{project.title}</CardTitle>
                          <CardDescription>{project.description}</CardDescription>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" className="w-full">Learn More</Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </motion.div>
            </AnimatePresence>
          </Tabs>
        </section>

        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Let's Connect</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Interested in working together or have a question? Feel free to reach out!
          </p>
          <Button asChild>
            <Link href="mailto:ramon@example.com">
              Get in Touch
            </Link>
          </Button>
        </section>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-900 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p className="text-gray-600 dark:text-gray-300">© 2024 Ramon Aguilera. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link href="/privacy" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}