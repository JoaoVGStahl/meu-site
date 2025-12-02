import { CardDescription } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  Code,
  Database,
  Layout,
  Server,
  Smartphone,
  CheckCircle,
} from "lucide-react"

// Flags para controle de conteúdo
const mostrarDestaque = false

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden relative">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent"></div>
            <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent"></div>

            {/* Grid pattern */}
            <div className="grid grid-cols-12 h-full">
              {Array(12)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="border-r border-primary/5"></div>
                ))}
            </div>
            <div className="grid grid-rows-12 w-full absolute top-0 bottom-0">
              {Array(12)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="border-b border-primary/5"></div>
                ))}
            </div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center text-center space-y-8">
              <div className="space-y-4 max-w-3xl">
                <div className="inline-block text-primary text-sm font-medium mb-2 bg-primary/10 px-3 py-1 rounded-full">
                  Analista Desenvolvedor Full-Stack
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  João Vitor Girardi Stahl
                </h1>
                <p className="text-gray-400 md:text-xl max-w-2xl mx-auto">
                  Especialista em desenvolvimento de aplicações multiplataformas com .NET & Flutter
                </p>
                <div className="flex flex-wrap justify-center gap-4 pt-4">
                  <Link href="/sobre-mim">
                    <Button className="bg-primary hover:bg-primary/90">Sobre Mim</Button>
                  </Link>
                  <Link href="/estudos">
                    <Button variant="outline" className="border-primary/20 hover:bg-primary/10">
                      Meus Estudos
                    </Button>
                  </Link>
                  <Link href="https://www.linkedin.com/in/joaovgstahl" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-primary/20 hover:bg-primary/10 flex items-center gap-2">
                      <LinkedinIcon className="h-4 w-4" />
                      LinkedIn
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Quem Sou Eu</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Desenvolvedor apaixonado por criar soluções tecnológicas
                </p>
              </div>
              <div className="mx-auto max-w-3xl space-y-4 text-left">
                <p className="text-gray-500 dark:text-gray-400">
                  Desde 2017 no caminho da programação, sempre buscando evolução pessoal e profissional. Atualmente,
                  atuo como desenvolvedor full-stack na PONTO.SYS SISTEMAS, auxiliando na manutenção, integração e
                  criação de novas funcionalidades do sistema que atende cerca de 300 clientes.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Formado em Análise e Desenvolvimento de Sistemas pela UNOPAR-EAD, também possuo formação técnica pela
                  ETEC IDIO ZUCCHI em Desenvolvimento de Sistemas. Minha experiência abrange desde o desenvolvimento de
                  APIs REST até aplicações front-end multiplataforma utilizando tecnologias como .NET, Flutter e Ionic.
                </p>
                <div className="flex justify-center pt-4">
                  <Link href="/sobre-mim">
                    <Button variant="outline">Ver Currículo Completo</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Preferences Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Metodologia de Trabalho</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Como eu trabalho e me organizo
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-center gap-2">
                      <svg
                        className="h-6 w-6 text-primary"
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
                        <path d="M8 6h10" />
                        <path d="M6 12h9" />
                        <path d="M11 18h7" />
                      </svg>
                      Scrum
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Experiência com metodologia ágil Scrum, trabalhando em sprints e entregas incrementais para
                      maximizar o valor do produto.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-center gap-2">
                      <svg
                        className="h-6 w-6 text-primary"
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
                        <rect width="18" height="18" x="3" y="3" rx="2" />
                        <path d="M7 7h.01" />
                        <path d="M10 7h7" />
                        <path d="M7 12h.01" />
                        <path d="M10 12h7" />
                        <path d="M7 17h.01" />
                        <path d="M10 17h7" />
                      </svg>
                      Kanban
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Utilização de quadros Kanban para visualização do fluxo de trabalho, limitação do trabalho em
                      progresso e otimização da entrega.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-center gap-2">
                      <svg
                        className="h-6 w-6 text-primary"
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
                        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                      Home Office
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Preferência por trabalho remoto, com experiência em colaboração à distância, comunicação eficiente
                      e entrega de resultados.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-center gap-2">
                      <svg
                        className="h-6 w-6 text-primary"
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
                      Produtividade
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Utilização de inteligências artificiais como ferramentas para aumento de produtividade e
                      automação de tarefas repetitivas.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Habilidades</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Especializado em desenvolvimento Full-Stack com experiência em diversas tecnologias
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 md:grid-cols-3 lg:gap-12">
                {/* Linguagens de Programação */}
                <div className="flex flex-col items-center space-y-2">
                  <div className="rounded-full bg-primary/10 p-4">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">.NET</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    Desenvolvimento de APIs e aplicações web com .NET Core
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="rounded-full bg-primary/10 p-4">
                    <svg
                      className="h-6 w-6 text-primary"
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
                      <path d="M16.5 9.4 7.55 4.24" />
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      <path d="M3.29 7 12 12l8.71-5" />
                      <path d="M12 22V12" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">TypeScript</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    Desenvolvimento com tipagem estática para maior robustez
                  </p>
                </div>

                {/* Frameworks e Tecnologias */}
                <div className="flex flex-col items-center space-y-2">
                  <div className="rounded-full bg-primary/10 p-4">
                    <Smartphone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Flutter</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    Criação de aplicativos multiplataforma com Flutter
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="rounded-full bg-primary/10 p-4">
                    <Layout className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Angular</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    Desenvolvimento de interfaces responsivas
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="rounded-full bg-primary/10 p-4">
                    <Server className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">REST APIs</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    Construção e integração de APIs RESTful
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="rounded-full bg-primary/10 p-4">
                    <Database className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">SQL</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    Modelagem e gerenciamento de bancos de dados relacionais
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="rounded-full bg-primary/10 p-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Full-Stack</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    Desenvolvimento completo de aplicações do back-end ao front-end
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="rounded-full bg-primary/10 p-4">
                    <svg
                      className="h-6 w-6 text-primary"
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
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Git</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    Versionamento de código e colaboração em equipe
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="rounded-full bg-primary/10 p-4">
                    <svg
                      className="h-6 w-6 text-primary"
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
                      <rect height="8" width="6" x="4" y="10" />
                      <rect height="12" width="6" x="14" y="6" />
                      <rect height="16" width="6" x="9" y="4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Microserviços</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    Arquitetura de sistemas distribuídos e escaláveis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Career Goals Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Objetivos de Carreira</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Metas e aspirações profissionais
                </p>
              </div>
              <div className="mx-auto max-w-3xl space-y-8">
                <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-center gap-2">
                      <svg
                        className="h-6 w-6 text-primary"
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
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                        <path d="M2 12h20" />
                      </svg>
                      Carreira Internacional
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-500 dark:text-gray-400">
                      Um dos meus principais objetivos é trabalhar internacionalmente, seja morando no Brasil ou no país
                      da empresa. Busco oportunidades que me permitam colaborar com equipes globais e expandir meus
                      horizontes profissionais.
                    </p>
                    <div className="bg-background/50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Nível de Inglês Atual:</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span>Leitura</span>
                          <div className="w-64 h-2 bg-muted rounded-full overflow-hidden">
                            <div className="bg-primary h-full" style={{ width: "65%" }}></div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Escrita</span>
                          <div className="w-64 h-2 bg-muted rounded-full overflow-hidden">
                            <div className="bg-primary h-full" style={{ width: "65%" }}></div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Conversação</span>
                          <div className="w-64 h-2 bg-muted rounded-full overflow-hidden">
                            <div className="bg-primary h-full" style={{ width: "10%" }}></div>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm mt-4 text-gray-500 dark:text-gray-400">
                        Atualmente com nível básico, com boa capacidade de leitura e limitada conversação. Estou
                        investindo no aprendizado do idioma para alcançar fluência.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Trajetória Profissional</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Minha jornada no desenvolvimento de software
                </p>
              </div>
              <div className="mx-auto w-full max-w-3xl space-y-8">
                <div className="relative pl-8 border-l-2 border-muted-foreground/20">
                  <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-primary"></div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Desenvolvedor Backend .NET</h3>
                    <p className="text-sm text-muted-foreground">ABC EVO | Junho 2025 - Atual</p>
                    <p className="text-gray-500 dark:text-gray-400">
                      Construção de APIs REST, auxílio na manutenção, integração e criação de novas funcionalidades.
                    </p>
                  </div>
                </div>
                <div className="relative pl-8 border-l-2 border-muted-foreground/20">
                  <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-primary"></div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Desenvolvedor Full Stack .NET & Flutter</h3>
                    <p className="text-sm text-muted-foreground">PONTO.SYS SISTEMAS | Novembro 2021 - Maio 2025</p>
                    <p className="text-gray-500 dark:text-gray-400">
                      Construção de APIs REST, auxílio na manutenção, integração e criação de novas funcionalidades,
                      front-end para multiplataformas, back-end e banco de dados.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center justify-center space-y-2 border rounded-lg p-6">
                <div className="text-4xl font-bold">300+</div>
                <p className="text-sm text-center text-gray-500 dark:text-gray-400">Clientes Impactados</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 border rounded-lg p-6">
                <div className="text-4xl font-bold">4+</div>
                <p className="text-sm text-center text-gray-500 dark:text-gray-400">Anos de Experiência</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 border rounded-lg p-6">
                <div className="text-4xl font-bold">5+</div>
                <p className="text-sm text-center text-gray-500 dark:text-gray-400">Projetos Trabalhados</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 border rounded-lg p-6">
                <div className="text-4xl font-bold">6+</div>
                <p className="text-sm text-center text-gray-500 dark:text-gray-400">Tecnologias Dominadas</p>
              </div>
            </div>
          </div>
        </section>

        {/* GitHub Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">GitHub</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Confira meus projetos e contribuições
                </p>
              </div>
              <div className="mx-auto w-full max-w-4xl">
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <iframe
                      src="https://github-readme-stats.vercel.app/api?username=JoaoVGStahl&show_icons=true&theme=dark"
                      width="100%"
                      height="200"
                      frameBorder="0"
                      title="GitHub Stats"
                      className="w-full"
                    ></iframe>
                    <div className="p-6">
                      <div className="flex justify-center space-x-4">
                        <Link href="https://github.com/JoaoVGStahl" target="_blank" rel="noopener noreferrer">
                          <Button className="flex items-center gap-2">
                            <GithubIcon className="h-4 w-4" />
                            Ver Perfil
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section - Controlado por flag */}
        {mostrarDestaque && (
          <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Projetos em Destaque</h2>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    Alguns dos meus trabalhos mais recentes
                  </p>
                </div>
                <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:gap-12">
                  <Card>
                    <CardHeader>
                      <CardTitle>Sistema de Gestão</CardTitle>
                      <CardDescription>Sistema completo para gestão empresarial</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                        {/* Placeholder para imagem */}
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <span className="px-2 py-1 bg-primary/10 rounded-md text-xs font-medium text-primary">
                          .NET
                        </span>
                        <span className="px-2 py-1 bg-primary/10 rounded-md text-xs font-medium text-primary">
                          Flutter
                        </span>
                        <span className="px-2 py-1 bg-primary/10 rounded-md text-xs font-medium text-primary">SQL</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Aplicativo Mobile</CardTitle>
                      <CardDescription>Aplicativo multiplataforma para clientes</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                        {/* Placeholder para imagem */}
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <span className="px-2 py-1 bg-primary/10 rounded-md text-xs font-medium text-primary">
                          Flutter
                        </span>
                        <span className="px-2 py-1 bg-primary/10 rounded-md text-xs font-medium text-primary">
                          Ionic
                        </span>
                        <span className="px-2 py-1 bg-primary/10 rounded-md text-xs font-medium text-primary">
                          REST API
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Contact Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Entre em Contato</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Vamos trabalhar juntos no seu próximo projeto
                </p>
              </div>
              <div className="mx-auto w-full max-w-lg">
                <Card>
                  <CardHeader>
                    <CardTitle>Informações de Contato</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2">
                      <MailIcon className="h-5 w-5 text-primary" />
                      <span>jvitorstahl@hotmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GithubIcon className="h-5 w-5 text-primary" />
                      <span>JoaoVGStahl</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <LinkedinIcon className="h-5 w-5 text-primary" />
                      <span>João Vitor Girardi Stahl</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <Link href="mailto:jvitorstahl@hotmail.com" target="_blank" rel="noopener noreferrer">
                  <Button className="flex items-center gap-2">
                    <MailIcon className="h-4 w-4" />
                    Enviar Email
                  </Button>
                </Link>

              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
