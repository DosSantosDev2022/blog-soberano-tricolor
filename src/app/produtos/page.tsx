import { getProducts } from "@/services/products";
import { ProductCard } from "@/components/global/product-card";
import { PaginationComponent } from "@/components/global";
import { AdBanner } from "@/components/global/ad-banner";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const page = Number(params.page) || 1;

  const { products, totalPages } = await getProducts({ page });

  return (
    <main className="container mx-auto px-4 py-10">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">
          Loja do <span className="text-red-600">Torcedor</span>
        </h1>
        <p className="text-muted-foreground mt-4 text-lg">
          Os melhores produtos do São Paulo FC selecionados para você.
        </p>
      </header>

      {/* Banner de anúncio superior */}
      <div className="mb-12">
        <AdBanner dataAdSlot="SEU_SLOT_LOJA_TOP" />
      </div>

      {products.length > 0 ? (
        <div className="space-y-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {products.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center border-t pt-10">
              <PaginationComponent currentPage={page} totalPages={totalPages} />
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-20 bg-zinc-50 rounded-3xl border border-dashed">
          <p className="text-xl font-medium">Nenhum produto em estoque no momento.</p>
        </div>
      )}

      {/* Banner de anúncio inferior */}
      <div className="mt-20">
        <AdBanner dataAdSlot="SEU_SLOT_LOJA_BOTTOM" />
      </div>
    </main>
  );
}