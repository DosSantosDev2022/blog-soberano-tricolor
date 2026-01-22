// components/article-card.tsx
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { twMerge } from "tailwind-merge"
import { format, isValid } from "date-fns"
import { ptBR } from "date-fns/locale"

const ArticleCard = ({ article }: { article: any }) => {
  // Tratamento de data seguro
  const dateValue = article.publishedAt || article.createdAt;
  const dateObject = dateValue ? new Date(dateValue) : null;
  const formattedDate = dateObject && isValid(dateObject)
    ? format(dateObject, 'dd/MM/yyyy', { locale: ptBR })
    : 'Data indisponível';

  return (
    <Link
      href={`/artigos/${article.slug}`}
      className="group flex flex-col h-full bg-white dark:bg-zinc-900 rounded-[24px] overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-500"
    >
      {/* Container da Imagem com Aspect Ratio fixo */}
      <div className="relative aspect-16/10 w-full overflow-hidden">
        <Image
          src={article.coverImage.url}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Overlay gradiente suave na imagem */}
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />

        {/* Badge flutuante mais elegante */}
        <div className="absolute top-3 left-3">
          <Badge className="bg-red-600 hover:bg-red-700 text-[10px] font-bold uppercase tracking-wider border-none px-3 py-1 shadow-lg">
            {article.category?.name || "Geral"}
          </Badge>
        </div>
      </div>

      {/* Conteúdo com espaçamento equilibrado */}
      <div className="flex flex-col flex-1 p-5 space-y-3">
        {/* Data com ícone ou estilo sutil */}
        <div className="flex items-center gap-2 text-[11px] font-bold text-zinc-400 uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-red-600" />
          {formattedDate}
        </div>

        {/* Título: Agora com fonte mais forte e espaçamento menor */}
        <h3 className="text-xl font-black leading-tight text-zinc-900 dark:text-white group-hover:text-red-600 transition-colors line-clamp-3 italic uppercase tracking-tighter">
          {article.title}
        </h3>

        {/* Rodapé do Card: "Leia mais" que aparece no hover */}
        <div className="mt-auto pt-4 flex items-center text-xs font-bold text-red-600 opacity-0 group-hover:opacity-100 transition-opacity">
          LER AGORA <span className="ml-2">→</span>
        </div>
      </div>
    </Link>
  )
}

export { ArticleCard }