import { ArticleCard, FilterBar, PaginationComponent } from "@/components/global";
import { getArticles } from "@/services/articles";
import { Separator } from "@/components/ui/separator";
import { AdBanner } from "@/components/global/ad-banner";

export default async function ArticlesPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  // Ajuste para Next.js 15: unwrap dos searchParams
  const params = await searchParams;
  const search = typeof params.search === "string" ? params.search : undefined;
  const category = typeof params.category === "string" ? params.category : undefined;
  const page = typeof params.page === "string" ? Number(params.page) : 1;

  // Busca real dos dados
  const { articles, totalPages, total } = await getArticles({ search, category, page });

  return (
    <main className="container mx-auto px-4 py-8 lg:py-12">
      {/* HEADER DA PÁGINA */}
      <header className="mb-8 space-y-2">
        <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter">
          Arquivo <span className="text-red-600">Tricolor</span>
        </h1>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-muted-foreground max-w-md">
            Explore nossa base de conhecimentos, notícias e análises táticas sobre o SPFC.
          </p>

          {/* Contador de Resultados amigável */}
          <div className="text-sm font-medium bg-zinc-100 dark:bg-zinc-800 px-4 py-2 rounded-full w-fit">
            <span className="text-red-600">{total}</span> notícias encontradas
          </div>
        </div>
      </header>

      <Separator className="mb-10" />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* SIDEBAR: Filtros e Busca */}
        <aside className="lg:col-span-1 space-y-8">
          <div className="sticky top-24">
            <FilterBar />

            {/* Espaço para AD Lateral na página de listagem */}
            <div className="mt-8 hidden lg:block w-full h-64 bg-zinc-50 border border-dashed rounded-xl items-center justify-center text-xs text-muted-foreground">
              <AdBanner dataAdSlot="0987654321" />
            </div>
          </div>
        </aside>

        {/* CONTEÚDO: Listagem de Artigos */}
        <section className="lg:col-span-3">
          {articles.length > 0 ? (
            <>
              {/* STATUS DO FILTRO ATUAL */}
              {(search || category) && (
                <p className="text-sm text-muted-foreground mb-6 italic">
                  Mostrando resultados para:
                  {category && <span className="font-bold text-foreground"> Categoria: {category}</span>}
                  {search && <span className="font-bold text-foreground italic"> | Busca: &quot;{search}&quot;</span>}
                </p>
              )}

              {/* GRID DE ARTIGOS */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-10">
                {articles.map((article: any) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>

              {/* PAGINAÇÃO REAL */}
              {totalPages > 1 && (
                <div className="mt-16 pt-8 border-t">
                  <PaginationComponent currentPage={page} totalPages={totalPages} />
                </div>
              )}
            </>
          ) : (
            /* ESTADO VAZIO: Quando não encontra nada */
            <div className="flex flex-col items-center justify-center py-20 text-center space-y-4 bg-zinc-50 rounded-3xl border border-dashed">
              <h3 className="text-xl font-bold">Nenhuma notícia encontrada</h3>
              <p className="text-muted-foreground max-w-xs">
                Não encontramos resultados para sua busca. Tente outros termos ou limpe os filtros.
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}