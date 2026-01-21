"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";

const FilterBar = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }
    // Remove a página ao pesquisar para evitar erros de paginação
    params.delete("page");
    replace(`${pathname}?${params.toString()}`);
  };

  const setCategory = (category: string) => {
    const params = new URLSearchParams(searchParams);
    if (category === "all") {
      params.delete("category");
    } else {
      params.set("category", category);
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const currentCategory = searchParams.get("category") || "all";

  return (
    <div className="space-y-6 bg-zinc-50 p-6 rounded-xl border">
      <div>
        <h3 className="font-bold mb-3">Pesquisar</h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Ex: Calleri, MorumBIS..."
            className="pl-9"
            defaultValue={searchParams.get("search")?.toString()}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>

      <div>
        <h3 className="font-bold mb-3">Categorias</h3>
        <div className="flex flex-wrap gap-2">
          {["all", "Mercado", "Tático", "Jogos", "Base"].map((cat) => (
            <Button
              key={cat}
              variant={currentCategory === cat ? "default" : "outline"}
              size="sm"
              onClick={() => setCategory(cat)}
              className={currentCategory === cat ? "bg-red-600 hover:bg-red-700" : ""}
            >
              {cat === "all" ? "Todas" : cat}
            </Button>
          ))}
        </div>
      </div>

      {(searchParams.get("search") || searchParams.get("category")) && (
        <Button
          variant="ghost"
          className="w-full text-red-600 hover:text-red-700"
          onClick={() => replace(pathname)}
        >
          <X className="mr-2 h-4 w-4" /> Limpar Filtros
        </Button>
      )}
    </div>
  );
}

export { FilterBar }