import { Button } from "@/components/ui/button";
import { ArrowRight, Percent } from "lucide-react";

const HeroBanner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-primary">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-glow/20" />
      <div className="absolute top-10 right-10 opacity-20">
        <Percent className="w-16 h-16 text-white animate-float" />
      </div>
      <div className="absolute bottom-10 left-10 opacity-20">
        <Percent className="w-12 h-12 text-white animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center text-white">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
              AMAZING DISCOUNTS
            </h1>
            <div className="text-6xl sm:text-8xl lg:text-9xl font-black mb-4 text-white/90">
              BIG SALE
            </div>
            <div className="bg-destructive text-white px-8 py-4 rounded-lg inline-block text-2xl sm:text-3xl font-bold mb-8 transform -rotate-2 shadow-glow">
              UP TO 80% OFF
            </div>
            <p className="text-xl sm:text-2xl mb-8 text-white/80 max-w-2xl mx-auto">
              Discover incredible deals on thousands of products. Limited time offer!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20">
                View All Deals
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;