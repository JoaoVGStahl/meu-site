"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold">
          <span>João Stahl</span>
        </Link>

        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/sobre-mim" className="text-sm font-medium transition-colors hover:text-primary">
            Sobre Mim
          </Link>
          <Link href="/estudos" className="text-sm font-medium transition-colors hover:text-primary">
            Estudos
          </Link>
          {/* Aba Aplicativos temporariamente oculta */}
          {/* <Link href="/aplicativos" className="text-sm font-medium transition-colors hover:text-primary">
            Aplicativos
          </Link> */}
        </nav>

        <div className="flex items-center gap-2">
          {/* ModeToggle removido */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="container md:hidden py-4 border-t">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/sobre-mim"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre Mim
            </Link>
            <Link
              href="/estudos"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Estudos
            </Link>
            {/* Aba Aplicativos temporariamente oculta */}
            {/* <Link
              href="/aplicativos"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Aplicativos
            </Link> */}
          </nav>
        </div>
      )}
    </header>
  )
}
