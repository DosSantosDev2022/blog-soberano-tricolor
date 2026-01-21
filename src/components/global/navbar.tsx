"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Componente para os links (evita repetição)
const NavLinks = ({ className = "" }: { className?: string }) => (
  <>
    <Link href="/artigos" className={`${className} hover:text-red-600 transition-colors`}>
      Artigos
    </Link>
    <Link href="/produtos" className={`${className} hover:text-red-600 transition-colors`}>
      Loja do Torcedor
    </Link>
  </>
);

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-zinc-950 text-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">

        {/* LADO ESQUERDO: LOGO E NAV DESKTOP */}
        <div className="flex items-center gap-6">
          <Logo />
          <nav className="hidden md:flex gap-6 text-sm font-bold uppercase tracking-wide">
            <NavLinks />
          </nav>
        </div>

        {/* LADO DIREITO: BUSCA E MENU MOBILE */}
        <div className="flex items-center gap-4">
          {/* Busca Desktop */}
          <form className="relative hidden lg:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500" />
            <Input
              type="search"
              placeholder="Buscar notícias..."
              className="w-50 pl-8 lg:w-75 bg-zinc-900 border-zinc-800 text-white focus:ring-red-600"
            />
          </form>

          {/* MENU MOBILE (SHEET) */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-zinc-900">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-75 bg-zinc-950 border-zinc-800 text-white p-0">
                <SheetHeader className="p-6 border-b border-zinc-800">
                  <SheetTitle className="text-left">
                    <Logo />
                  </SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col gap-4 p-6 text-lg font-bold uppercase tracking-tight">
                  <NavLinks className="border-b border-zinc-900 pb-4" />

                  {/* Busca dentro do Menu Mobile */}
                  <div className="pt-4 lg:hidden">
                    <p className="text-xs text-zinc-500 mb-2 uppercase">Pesquisar</p>
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500" />
                      <Input
                        type="search"
                        placeholder="Buscar..."
                        className="w-full pl-8 bg-zinc-900 border-zinc-800"
                      />
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Navbar };