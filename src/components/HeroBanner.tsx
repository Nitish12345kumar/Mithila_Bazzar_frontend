import { Button } from "@/components/ui/button";
import { ArrowRight, Percent, Sparkles, Star } from "lucide-react";

const HeroBanner = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center mesh-bg">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 opacity-30">
          <Percent className="w-20 h-20 text-primary animate-float" />
        </div>
        <div className="absolute bottom-32 left-20 opacity-20">
          <Star className="w-16 h-16 text-primary-glow animate-float" style={{ animationDelay: '1s' }} />
        </div>
        <div className="absolute top-1/2 right-1/3 opacity-25">
          <Sparkles className="w-12 h-12 text-accent animate-float" style={{ animationDelay: '2s' }} />
        </div>
        
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-primary rounded-full opacity-20 animate-glow-pulse blur-xl" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-secondary rounded-full opacity-15 animate-glow-pulse blur-2xl" style={{ animationDelay: '3s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center text-white">
          <div className="animate-slide-up">
            {/* Super Sale Badge */}
            <div className="inline-block mb-8">
              <div className="glass px-8 py-3 rounded-full border border-white/20 shadow-glass">
                <span className="text-primary-glow text-sm font-semibold tracking-wider">
                  ✨ MEGA SALE FESTIVAL
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black mb-8 leading-none">
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                AMAZING
              </span>
              <span className="block text-white text-shadow-lg">
                DISCOUNTS
              </span>
            </h1>

            {/* Big Sale Text with 3D effect */}
            <div className="relative mb-8">
              <div className="text-7xl sm:text-9xl lg:text-[12rem] font-black text-transparent bg-gradient-primary bg-clip-text opacity-20 absolute inset-0 blur-sm">
                BIG SALE
              </div>
              <div className="text-7xl sm:text-9xl lg:text-[12rem] font-black bg-gradient-primary bg-clip-text text-transparent relative z-10">
                BIG SALE
              </div>
            </div>

            {/* Discount Badge */}
            <div className="inline-block mb-10">
              <div className="glass px-12 py-6 rounded-2xl border border-destructive/30 shadow-neon transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="text-4xl sm:text-5xl font-black text-destructive">
                  UP TO 80% OFF
                </div>
                <div className="text-lg text-white/80 font-medium">
                  Limited Time Only!
                </div>
              </div>
            </div>

            <p className="text-2xl sm:text-3xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed">
              Discover incredible deals on thousands of premium products. 
              <span className="text-primary-glow font-semibold"> Don't miss out!</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="text-xl px-12 py-8 bg-gradient-primary hover:bg-gradient-secondary border-0 shadow-neon hover:shadow-glow transition-all duration-500 group"
              >
                <Sparkles className="mr-3 h-6 w-6 group-hover:animate-spin" />
                Shop Now
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="text-xl px-12 py-8 glass border-white/30 text-white hover:bg-white/10 hover:border-primary/50 transition-all duration-500"
              >
                View All Deals
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-16 text-center">
              <div className="glass px-6 py-4 rounded-xl border border-white/10">
                <div className="text-2xl font-bold text-primary-glow">50K+</div>
                <div className="text-sm text-white/70">Happy Customers</div>
              </div>
              <div className="glass px-6 py-4 rounded-xl border border-white/10">
                <div className="text-2xl font-bold text-primary-glow">1000+</div>
                <div className="text-sm text-white/70">Products</div>
              </div>
              <div className="glass px-6 py-4 rounded-xl border border-white/10">
                <div className="text-2xl font-bold text-primary-glow">24/7</div>
                <div className="text-sm text-white/70">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;