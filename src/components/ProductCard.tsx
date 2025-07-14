import { Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  image: string;
  isOnSale?: boolean;
}

const ProductCard = ({ 
  name, 
  price, 
  originalPrice, 
  discount, 
  rating, 
  image, 
  isOnSale = false 
}: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden bg-card border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-2">
      <div className="relative">
        {isOnSale && discount && (
          <div className="absolute top-2 left-2 z-10 bg-destructive text-white px-2 py-1 rounded text-sm font-semibold">
            -{discount}%
          </div>
        )}
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-2 right-2 z-10 bg-white/80 hover:bg-white h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Heart className="h-4 w-4" />
        </Button>
        <div className="aspect-square bg-muted overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < rating ? 'text-yellow-400 fill-current' : 'text-muted-foreground'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground ml-2">({rating}.0)</span>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-foreground">${price}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice}
              </span>
            )}
          </div>
        </div>
        
        <Button className="w-full" variant="secondary">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add To Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;