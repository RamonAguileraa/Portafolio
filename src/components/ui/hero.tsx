'use client'

import { useState, } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Github, Linkedin, Instagram, Mail, Code, Paintbrush, Megaphone, Download, ChevronDown, } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { BackgroundBeams } from '@/components/ui/background-beams'

const projects = {
  developer: [
    { id: 1, title: 'Ibenteu', description: 'Plataforma web desarrollada usando lenguaje vanilla y php para buscar, gestionar y reservar salones de eventos, con pagos en línea y recomendaciones personalizadas.', image: '/IBENTEU.PNG', moreInfo: 'Detalles adicionales sobre el proyecto Ibenteu.' },
    { id: 2, title: '€NLIGNE', description: 'Conversor de divisas desarrollado en PHP y React, que utiliza la API de Fixer para calcular tipos de cambio al instante, facilitando transacciones internacionales de manera rápida y eficiente.', image: '/enligne.png', moreInfo: 'Detalles adicionales sobre el proyecto €NLIGNE.' },
    { id: 3, title: 'WonderWagons', description: 'WonderWagons es una plataforma web desarrollada en Next.js que permite a los usuarios descargar un juego de realidad virtual. Además, cuenta con una tienda de comercio electrónico integrada con Shopify para adquirir complementos del juego.', image: '/WonderWagons.png', moreInfo: 'Detalles adicionales sobre el proyecto WonderWagons.' },
  ],
  marketing: [
    { id: 1, title: 'Propuesta de marketing para "El Zarandeado"', description: 'Conversor de divisas desarrollado en PHP y React, que utiliza la API de Fixer para calcular tipos de cambio al instante, facilitando transacciones internacionales de manera rápida y eficiente.', image: '/zarandeado.png', moreInfo: 'Detalles adicionales sobre la propuesta de marketing para "El Zarandeado".' },
    { id: 2, title: 'Propuesta de marketing para "Celda27"', description: 'Developed and implemented a social media strategy that grew followers by 200%', image: '/celda27.jpg', moreInfo: 'Detalles adicionales sobre la propuesta de marketing para "Celda27".' },
    { id: 3, title: 'Lead Marketing', description: 'Como Marketing Lead en Araxys, diseñé propuestas para aumentar la visibilidad de "El Zarandeado" y "Celda 27", gestionando redes sociales, creando contenido visual y planificando eventos para atraer y fidelizar clientes.', image: '/Celda-20.jpg', moreInfo: 'Detalles adicionales sobre el rol de Lead Marketing.' },
  ],
  design: [
    { id: 1, title: 'El Rincón del Grano UI/UX', description: 'Creé una landing page centrada en el diseño UI/UX, utilizando Next.js y Tailwind CSS. La página destaca la identidad del café con un diseño atractivo y funcional, optimizando la experiencia del usuario.', image: '/rinconcafe.png', moreInfo: 'Detalles adicionales sobre el proyecto El Rincón del Grano UI/UX.' },
    { id: 2, title: 'Aroma Café UI/UX', description: 'Desarrollé una landing page que enfatiza un diseño UI/UX intuitivo. Implementé Next.js y Tailwind CSS para garantizar una carga rápida y una navegación fluida, presentando las ofertas del café de manera efectiva.', image: '/cafearoma.png', moreInfo: 'Detalles adicionales sobre el proyecto Aroma Café UI/UX.' },
    { id: 3, title: 'Infographic Design', description: 'Designed an infographic that effectively communicated complex data', image: '/placeholder.svg?height=200&width=300', moreInfo: 'Detalles adicionales sobre el proyecto Infographic Design.' },
  ],
}

const languages = [
  { name: 'Español', level: 100 },
  { name: 'Inglés', level: 75 },
  { name: 'Francés', level: 20 },
]

