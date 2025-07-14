import { Star, Heart, ShoppingCart, Eye, Zap } from "lucide-react";
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
    <Card className="group relative overflow-hidden glass border-white/10 hover:border-primary/30 transition-all duration-500 hover:shadow-glass hover:-translate-y-2">
      {/* Sale Badge */}
      {isOnSale && discount && (
        <div className="absolute top-3 left-3 z-10">
          <div className="bg-gradient-primary text-white px-3 py-1 rounded-full text-xs font-bold shadow-neon flex items-center">
            <Zap className="w-3 h-3 mr-1" />
            -{discount}%
          </div>
        </div>
      )}

      {/* Wishlist Button */}
      <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Button size="sm" variant="ghost" className="glass hover:bg-white/20 text-white p-2 rounded-full">
          <Heart className="h-4 w-4 hover:text-destructive transition-colors" />
        </Button>
      </div>

      <CardContent className="p-0">
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-t-lg h-48 bg-gradient-card">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Overlay with quick actions */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
            <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border-white/20">
              <Eye className="h-4 w-4" />
            </Button>
            <Button size="sm" className="bg-gradient-primary hover:bg-gradient-secondary text-white border-0 shadow-neon">
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4 space-y-3">
          {/* Rating */}
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < rating 
                    ? "text-yellow-400 fill-yellow-400" 
                    : "text-muted-foreground"
                }`}
              />
            ))}
            <span className="text-sm text-muted-foreground ml-2">({rating}.0)</span>
          </div>

          {/* Product Name */}
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {name}
          </h3>

          {/* Price */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">
              ₹{price}
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ₹{originalPrice}
              </span>
            )}
          </div>

          {/* Add to Cart Button */}
          <Button 
            className="w-full bg-gradient-primary hover:bg-gradient-secondary border-0 shadow-card hover:shadow-neon transition-all duration-300 group/btn"
            size="sm"
          >
            <ShoppingCart className="h-4 w-4 mr-2 group-hover/btn:animate-bounce" />
            Add to Cart
          </Button>
        </div>
      </CardContent>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-lg bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none" />
    </Card>
  );
};

export default ProductCard;