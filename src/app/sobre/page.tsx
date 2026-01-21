import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">

      {/* 1. HERO SECTION: Impacto Visual */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://us-west-2.graphassets.com/cmklzmsvn09hx07n1h3subjvg/cmko7hi6jf25o07n0rlvr27fd"
          alt="Estádio do MorumBIS"
          fill
          className="object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-1000"
          priority
        />
        <div className="container relative z-10 text-center space-y-6 px-4">
          <span className="text-red-600 font-black tracking-[0.3em] uppercase text-sm">Desde 2026</span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black italic tracking-tighter uppercase leading-none">
            Soberano <br /> <span className="text-red-600 stroke-text">Tricolor</span>
          </h1>
        </div>
      </section>

      {/* 2. GRID ASSIMÉTRICO: História e Imagens */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Coluna de Texto */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-black italic uppercase border-l-8 border-red-600 pl-6">Nossa Essência</h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
                O Soberano Tricolor nasceu com uma missão clara: elevar o patamar do conteúdo esportivo independente. No MorumBIS, em Cotia ou no CT da Barra Funda, estamos onde o São Paulo está.
              </p>
            </div>

            {/* Imagem 2 (Vertical/Portrait) */}
            <div className="relative h-125 rounded-[3rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <Image
                src="https://us-west-2.graphassets.com/cmklzmsvn09hx07n1h3subjvg/cmko7wgcbfpkm07n0a4gog512"
                alt="Detalhe de jogo"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Coluna de Imagens e Complemento */}
          <div className="lg:col-span-7 space-y-12">
            {/* Imagem 3 (Landscape) */}
            <div className="relative h-100 rounded-[3rem] overflow-hidden shadow-2xl -rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image
                src="https://us-west-2.graphassets.com/cmklzmsvn09hx07n1h3subjvg/cmko7z0enfqra07n03pbylo17"
                alt="Torcida Tricolor"
                fill
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold uppercase tracking-tighter">Independência</h3>
                <p className="text-sm text-zinc-500">
                  Não temos vínculos políticos. Nossa única bússola é a verdade e o bem-estar do clube.
                </p>
              </div>
              {/* Imagem 4 (Quadrada Pequena) */}
              <div className="relative aspect-square rounded-full overflow-hidden border-8 border-red-600/10">
                <Image
                  src="https://us-west-2.graphassets.com/cmklzmsvn09hx07n1h3subjvg/cmko80o5yfrjz07n0aerrg93t"
                  alt="Futebol"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CTA FINAL: Engajamento */}
      <section className="bg-red-600 py-20">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter">
            Faça parte da nossa história
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-red-600 hover:bg-black hover:text-white px-10 py-8 text-xl font-bold rounded-full">
              <Link href="/artigos">Explorar Notícias</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}