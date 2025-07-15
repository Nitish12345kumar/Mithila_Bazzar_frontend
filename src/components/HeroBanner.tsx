import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  return (
    <section className="relative overflow-hidden bg-primary py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Left Content */}
          <div className="flex-1 text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Biggest Sale
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Up to 80% off
            </p>
            <Button 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold rounded-lg"
            >
              Shop Now
            </Button>
          </div>

          {/* Right Image */}
          <div className="hidden md:block flex-1 text-center">
            <div className="relative">
              <div className="w-64 h-80 bg-gradient-to-br from-orange-200 to-orange-400 rounded-2xl mx-auto flex items-center justify-center">
                <div className="text-8xl">🛍️</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;