import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const FlashSales = () => {
  const flashProducts = [
    {
      name: "Baby care product set",
      price: 120,
      originalPrice: 160,
      discount: 40,
      rating: 5,
      image: "/placeholder.svg",
      isOnSale: true
    },
    {
      name: "Dairy Product Premium",
      price: 960,
      originalPrice: 1160,
      discount: 35,
      rating: 4,
      image: "/placeholder.svg",
      isOnSale: true
    },
    {
      name: "Vadilal ice-cream special",
      price: 370,
      originalPrice: 470,
      discount: 30,
      rating: 4,
      image: "/placeholder.svg",
      isOnSale: true
    },
    {
      name: "Fresh Fruits & vegetables",
      price: 375,
      originalPrice: 400,
      discount: 25,
      rating: 5,
      image: "/placeholder.svg",
      isOnSale: true
    },
    {
      name: "Organic Vegetables Premium",
      price: 280,
      originalPrice: 350,
      discount: 20,
      rating: 5,
      image: "/placeholder.svg",
      isOnSale: true
    },
    {
      name: "Organic Vegetables Deluxe",
      price: 280,
      originalPrice: 350,
      discount: 20,
      rating: 5,
      image: "/placeholder.svg",
      isOnSale: true
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="bg-destructive text-white p-2 rounded-lg">
              <Zap className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">Flash Sales</h2>
          </div>
          <Button variant="outline" className="hidden sm:flex">
            View All Products
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {flashProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="destructive" size="lg" className="text-lg px-8 py-6">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FlashSales;