import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

export default function AppsPage() {
  // Dados de exemplo - substitua com seus projetos reais
  const projects = [
    {
      id: 1,
      title: "Sistema de Gestão",
      description: "Sistema completo para gestão empresarial desenvolvido com .NET e Flutter.",
      technologies: [".NET", "Flutter", "MySQL"],
      image: "/placeholder.svg?height=200&width=400",
      link: "#",
    },
    {
      id: 2,
      title: "Aplicativo Mobile",
      description: "Aplicativo multiplataforma para clientes acessarem informações em tempo real.",
      technologies: ["Flutter", "Ionic", "REST API"],
      image: "/placeholder.svg?height=200&width=400",
      link: "#",
    },
    {
      id: 3,
      title: "Portal Web",
      description: "Portal web responsivo para acesso de clientes e administradores.",
      technologies: [".NET", "JavaScript", "MySQL"],
      image: "/placeholder.svg?height=200&width=400",
      link: "#",
    },
    {
      id: 4,
      title: "API de Integração",
      description: "API REST para integração entre sistemas e aplicativos móveis.",
      technologies: [".NET", "REST API", "JSON"],
      image: "/placeholder.svg?height=200&width=400",
      link: "#",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2 text-center">Meus Aplicativos</h1>
      <p className="text-gray-500 dark:text-gray-400 text-center mb-12">
        Projetos e aplicações que desenvolvi e estão disponíveis na web
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden flex flex-col">
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="mt-auto">
              <Link href={project.link} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full flex items-center gap-2">
                  Ver Projeto <ExternalLink className="h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-500 dark:text-gray-400 mb-4">
          Estes são apenas alguns exemplos dos projetos que desenvolvi. Entre em contato para saber mais sobre meu
          trabalho ou para discutir seu próximo projeto.
        </p>
        <Link href="/">
          <Button>Voltar para Home</Button>
        </Link>
      </div>
    </div>
  )
}
