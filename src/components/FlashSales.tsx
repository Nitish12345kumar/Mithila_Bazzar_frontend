import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Clock, Flame } from "lucide-react";

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
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-primary rounded-full opacity-10 blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-secondary rounded-full opacity-10 blur-3xl animate-glow-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="glass p-4 rounded-xl border border-destructive/20 shadow-neon">
              <Zap className="h-8 w-8 text-destructive animate-glow-pulse" />
            </div>
            <Flame className="h-6 w-6 text-destructive animate-bounce" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl font-black bg-gradient-primary bg-clip-text text-transparent mb-4">
            Flash Sales
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Grab these incredible deals before they disappear! Limited time offers with massive discounts.
          </p>

          {/* Countdown Timer */}
          <div className="flex justify-center items-center space-x-6 mb-8">
            <div className="flex items-center space-x-2 glass px-4 py-2 rounded-lg border border-white/10">
              <Clock className="h-5 w-5 text-destructive" />
              <span className="text-foreground font-semibold">Ends in:</span>
            </div>
            
            <div className="flex space-x-2">
              {['23', '59', '45'].map((time, index) => (
                <div key={index} className="glass px-3 py-2 rounded-lg border border-destructive/20 min-w-[3rem] text-center">
                  <div className="text-2xl font-bold text-destructive">{time}</div>
                  <div className="text-xs text-muted-foreground">
                    {index === 0 ? 'HRS' : index === 1 ? 'MIN' : 'SEC'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-12">
          {flashProducts.map((product, index) => (
            <div 
              key={index} 
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="text-xl px-12 py-8 bg-gradient-primary hover:bg-gradient-secondary border-0 shadow-neon hover:shadow-glow transition-all duration-500 group"
          >
            <Flame className="mr-3 h-6 w-6 group-hover:animate-bounce" />
            View All Flash Sales
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FlashSales;