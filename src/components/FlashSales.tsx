import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";

const FlashSales = () => {
  const flashProducts = [
    {
      name: "Baby care product",
      price: 120,
      originalPrice: 200,
      discount: 40,
      rating: 4.0,
      image: "/placeholder.svg",
      isOnSale: true
    },
    {
      name: "Vadilal ice-cream",
      price: 370,
      originalPrice: 530,
      discount: 30,
      rating: 4.4,
      image: "/placeholder.svg",
      isOnSale: true
    },
    {
      name: "Fruits & vegetable",
      price: 375,
      originalPrice: 500,
      discount: 25,
      rating: 4.4,
      image: "/placeholder.svg",
      isOnSale: true
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-8">
            Flash Sales
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {flashProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button 
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-lg font-semibold rounded-lg"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FlashSales;