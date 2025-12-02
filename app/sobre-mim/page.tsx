import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, GraduationCap, User, MapPin, Mail } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Sobre Mim</h1>

      <div className="max-w-4xl mx-auto">
        <Card className="mb-12 bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-6 w-6 text-primary" />
              Resumo Profissional
            </CardTitle>
            <CardDescription>Minha trajetória e perfil profissional</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-500 dark:text-gray-400">
              Desde 2017 no caminho da programação, sempre buscando evolução pessoal e profissional, atuo como
              desenvolvedor full-stack, realizando manutenção, integração e criação de novas funcionalidades.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-background/50 p-4 rounded-lg border border-primary/10">
                <h3 className="text-lg font-medium flex items-center gap-2 mb-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  Informações Pessoais
                </h3>
                <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Nome: João Vitor Girardi Stahl</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Idade: 24 Anos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Localização: Bebedouro/SP</span>
                  </li>
                </ul>
              </div>

              <div className="bg-background/50 p-4 rounded-lg border border-primary/10">
                <h3 className="text-lg font-medium flex items-center gap-2 mb-3">
                  <Mail className="h-5 w-5 text-primary" />
                  Contato Profissional
                </h3>
                <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Email: jvitorstahl@hotmail.com</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>LinkedIn: linkedin.com/in/JoaoVGStahl</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>GitHub: github.com/JoaoVGStahl</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8 bg-gradient-to-br from-primary/5 to-transparent border-primary/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-6 w-6 text-primary" />
              Experiência Profissional
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-background/50 p-4 rounded-lg border border-primary/10">
              <h3 className="text-lg font-bold">PONTO.SYS SISTEMAS</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                Desenvolvedor Full Stack .NET & Flutter | Novembro 2021 – Atual
              </p>
              <div className="space-y-2">
                <div>
                  <h4 className="font-medium text-sm">Função Exercida:</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Construção de APIs REST, auxílio na manutenção, integração e criação de novas funcionalidades,
                    front-end para multiplataformas, back-end e banco de dados.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-sm">Tecnologias:</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    .NET 2.1, .NET 5.0, Flutter 3, Ionic v3, MySQL.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-sm">Conquistas:</h4>
                  <ul className="list-disc pl-5 text-sm text-gray-500 dark:text-gray-400">
                    <li>Desenvolvimento de novas funcionalidades que impactaram positivamente mais de 300 clientes</li>
                    <li>Implementação de melhorias de performance em sistemas críticos</li>
                    <li>Participação ativa em decisões de arquitetura e design de software</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8 bg-gradient-to-br from-primary/5 to-transparent border-primary/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              Formação Acadêmica
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-background/50 p-4 rounded-lg border border-primary/10">
              <h3 className="text-lg font-bold">UNOPAR-EAD ENSINO SUPERIOR</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                Análise e Desenvolvimento de Sistemas | 2019 - 2022
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Formação superior com foco em desenvolvimento de software, análise de sistemas, banco de dados,
                programação orientada a objetos e engenharia de software.
              </p>
            </div>

            <div className="bg-background/50 p-4 rounded-lg border border-primary/10">
              <h3 className="text-lg font-bold">ETEC IDIO ZUCCHI</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                Curso Técnico em Desenvolvimento de Sistemas | 2020 - 2021
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Formação técnica com foco em programação Full-Stack, desenvolvimento desktop e banco de dados
                relacional. Participação em projetos práticos e trabalhos em equipe.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-primary/5 to-transparent border-primary/10">
          <CardHeader>
            <CardTitle>Informações Complementares</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-background/50 p-4 rounded-lg border border-primary/10">
              <h3 className="text-lg font-medium">Habilidades Interpessoais</h3>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="flex items-center gap-2">
                  <span className="text-primary">•</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Trabalho em equipe</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">•</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Comunicação eficaz</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">•</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Resolução de problemas</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">•</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Adaptabilidade</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">•</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Organização</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">•</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Proatividade</span>
                </div>
              </div>
            </div>

            <div className="bg-background/50 p-4 rounded-lg border border-primary/10">
              <h3 className="text-lg font-medium">Interesses Profissionais</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Desenvolvimento de software, arquitetura de sistemas, novas tecnologias, inteligência artificial,
                trabalho remoto e oportunidades internacionais.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
