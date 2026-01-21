// app/artigos/[slug]/page.tsx
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ShareButtons } from "@/components/global";
import { Separator } from "@/components/ui/separator";
import { getArticleBySlug } from "@/services/articles";
import { notFound } from "next/navigation";
import { RichText } from "@/components/global/richText";
import { defaultRenders } from "@/components/global/richTextRenders";
import { AdBanner } from "@/components/global/ad-banner";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

// Função para gerar Metadados Dinâmicos (Essencial para SEO)
export async function generateMetadata({ params }: { params: { slug: string } }) {
  // Aqui você buscaria o artigo no Hygraph pelo slug
  return {
    title: `Notícia SPFC | Título do Artigo`,
    description: "Descrição curta do artigo para o Google.",
  };
}

export default async function ArticlePage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  // CORREÇÃO: Unwrapping a Promise do params
  const { slug } = await params;

  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8 lg:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* COLUNA PRINCIPAL: O ARTIGO (Lg: col-span-8) */}
        <article className="lg:col-span-8 space-y-6">
          <header className="space-y-4">
            <Badge className="bg-red-600"># {article.category.name}</Badge>
            <h1 className="text-3xl md:text-5xl font-black leading-tight text-zinc-900">
              {article.title}
            </h1>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-4 border-y text-sm text-muted-foreground">
              <span>Publicado em {format(new Date(article.publishedAt), 'dd/MM/yyyy', { locale: ptBR })} • Por Redação Soberano Tricolor</span>

              <ShareButtons slug={article.slug} title={article.title} />
            </div>
          </header>

          <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
            <Image
              src={article.coverImage.url}
              alt={article.title}
              fill
              className="object-cover"
              priority // Carrega esta imagem primeiro por ser o LCP do SEO
            />
          </div>

          {/* CONTEÚDO DO ARTIGO */}
          <div className="prose prose-lg max-w-none prose-headings:font-bold prose-red">
            {article.content?.raw ? (
              <RichText
                content={article.content.raw}
                renderers={defaultRenders}
              />
            ) : (
              <p className="text-muted-foreground">Conteúdo não disponível.</p>
            )}
          </div>

          <Separator className="my-8" />

          {/* ESPAÇO PARA ADSENSE NO MEIO DO ARTIGO */}
          <div className="w-full h-62.5 bg-zinc-50 border flex items-center justify-center text-zinc-400 rounded-md italic">
            <AdBanner dataAdSlot="0987654321" dataAdFormat="rectangle" />
          </div>
        </article>

        {/* COLUNA LATERAL: RELACIONADOS (Lg: col-span-4) */}
        <aside className="lg:col-span-4 space-y-8">
          <div className="sticky top-24 space-y-6">
            <h2 className="text-xl font-bold border-l-4 border-red-600 pl-3 italic uppercase">
              Leia Também
            </h2>

            <div className="flex flex-col gap-6">
              {/* Mini cards de artigos relacionados */}
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex gap-4 group cursor-pointer">
                  <div className="relative h-20 w-32 shrink-0 overflow-hidden rounded-md">
                    <Image
                      src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=400"
                      alt="Relacionado"
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="font-bold text-sm line-clamp-2 group-hover:text-red-600 transition-colors">
                      Título curto de outra notícia sobre o Tricolor
                    </h3>
                    <span className="text-xs text-muted-foreground mt-1">Há 2 horas</span>
                  </div>
                </div>
              ))}
            </div>

            {/* BOX DE ADSENSE LATERAL */}
            <div className="w-full h-100 bg-zinc-50 border flex items-center justify-center text-zinc-400 rounded-md italic">
              <AdBanner dataAdSlot="0987654321" />
            </div>
          </div>
        </aside>

      </div>
    </main>
  );
}