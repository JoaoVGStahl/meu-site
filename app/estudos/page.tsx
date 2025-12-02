import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Code, Network, Server, Share2 } from "lucide-react"

export default function EstudosPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Estudos Atuais</h1>

      <div className="max-w-4xl mx-auto">
        <Card className="mb-12 bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Network className="h-6 w-6 text-primary" />
              Arquitetura de Software
            </CardTitle>
            <CardDescription>Foco principal dos meus estudos atualmente</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-500 dark:text-gray-400">
              Estou focado em aprofundar meus conhecimentos em arquitetura de software, estudando padrões, práticas e
              princípios que permitem criar sistemas robustos, escaláveis e de fácil manutenção.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-background/50 p-4 rounded-lg border border-primary/10">
                <h3 className="text-lg font-medium flex items-center gap-2 mb-3">
                  <Server className="h-5 w-5 text-primary" />
                  Padrões Arquiteturais
                </h3>
                <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Clean Architecture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Domain-Driven Design (DDD)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Microserviços e Arquiteturas Distribuídas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Event-Driven Architecture</span>
                  </li>
                </ul>
              </div>

              <div className="bg-background/50 p-4 rounded-lg border border-primary/10">
                <h3 className="text-lg font-medium flex items-center gap-2 mb-3">
                  <Code className="h-5 w-5 text-primary" />
                  Princípios de Design
                </h3>
                <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>SOLID Principles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Design Patterns</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-background/50 p-4 rounded-lg border border-primary/10 mt-6">
              <h3 className="text-lg font-medium flex items-center gap-2 mb-3">
                <Share2 className="h-5 w-5 text-primary" />
                Tecnologias e Ferramentas
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>API Gateways e Service Mesh</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Message Brokers (RabbitMQ, Kafka)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Containers e Orquestração (Docker, Kubernetes)</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>CI/CD Pipelines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Monitoramento e Observabilidade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Testes Automatizados</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mb-6">Outros Estudos</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="bg-background/50 border-primary/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Inglês
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Estou investindo no aprendizado do inglês para alcançar fluência e poder trabalhar em ambientes
                internacionais.
              </p>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Objetivo:</span>
                    <span>Fluência</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div className="bg-primary h-full" style={{ width: "30%" }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-background/50 border-primary/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-primary"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <path d="M12 17h.01" />
                </svg>
                Inteligência Artificial
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Explorando o uso de inteligências artificiais para aumentar produtividade, automatizar tarefas e
                resolver problemas complexos.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-primary/10 rounded-md text-xs font-medium text-primary">LLMs</span>
                <span className="px-2 py-1 bg-primary/10 rounded-md text-xs font-medium text-primary">
                  Prompt Engineering
                </span>
                <span className="px-2 py-1 bg-primary/10 rounded-md text-xs font-medium text-primary">AI Tools</span>
                <span className="px-2 py-1 bg-primary/10 rounded-md text-xs font-medium text-primary">Automação</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-br from-primary/5 to-transparent border-primary/10">
          <CardHeader>
            <CardTitle>Plano de Estudos</CardTitle>
            <CardDescription>Próximos passos na minha jornada de aprendizado</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="relative pl-8 border-l-2 border-primary/20">
                <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-primary"></div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">Curto Prazo (3-6 meses)</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Melhorar habilidades de inglês técnico para leitura de documentação e comunicação básica. Aprofundar
                    conhecimentos em ferramentas de IA para aumento de produtividade.
                  </p>
                </div>
              </div>
              <div className="relative pl-8 border-l-2 border-primary/20">
                <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-primary/70"></div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">Médio Prazo (6-12 meses)</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Obter certificações em arquitetura de software. Alcançar nível intermediário de inglês para
                    participar de reuniões e discussões técnicas.
                  </p>
                </div>
              </div>
              <div className="relative pl-8">
                <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-primary/50"></div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">Longo Prazo (1-2 anos)</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Me tornar Arquiteto/Engenheiro de Software com expertise em sistemas distribuídos e resilientes.
                    Atingir fluência em inglês para trabalhar em ambientes internacionais.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