const skills = [
  { name: 'React', logo: '/React.webp' },
  { name: 'Next.js', logo: '/next.png' },
  { name: 'Figma', logo: '/figma.png' },
  { name: 'Maya', logo: '/maya.png' },
  { name: 'Photoshop', logo: '/photoshop.png' },
  { name: 'Lightroom', logo: '/lightroom.png' },
  { name: 'Ilustrator', logo: '/ilustrator.png' },
  { name: 'NodeJs', logo: '/node.png' },
  { name: 'C#', logo: '/c.png' },
  { name: 'Blender', logo: '/blender.png' },
]



export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<'developer' | 'marketing' | 'design'>('developer')
  const { scrollYProgress } = useScroll()
  const [expandedProjectId, setExpandedProjectId] = useState<number | null>(null)

  const toggleProjectDetails = (id: number) => {
    setExpandedProjectId(expandedProjectId === id ? null : id)
  }
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 relative">
     
      <header className="py-6 px-4 sm:px-6 lg:px-8 relative z-10">
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
              <Instagram className="w-6 h-6 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors" />
            </Link>
            <Link href="mailto:ramonaguileradve@gmail.com">
              <Mail className="w-6 h-6 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors" />
            </Link>
          </motion.div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 relative z-10">
        <motion.section 
          className="text-center mb-12"
          style={{ opacity, scale }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-40 h-40 mx-auto mb-4 overflow-hidden rounded-full">
              <Image 
                src="/yo.jpg" 
                alt="Ramon Aguilera" 
                layout="fill" 
                objectFit="cover"
              />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Hi, Im Ramon Aguilera</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">Developer | Marketer | Designer</p>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              Soy un estudiante de ingeniería en TICs Entornos virtuales y negocios digitales apasionado, versátil y con experiencia en desarrollo, marketing y diseño.
              Me encanta crear soluciones innovadoras, aprender y dar vida a las ideas a través del código y la creatividad.
            </p>
          </motion.div>
          <motion.div 
            className="mt-8"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="h-8 w-8 mx-auto text-gray-600 dark:text-gray-300" />
          </motion.div>
        </motion.section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">Mis idiomas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {languages.map((language, index) => (
              <motion.div
                key={language.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="text-gray-700 dark:text-gray-300 mb-2">{language.name}</p>
                <Progress value={language.level} className="w-full" />
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">Mis habilidades</h2>
          <div className="relative overflow-hidden">
            <motion.div
              className="flex space-x-10"
              animate={{ x: ['0%', '-100%'] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{ display: 'flex', whiteSpace: 'nowrap' }}
            >
              {[...skills, ...skills].map((skill, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-16 h-16 mb-2 relative">
                    <Image
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-center">{skill.name}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="mb-12">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">Mis proyectos</h2>
      <Tabs value={activeTab} onValueChange={(value: string) => setActiveTab(value as 'developer' | 'marketing' | 'design')} className="w-full">
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
                {projects[activeTab].map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden h-full flex flex-col">
                      <CardHeader className="p-0">
                        <Image src={project.image} alt={project.title} width={500} height={200} className="w-full h-48 object-cover" />
                      </CardHeader>
                      <CardContent className="p-4 flex-grow">
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full" onClick={() => toggleProjectDetails(project.id)}>
                          {expandedProjectId === project.id ? 'Show Less' : 'Learn More'}
                        </Button>
                      </CardFooter> 
                    </Card>
                    <AnimatePresence>
                      {expandedProjectId === project.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4"
                        >
                          <Card className="overflow-hidden">
                            <CardContent>
                              <p className="text-gray-600">{project.moreInfo}</p>
                            </CardContent>
                          </Card>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </motion.div>
        </AnimatePresence>
      </Tabs>
    </section>

        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Lets Connect</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Interested in working together or have a question? Feel free to reach out!
          </p>
          <div className="flex justify-center space-x-4">
            <Button asChild>
              <Link href="mailto:ramon@example.com">
                Get in Touch
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/cv.pdf" download>
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Link>
            </Button>
          </div>
        </section>
      </main>
  <BackgroundBeams />

      <footer className="bg-gray-100 dark:bg-gray-900 py-6 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4 md:mb-0">© 2024 Ramon Aguilera. All rights reserved.</p>
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
