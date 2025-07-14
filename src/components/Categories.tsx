import { 
  Smartphone, 
  Monitor, 
  Watch, 
  Camera, 
  Headphones, 
  Gamepad2, 
  Laptop, 
  Speaker, 
  Tablet,
  Sparkles
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Categories = () => {
  const categories = [
    { name: "Phones", icon: Smartphone, gradient: "from-blue-400 to-blue-600" },
    { name: "Computers", icon: Monitor, gradient: "from-purple-400 to-purple-600" },
    { name: "SmartWatch", icon: Watch, gradient: "from-green-400 to-green-600" },
    { name: "Camera", icon: Camera, gradient: "from-red-400 to-red-600" },
    { name: "Headphones", icon: Headphones, gradient: "from-yellow-400 to-yellow-600" },
    { name: "Gaming", icon: Gamepad2, gradient: "from-indigo-400 to-indigo-600" },
    { name: "Laptops", icon: Laptop, gradient: "from-pink-400 to-pink-600" },
    { name: "Speakers", icon: Speaker, gradient: "from-teal-400 to-teal-600" },
    { name: "Tablets", icon: Tablet, gradient: "from-orange-400 to-orange-600" }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-primary rounded-full opacity-20 blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-secondary rounded-full opacity-15 blur-3xl animate-glow-pulse" style={{ animationDelay: '3s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-6">
            <Sparkles className="h-8 w-8 text-primary animate-glow-pulse" />
            <div className="glass px-4 py-2 rounded-full border border-white/10">
              <span className="text-primary font-semibold text-sm tracking-wider">CATEGORIES</span>
            </div>
            <Sparkles className="h-8 w-8 text-primary animate-glow-pulse" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl font-black text-foreground mb-4">
            Browse By <span className="bg-gradient-primary bg-clip-text text-transparent">Category</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover amazing products across all categories with unbeatable prices
          </p>
          
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className="group cursor-pointer glass border-white/10 hover:border-primary/30 transition-all duration-500 hover:-translate-y-3 hover:shadow-glass relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              
              <CardContent className="p-8 text-center relative z-10">
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} rounded-full opacity-20 group-hover:opacity-40 transition-opacity blur-sm`} />
                  <div className="relative glass p-4 rounded-full border border-white/20 group-hover:border-primary/40 transition-all duration-300 mx-auto w-fit">
                    <category.icon 
                      className="h-8 w-8 text-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-300" 
                    />
                  </div>
                </div>
                
                {/* Category Name */}
                <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors duration-300 tracking-wide">
                  {category.name}
                </h3>

                {/* Hover Indicator */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-primary group-hover:w-8 transition-all duration-300" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block glass px-6 py-3 rounded-full border border-white/10">
            <span className="text-muted-foreground">
              Explore <span className="text-primary font-semibold">1000+</span> products across all categories
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;