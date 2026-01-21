import Link from "next/link";
import { Mail, Github, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "./logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-primary text-muted border-t border-zinc-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Coluna 1: Branding e Sobre */}
          <div className="space-y-4">
            <Logo />
            <p className="text-sm leading-relaxed">
              O maior portal independente de notícias sobre o São Paulo Futebol Clube.
              Informação de torcedor para torcedor, com ética e paixão pelo Tricolor.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-red-600 transition-colors"><Twitter size={20} /></Link>
              <Link href="#" className="hover:text-red-600 transition-colors"><Instagram size={20} /></Link>
              <Link href="#" className="hover:text-red-600 transition-colors"><Mail size={20} /></Link>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div className="space-y-4">
            <h3 className="text-white font-bold uppercase text-sm tracking-widest">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/artigos" className="hover:text-white transition-colors">Todas as Notícias</Link></li>
              <li><Link href="/artigos?category=Jogos" className="hover:text-white transition-colors">Próximos Jogos</Link></li>
              <li><Link href="/artigos?category=Mercado" className="hover:text-white transition-colors">Mercado da Bola</Link></li>
              <li><Link href="/produtos" className="hover:text-white transition-colors">Produtos Recomendados</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Institucional */}
          <div className="space-y-4">
            <h3 className="text-white font-bold uppercase text-sm tracking-widest">Suporte</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/sobre" className="hover:text-white transition-colors">Sobre o Projeto</Link></li>
              <li><Link href="/contato" className="hover:text-white transition-colors">Anuncie Conosco</Link></li>
              <li><Link href="/privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link></li>
            </ul>
          </div>

          {/* Coluna 4: Newsletter */}
          <div className="space-y-4">
            <h3 className="text-white font-bold uppercase text-sm tracking-widest">Fique Atualizado</h3>
            <p className="text-sm">Receba as últimas do MorumBIS no seu e-mail.</p>
            <div className="flex flex-col gap-2">
              <Input
                placeholder="Seu melhor e-mail"
                className="bg-zinc-900 border-zinc-800 focus-visible:ring-red-600"
              />
              <Button className="bg-red-600 hover:bg-red-700 text-white font-bold">
                INSCREVER
              </Button>
            </div>
          </div>
        </div>

        {/* Linha Inferior: Copyright */}
        <div className="mt-12 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {currentYear} Soberano Tricolor - Todos os direitos reservados.</p>
          <div className="flex items-center gap-2">
            <span>Desenvolvido por</span>
            <span className="text-red-600">dossantosdev</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer }