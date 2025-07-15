import { Star, Heart, ShoppingCart } from "lucide-react";
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
  isOnSale 
}: ProductCardProps) => {
  return (
    <Card className="group relative overflow-hidden border border-border hover:shadow-lg transition-all duration-300 bg-white">
      {/* Sale Badge */}
      {isOnSale && discount && (
        <div className="absolute top-3 left-3 z-10">
          <div className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
            {discount}%
          </div>
        </div>
      )}

      {/* Wishlist Button */}
      <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Button size="sm" variant="ghost" className="hover:bg-gray-100 p-1 rounded-full">
          <Heart className="h-4 w-4" />
        </Button>
      </div>

      <CardContent className="p-0">
        {/* Image Container */}
        <div className="relative overflow-hidden h-48 bg-gray-100">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Info */}
        <div className="p-4 space-y-3">
          {/* Product Name */}
          <h3 className="font-medium text-foreground line-clamp-2">
            {name}
          </h3>

          {/* Price */}
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-foreground">
              ${price}
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice}
              </span>
            )}
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(rating) 
                    ? "text-yellow-400 fill-yellow-400" 
                    : "text-gray-300"
                }`}
              />
            ))}
            <span className="text-sm text-muted-foreground ml-2">{rating}</span>
          </div>

          {/* Add to Cart Button */}
          <Button 
            className="w-full bg-primary hover:bg-primary-dark text-white transition-colors duration-300"
            size="sm"
          >
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;