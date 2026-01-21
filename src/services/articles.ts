// services/articles.ts
import { hygraphFetch } from "@/lib/hygraph";


/**
 * Busca todos os artigos com suporte a filtros e paginação (Página de Listagem)
 */
export async function getArticles({ 
  search = "", 
  category = "", 
  page = 1 
}: { 
  search?: string, 
  category?: string, 
  page?: number 
}) {
  const pageSize = 6;
  const skip = (page - 1) * pageSize;

  // Ajuste no filtro: removemos campos nulos para não confundir o Hygraph
  const whereClause: any = {};
  
  if (search) {
    whereClause.title_contains = search;
  }
  
  if (category && category !== "all") {
    whereClause.category = { slug: category.toLowerCase() };
  }

  // CORREÇÃO AQUI: Uma única abertura de query englobando tudo
  const query = `
    query GetArticles($where: ArticleWhereInput, $first: Int, $skip: Int) {
      articles(where: $where, first: $first, skip: $skip, orderBy: publishedAt_DESC) {
        id
        title
        slug
        category {
          name
        }
        coverImage {
          url
        }
        content {
          raw
        }
        createdAt
      }
      articlesConnection(where: $where) {
        aggregate {
          count
        }
      }
    }
  `;

  const data: any = await hygraphFetch({
    query,
    variables: { where: whereClause, first: pageSize, skip },
    tags: ["articles"]
  });

  // Verificação de segurança caso o data venha vazio
  if (!data) return { articles: [], total: 0, totalPages: 0 };

  return {
    articles: data.articles,
    total: data.articlesConnection.aggregate.count,
    totalPages: Math.ceil(data.articlesConnection.aggregate.count / pageSize)
  };
}

/**
 * Busca um único artigo pelo Slug (Página de Detalhes)
 */
export async function getArticleBySlug(slug: string) {
  const query = `
    query GetArticleBySlug($slug: String!) {
      article(where: { slug: $slug }) {
        id
          title
          slug
          category {
            name
          }
          coverImage {
            url
          }
          publishedAt
          content {
            raw
          }
      }
    }
  `;

  const data = await hygraphFetch({
    query,
    variables: { slug },
    tags: [`article:${slug}`]
  });

  return data.article;
}

/**
 * Busca artigos em destaque para a Home
 */
export async function getFeaturedArticles() {
  const query = `
    query GetFeaturedArticles {
      articles (first: 3, orderBy: publishedAt_DESC) {
          id
          title
          slug
          category {
            name
          }
          coverImage {
            url
          }
          content {
            raw
          }
        }
      }
  `;

  const data = await hygraphFetch({
    query,
    tags: ["articles", "featured"]
  });

  return data.articles;
}