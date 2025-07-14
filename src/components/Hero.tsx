import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-background">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <Sparkles className="w-8 h-8 text-primary animate-float" style={{ animationDelay: '0s' }} />
      </div>
      <div className="absolute top-32 right-20 opacity-20">
        <Zap className="w-6 h-6 text-primary animate-float" style={{ animationDelay: '1s' }} />
      </div>
      <div className="absolute bottom-32 left-20 opacity-20">
        <Sparkles className="w-10 h-10 text-primary animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
            Welcome to the Future
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience the next generation of web applications with beautiful design, 
            smooth animations, and cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="glass" size="lg" className="text-lg px-8 py-6">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-background/30 pointer-events-none" />
    </section>
  );
};

export default Hero;