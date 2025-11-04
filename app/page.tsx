import { Github, Linkedin, Mail, MapPin, ExternalLink, Code2, Palette, Zap } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Separator } from "../components/ui/separator"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
              ATC
            </a>
            <div className="flex gap-6">
              <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Sobre mí
              </a>
              <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Proyectos
              </a>
              <a href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Habilidades
              </a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contacto
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="inline-block">
              <Badge variant="secondary" className="mb-4">
                Disponible para proyectos
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
              Andrés Felipe
              <br />
              <span className="text-muted-foreground">Torres Castro</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl text-pretty leading-relaxed">
              Desarrollador web apasionado por crear experiencias digitales excepcionales. Especializado en desarrollo
              frontend y backend con tecnologías modernas.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg">
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contáctame
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="https://github.com/sdraen" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-balance">Sobre mí</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Soy egresado de <strong>Ingeniería de Ejecución en Computación e Informática</strong> de la
                  Universidad del Bío-Bío (Concepción, Chile). Me apasiona el desarrollo web y la creación de
                  soluciones digitales que generen valor real.
                </p>
                <p>
                  Construyo aplicaciones web end-to-end con foco en rendimiento y experiencia de usuario.
                  Mi stack principal incluye <strong>React/Next.js</strong>, <strong>TypeScript</strong>,
                  <strong> Node.js/Express</strong> y bases de datos relacionales/noSQL, aplicando diseño
                  responsivo y buenas prácticas.
                </p>
                <p>
                  Me mantengo en aprendizaje continuo y me interesan la arquitectura frontend, la optimización,
                  la accesibilidad y los despliegues con <strong>Docker</strong> y CI/CD.
                </p>
              </div>

            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code2 className="h-5 w-5 text-primary" />
                    Desarrollo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Experiencia en desarrollo full-stack con enfoque en crear aplicaciones web escalables y mantenibles.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Palette className="h-5 w-5 text-accent" />
                    Diseño UI/UX
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Pasión por crear interfaces intuitivas y atractivas que mejoren la experiencia del usuario.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-yellow-500" />
                    Optimización
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Enfoque en rendimiento y mejores prácticas para entregar aplicaciones rápidas y eficientes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* Projects Section */}
<section id="projects" className="py-20 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold mb-12 text-balance">Proyectos destacados</h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* PERRINES UBB */}
      <a
        href="https://github.com/B4yr0ndg/PERRINES-UBB-"
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        <Card className="hover:border-primary transition-all duration-300">
          <CardHeader>
            <div className="flex items-start justify-between">
              <CardTitle className="text-xl">PERRINES UBB</CardTitle>
              <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <CardDescription className="leading-relaxed">
              Proyecto colaborativo UBB para gestión y publicación de contenidos académicos.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">JavaScript</Badge>
              <Badge variant="secondary">CSS</Badge>
              <Badge variant="secondary">HTML</Badge>
            </div>
          </CardContent>
        </Card>
      </a>

      {/* OpenCV App */}
      <a
        href="https://github.com/Sdraen/opencv-app-python"
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        <Card className="hover:border-primary transition-all duration-300">
          <CardHeader>
            <div className="flex items-start justify-between">
              <CardTitle className="text-xl">OpenCV App</CardTitle>
              <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <CardDescription className="leading-relaxed">
              Aplicación móvil con procesamiento de imágenes usando OpenCV.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">OpenCV</Badge>
              <Badge variant="secondary">Android</Badge>
              <Badge variant="secondary">C++/Java</Badge>
            </div>
          </CardContent>
        </Card>
      </a>

      {/* Sistema Avícola IECI */}
      <a
        href="https://github.com/Sdraen/avicola-app"
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        <Card className="hover:border-primary transition-all duration-300">
          <CardHeader>
            <div className="flex items-start justify-between">
              <CardTitle className="text-xl">Sistema Avícola IECI</CardTitle>
              <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <CardDescription className="leading-relaxed">
              Sistema de gestión con frontend React/Next y backend Node/Express. Despliegue con Docker.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">Express</Badge>
              <Badge variant="secondary">Docker</Badge>
            </div>
          </CardContent>
        </Card>
      </a>
    </div>
  </div>
</section>


      <Separator className="max-w-6xl mx-auto" />

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-balance">Habilidades técnicas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>HTML5</Badge>
                <Badge>CSS3</Badge>
                <Badge>JavaScript</Badge>
                <Badge>TypeScript</Badge>
                <Badge>React</Badge>
                <Badge>Next.js</Badge>
                <Badge>Tailwind CSS</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">Backend</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>Node.js</Badge>
                <Badge>Express</Badge>
                <Badge>REST APIs</Badge>
                <Badge>PostgreSQL</Badge>
                <Badge>MongoDB</Badge>
                <Badge>Authentication</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-yellow-500">Herramientas</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>Git</Badge>
                <Badge>GitHub</Badge>
                <Badge>VS Code</Badge>
                <Badge>Docker</Badge>
                <Badge>Postman</Badge>
                <Badge>Responsive Design</Badge>
                <Badge>UI/UX</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-balance">Trabajemos juntos</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Estoy disponible para proyectos freelance, colaboraciones o posiciones full-time. ¡No dudes en
                contactarme!
              </p>
            </div>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-left">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a
                        href="mailto:andres.torres1901@alumnos.ubiobio.cl"
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        andres.torres1901@alumnos.ubiobio.cl
                      </a>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex items-center gap-3 text-left">
                    <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground">Ubicación</p>
                      <p className="text-foreground">Concepción, Chile</p>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-center gap-4 pt-4">
                    <Button asChild variant="outline" size="icon">
                      <a href="https://github.com/sdraen" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="icon">
                      <a
                        href="https://www.linkedin.com/in/andrés-felipe-torres-castro-016587327/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="icon">
                      <a href="mailto:andres.torres1901@alumnos.ubiobio.cl" aria-label="Email">
                        <Mail className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6 mt-20">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2025 Andrés Felipe Torres Castro. Todos los derechos reservados.</p>
          <p className="mt-2">Desarrollado con Next.js y Tailwind CSS</p>
        </div>
      </footer>
    </div>
  )
}
