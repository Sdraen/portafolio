"use client"

import { Github, Linkedin, Mail, MapPin, ExternalLink, Code2, Palette, Zap } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Separator } from "../components/ui/separator"
import {
  LazyMotion,
  domAnimation,
  m,
  MotionConfig,
  useScroll,
  useTransform,
  useReducedMotion,
  type Variants,
} from "framer-motion"
import { useMemo } from "react"

// ===== Defaults mínimos =====
const EASE_OUT = [0.16, 1, 0.3, 1] as const
const SPRING = { type: "spring", stiffness: 220, damping: 26, mass: 0.9 } as const

// ===== Variants muy ligeros =====
const fadeInUp: Variants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }
const fadeIn: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1 } }

export default function Portfolio() {
  const prefersReduced = useReducedMotion()

  // Parallax del hero sin setState (se desactiva si el usuario prefiere menos motion)
  const { scrollY } = useScroll()
  const yHero = useTransform(scrollY, [0, 400], [0, -36])
  const yHeroStyle = useMemo(
    () => (prefersReduced ? {} : ({ y: yHero, willChange: "transform" as const })),
    [yHero, prefersReduced]
  )

  return (
    <MotionConfig reducedMotion="user" transition={SPRING}>
      <LazyMotion features={domAnimation}>
        <div className="min-h-screen bg-background overflow-hidden">
          {/* Background muy liviano */}
          <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Desktop: blobs con scale lento */}
            <m.div
              className="hidden md:block absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-full blur-sm transform-gpu"
              animate={prefersReduced ? undefined : { scale: [1, 1.08, 1] }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              style={{ willChange: prefersReduced ? undefined : "transform" }}
            />
            <m.div
              className="hidden md:block absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-accent/5 via-transparent to-transparent rounded-full blur-sm transform-gpu"
              animate={prefersReduced ? undefined : { scale: [1, 1.1, 1] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              style={{ willChange: prefersReduced ? undefined : "transform" }}
            />
            {/* Mobile: sin animación (estáticos) */}
            <div className="md:hidden absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-full blur-[6px]" />
            <div className="md:hidden absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-accent/5 via-transparent to-transparent rounded-full blur-[6px]" />
          </div>

          {/* Nav sin backdrop-blur y sin motion por link */}
          <m.nav
            className="fixed top-0 w-full z-50 border-b border-border bg-background/90"
            initial={{ y: -72, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ...SPRING, bounce: 0 }}
            style={{ willChange: "transform, opacity" }}
          >
            <div className="max-w-6xl mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                <a
                  href="#"
                  className="text-xl font-bold text-foreground hover:text-primary transition-colors"
                >
                  ATC
                </a>
                <div className="flex gap-6">
                  {["Sobre mí", "Proyectos", "Habilidades", "Contacto"].map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase().replace(" ", "")}`}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group
                                 transition-transform hover:-translate-y-0.5"
                    >
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </m.nav>

          {/* Hero */}
          <section className="pt-32 pb-20 px-6 [content-visibility:auto] [contain-intrinsic-size:1px_700px]">
            <div className="max-w-6xl mx-auto">
              <m.div className="space-y-6 transform-gpu" style={yHeroStyle}>
                <m.div
                  className="inline-block"
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  transition={{ type: "tween", duration: 0.35, ease: EASE_OUT }}
                >
                  <Badge variant="secondary" className="mb-4">
                    Disponible para proyectos
                  </Badge>
                </m.div>

                <m.h1
                  className="text-5xl md:text-7xl font-bold text-balance leading-tight"
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  transition={{ ...SPRING, delay: 0.05 }}
                  style={{ willChange: "transform, opacity" }}
                >
                  {/* Línea 1: Andrés (destacado) + Felipe (secundario) */}
                  <m.span
                    className="inline-block text-primary"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ ...SPRING, delay: 0.06 }}
                  >
                    Andrés
                  </m.span>{" "}
                  <span className="text-muted-foreground">Felipe</span>

                  <br />

                  {/* Línea 2: Torres (destacado) + Castro (secundario) */}
                  <m.span
                    className="inline-block text-primary"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ ...SPRING, delay: 0.12 }}
                  >
                    Torres
                  </m.span>{" "}
                  <span className="text-muted-foreground">Castro</span>
                </m.h1>

              <m.p
                className="text-xl text-muted-foreground max-w-2xl text-pretty leading-relaxed"
                initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  transition={{ ...SPRING, delay: 0.16 }}
                  style={{ willChange: "transform, opacity" }}
                >
                  Desarrollador web apasionado por crear experiencias digitales excepcionales. Especializado en
                  desarrollo frontend y backend con tecnologías modernas.
                </m.p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="transition-transform hover:scale-[1.03] active:scale-95 transform-gpu">
                    <Button asChild size="lg">
                      <a href="#contacto">
                        <Mail className="mr-2 h-4 w-4" />
                        Contáctame
                      </a>
                    </Button>
                  </div>
                  <div className="transition-transform hover:scale-[1.03] active:scale-95 transform-gpu">
                    <Button asChild variant="outline" size="lg">
                      <a href="https://github.com/sdraen" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </m.div>
            </div>
          </section>

          <Separator className="max-w-6xl mx-auto" />

          {/* Sobre mí (content-visibility) */}
          <section
            id="sobremí"
            className="py-20 px-6 [content-visibility:auto] [contain-intrinsic-size:1px_900px]"
          >
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <m.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={fadeInUp}
                  transition={SPRING}
                >
                  <h2 className="text-3xl font-bold mb-6 text-balance">Sobre mí</h2>
                  <m.div
                    className="space-y-4 text-muted-foreground leading-relaxed"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={fadeIn}
                    transition={{ type: "tween", duration: 0.4, ease: EASE_OUT }}
                  >
                    <p>
                      Soy egresado de <strong>Ingeniería de Ejecución en Computación e Informática</strong> de la
                      Universidad del Bío-Bío (Concepción, Chile). Me apasiona el desarrollo web y la creación de
                      soluciones digitales que generen valor real.
                    </p>
                    <p>
                      Construyo aplicaciones web end-to-end con foco en rendimiento y experiencia de usuario. Mi stack
                      principal incluye <strong>React/Next.js</strong>, <strong>TypeScript</strong>,
                      <strong> Node.js/Express</strong> y bases de datos relacionales/noSQL.
                    </p>
                    <p>
                      Me interesan la arquitectura frontend, la optimización, la accesibilidad y los despliegues con{" "}
                      <strong>Docker</strong> y CI/CD.
                    </p>
                  </m.div>
                </m.div>

                <div className="space-y-6">
                  {[
                    { icon: Code2, title: "Desarrollo", color: "text-primary", desc: "Experiencia en desarrollo full-stack con enfoque en aplicaciones escalables y mantenibles." },
                    { icon: Palette, title: "Diseño UI/UX", color: "text-accent", desc: "Interfaces intuitivas y atractivas orientadas a mejorar la experiencia de usuario." },
                    { icon: Zap, title: "Optimización", color: "text-yellow-500", desc: "Rendimiento y mejores prácticas para entregar apps rápidas y eficientes." },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="transition-transform hover:-translate-y-1 transform-gpu"
                    >
                      <Card className="hover:shadow-lg transition-shadow duration-300 border-border/50 hover:border-primary/30">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <span className="transition-transform -translate-y-0.5 group-hover:-translate-y-1">
                              <item.icon className={`h-5 w-5 ${item.color}`} />
                            </span>
                            {item.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <Separator className="max-w-6xl mx-auto" />

          {/* Proyectos */}
          <section
            id="proyectos"
            className="py-20 px-6 [content-visibility:auto] [contain-intrinsic-size:1px_900px]"
          >
            <div className="max-w-6xl mx-auto">
              <m.h2
                className="text-3xl font-bold mb-12 text-balance"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeInUp}
                transition={SPRING}
              >
                Proyectos destacados
              </m.h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "PERRINES UBB", desc: "Proyecto colaborativo UBB para gestión y publicación de contenidos académicos.", url: "https://github.com/B4yr0ndg/PERRINES-UBB-", tags: ["JavaScript", "CSS", "HTML"] },
                  { title: "OpenCV App", desc: "Aplicación móvil con procesamiento de imágenes usando OpenCV.", url: "https://github.com/Sdraen/opencv-app-python", tags: ["OpenCV", "Android", "C++/Java"] },
                  { title: "Sistema Avícola IECI", desc: "Frontend React/Next y backend Node/Express. Despliegue con Docker.", url: "https://github.com/Sdraen/avicola-app", tags: ["TypeScript", "React", "Express", "Docker"] },
                ].map((project) => (
                  <a
                    key={project.title}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block transform-gpu transition-transform hover:-translate-y-1"
                  >
                    <Card className="h-full hover:border-primary transition-all duration-300 hover:shadow-xl border-border/50">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-xl transition-colors group-hover:text-primary">
                            {project.title}
                          </CardTitle>
                          <span className="transition-transform group-hover:-translate-y-1">
                            <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                          </span>
                        </div>
                        <CardDescription className="leading-relaxed">{project.desc}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="group-hover:bg-primary/10 transition-colors">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                ))}
              </div>
            </div>
          </section>

          <Separator className="max-w-6xl mx-auto" />

          {/* Habilidades */}
          <section
            id="habilidades"
            className="py-20 px-6 [content-visibility:auto] [contain-intrinsic-size:1px_800px]"
          >
            <div className="max-w-6xl mx-auto">
              <m.h2
                className="text-3xl font-bold mb-12 text-balance"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeInUp}
                transition={SPRING}
              >
                Habilidades técnicas
              </m.h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Frontend", color: "text-primary", skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"] },
                  { title: "Backend", color: "text-primary", skills: ["Node.js", "Express", "REST APIs", "PostgreSQL", "MongoDB", "Authentication"] },
                  { title: "Herramientas", color: "text-yellow-500", skills: ["Git", "GitHub", "VS Code", "Docker", "Postman", "Responsive Design", "UI/UX"] },
                ].map((category) => (
                  <div key={category.title}>
                    <h3 className={`text-lg font-semibold mb-4 ${category.color}`}>{category.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <div key={skill} className="transition-transform hover:-translate-y-0.5">
                          <Badge className="cursor-default hover:bg-primary/90 transition-colors">{skill}</Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <Separator className="max-w-6xl mx-auto" />

          {/* Contacto */}
          <section
            id="contacto"
            className="py-20 px-6 [content-visibility:auto] [contain-intrinsic-size:1px_700px]"
          >
            <div className="max-w-6xl mx-auto">
              <div className="max-w-2xl mx-auto text-center space-y-8">
                <m.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={fadeInUp}
                  transition={SPRING}
                >
                  <h2 className="text-3xl font-bold mb-4 text-balance">Trabajemos juntos</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Estoy disponible para proyectos freelance, colaboraciones o posiciones full-time. ¡No dudes en contactarme!
                  </p>
                </m.div>

                <div className="transition-transform hover:scale-[1.01] transform-gpu">
                  <Card className="hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 text-left transition-transform hover:translate-x-1">
                          <Mail className="h-5 w-5 text-primary shrink-0" />
                          <div>
                            <p className="text-sm text-muted-foreground">Email</p>
                            <a href="mailto:andrestorresdev@gmail.com" className="text-foreground hover:text-primary transition-colors">
                              andrestorresdev@gmail.com
                            </a>
                          </div>
                        </div>

                        <Separator />

                        <div className="flex items-center gap-3 text-left transition-transform hover:translate-x-1">
                          <MapPin className="h-5 w-5 text-accent shrink-0" />
                          <div>
                            <p className="text-sm text-muted-foreground">Ubicación</p>
                            <p className="text-foreground">Concepción, Chile</p>
                          </div>
                        </div>

                        <Separator />

                        <div className="flex justify-center gap-4 pt-4">
                          {[
                            { icon: Github, href: "https://github.com/sdraen", label: "GitHub" },
                            { icon: Linkedin, href: "https://www.linkedin.com/in/andrés-felipe-torres-castro-016587327/", label: "LinkedIn" },
                            { icon: Mail, href: "mailto:andres.torres1901@alumnos.ubiobio.cl", label: "Email" },
                          ].map((social) => (
                            <div key={social.label} className="transition-transform hover:-translate-y-0.5">
                              <Button asChild variant="outline" size="icon">
                                <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                                  <social.icon className="h-5 w-5" />
                                </a>
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <m.footer
            className="border-t border-border py-8 px-6 mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            transition={{ type: "tween", duration: 0.6, ease: EASE_OUT }}
          >
            <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
              <p>© 2025 Andrés Felipe Torres Castro. Todos los derechos reservados.</p>
              <p className="mt-2">Desarrollado con Next.js y Tailwind CSS</p>
            </div>
          </m.footer>
        </div>
      </LazyMotion>
    </MotionConfig>
  )
}
