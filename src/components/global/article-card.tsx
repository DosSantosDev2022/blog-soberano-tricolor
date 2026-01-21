// components/article-card.tsx
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { twMerge } from "tailwind-merge"
import { format, isValid } from "date-fns"
import { ptBR } from "date-fns/locale"

const ArticleCard = ({ article }: { article: any }) => {

  const dateValue = article.publishedAt || article.createdAt;
  const dateObject = dateValue ? new Date(dateValue) : null;
  const formattedDate = dateObject && isValid(dateObject)
    ? format(dateObject, 'dd/MM/yyyy', { locale: ptBR })
    : 'Data indisponível';


  return (
    <Link
      href={`/artigos/${article.slug}`}
      className={twMerge(
        'group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-border bg-card text-foreground shadow-sm transition-all duration-300 hover:shadow-lg',
      )}
    >
      <Card>
        {/* Imagem do Card */}
        <div className="relative h-48 w-full">
          <Image
            src={article.coverImage.url}
            alt={article.name}
            fill
            className="rounded-t-2xl object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute left-4 top-4 z-10">
            <Badge variant="destructive">
              {article.category.name}
            </Badge>
          </div>
        </div>

        {/* Conteúdo do Card */}
        <CardContent className="flex flex-1 flex-col p-4">
          <h3 className="line-clamp-2 text-lg font-semibold leading-tight text-foreground transition-colors group-hover:text-primary">
            {article.title}
          </h3>
          <span className="mt-2 text-sm text-muted-foreground">
            Publicado em: {formattedDate}
          </span>
        </CardContent>
      </Card>
    </Link>
  )
}

export { ArticleCard }