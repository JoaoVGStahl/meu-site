import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} João Vitor Girardi Stahl. Todos os direitos reservados.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href="/sobre-mim"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Sobre Mim
          </Link>
          <Link
            href="/estudos"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Estudos
          </Link>
        </div>
      </div>
      <div className="container mt-4">
        <p className="text-center text-xs text-muted-foreground">Site desenvolvido com o auxílio de v0 by Vercel</p>
      </div>
    </footer>
  )
}
