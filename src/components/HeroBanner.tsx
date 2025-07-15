import { Button } from "@/components/ui/button";
import { ShoppingBag, Star, Zap } from "lucide-react";

const HeroBanner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              <Zap className="w-4 h-4" />
              Limited Time Offer
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Biggest <span className="text-blue-600">Sale</span>
              <br />
              of the Year
            </h1>
            
            <p className="text-xl text-gray-600 max-w-md">
              Up to <span className="font-bold text-orange-500">80% off</span> on selected items. 
              Don't miss out on these amazing deals!
            </p>
            
            <div className="flex items-center gap-4">
              <Button 
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Shop Now
              </Button>
              
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">4.8/5</span>
                <span>(2.5k+ reviews)</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden md:block flex-1 text-center">
            <div className="relative">
              <div className="w-80 h-96 bg-gradient-to-br from-blue-100 via-white to-blue-50 rounded-3xl mx-auto flex items-center justify-center shadow-2xl border border-blue-100">
                <div className="text-center space-y-4">
                  <div className="text-9xl">🛍️</div>
                  <div className="text-2xl font-bold text-gray-800">Premium</div>
                  <div className="text-lg text-gray-600">Collection</div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-bounce">
                80% OFF
              </div>
              
              <div className="absolute bottom-8 left-4 bg-white shadow-lg rounded-lg p-3 border border-gray-100">
                <div className="text-xs text-gray-600">Free Shipping</div>
                <div className="text-sm font-bold text-gray-900">On orders $50+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;