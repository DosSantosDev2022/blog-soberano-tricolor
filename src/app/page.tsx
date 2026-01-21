import { ArticleCard } from "@/components/global";
import { Button } from "@/components/ui/button";
import { getArticles } from "@/services/articles";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "lucide-react";
import { AdBanner } from "@/components/global/ad-banner";

export default async function HomePage() {
  // Buscamos os primeiros 7 artigos para compor a página
  const { articles } = await getArticles({ page: 1 });

  // Se não houver artigos, mostramos uma mensagem amigável
  if (!articles || articles.length === 0) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h1 className="text-2xl font-bold">Nenhuma notícia disponível no momento.</h1>
        <p className="text-muted-foreground">O MorumBIS está em silêncio... volte mais tarde! 🇾🇪</p>
      </div>
    );
  }

  // O primeiro artigo será o nosso destaque (Hero)
  const latestArticle = articles[0];
  // Os demais serão listados na seção de recentes
  const recentArticles = articles.slice(1, 7);

  return (
    <main className="container mx-auto px-4 py-8 space-y-16">

      {/* SEÇÃO DE DESTAQUE (Hero Section) */}
      <section className="relative overflow-hidden rounded-[32px] md:rounded-[40px] bg-zinc-950 shadow-2xl border border-zinc-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">

          {/* Imagem: Altura reduzida no mobile para evitar o visual "esticado" */}
          <div className="lg:col-span-6 relative w-full h-64 md:h-80 lg:h-auto overflow-hidden">
            <Image
              src={latestArticle.coverImage.url}
              fill
              className="object-cover object-center transition-transform duration-700 hover:scale-105"
              alt={latestArticle.title}
              priority
            />
            {/* Overlay para mobile: garante leitura do badge sobre a imagem se necessário */}
            <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent lg:hidden" />
          </div>

          {/* Conteúdo: Menos padding no mobile para compactar o visual */}
          <div className="lg:col-span-6 p-6 md:p-10 lg:p-16 flex flex-col justify-center items-start space-y-4 md:space-y-6 lg:space-y-8">
            <div className="flex items-center gap-3">
              {/* Badge corrigido: Usando span ou componente Badge do Shadcn (não o ícone da Lucide) */}
              <span className="bg-red-600 text-white px-3 py-1 rounded-full font-bold text-[10px] md:text-xs uppercase tracking-wider">
                {latestArticle.category?.name || "DESTAQUE"}
              </span>
            </div>

            {/* Título: Tamanho responsivo (text-2xl no mobile) */}
            <h1 className="text-2xl md:text-4xl lg:text-5.5xl font-black text-white leading-tight tracking-tighter italic uppercase">
              {latestArticle.title}
            </h1>

            <div className="pt-2 md:pt-4 w-full">
              <Button asChild size="default" className="w-full md:w-auto bg-white text-black hover:bg-red-600 hover:text-white font-bold rounded-xl px-6 py-5 h-auto transition-all group">
                <Link href={`/artigos/${latestArticle.slug}`} className="flex items-center justify-center gap-2">
                  LER NOTÍCIA COMPLETA
                  <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE ARTIGOS RECENTES */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-l-4 border-red-600 pl-4">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tight">Últimas do Tricolor</h2>
            <p className="text-muted-foreground italic">As notícias mais recentes do São Paulo FC.</p>
          </div>
          <Button variant="outline" asChild className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
            <Link href="/artigos">VER TUDO</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentArticles.map((article: any) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* ESPAÇO PARA ADSENSE (Configurado para Google AdSense) */}
      <div className="w-full py-10">
        <div className="w-full h-32 bg-zinc-50 border-2 border-dashed border-zinc-200 flex flex-col items-center justify-center text-zinc-400 rounded-2xl">
          <span className="text-[10px] uppercase tracking-widest mb-2 font-bold">Publicidade</span>
          {/* Aqui você colaria o componente de Ad do Google futuramente */}
          <AdBanner dataAdSlot="0987654321" dataAdFormat="rectangle" />
        </div>
      </div>
    </main>
  );
}