// services/products.ts
import { hygraphFetch } from "@/lib/hygraph";

export async function getProducts({ page = 1 }: { page?: number }) {
  const pageSize = 10; // Conforme solicitado
  const skip = (page - 1) * pageSize;

  const query = `
    query GetProducts($first: Int, $skip: Int) {
      recommendedProducts(first: $first, skip: $skip, orderBy: createdAt_DESC) {
        id
        name
        affiliateLink
        image {
          url
        }
      }
      recommendedProductsConnection {
        aggregate {
          count
        }
      }
    }
  `;

  const data: any = await hygraphFetch({
    query,
    variables: { first: pageSize, skip },
    tags: ["products"]
  });

  if (!data) return { products: [], totalPages: 0 };

  return {
    products: data.recommendedProducts,
    totalPages: Math.ceil(data.recommendedProductsConnection.aggregate.count / pageSize)
  };
}