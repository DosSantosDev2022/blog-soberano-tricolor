// components/product-card.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <Card className="group overflow-hidden border-zinc-200 hover:border-red-600 transition-colors flex flex-col justify-between">
      <CardHeader className="p-0">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.image.url}
            alt={product.name}
            fill
            className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-sm font-bold line-clamp-2 min-h-14">
          {product.name}
        </CardTitle>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full bg-zinc-950 hover:bg-red-600 text-white font-bold py-6">
          <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer">
            <ShoppingCart className="mr-2 h-4 w-4" /> COMPRAR AGORA
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}

export { ProductCard }