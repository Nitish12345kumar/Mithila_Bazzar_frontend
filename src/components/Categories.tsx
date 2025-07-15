import { 
  Smartphone, 
  Monitor, 
  Watch, 
  Headphones, 
  Gamepad2, 
  Laptop,
  ArrowRight
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Categories = () => {
  const categories = [
    { name: "Phones", icon: Smartphone },
    { name: "Laptops", icon: Laptop },
    { name: "Smartwatch", icon: Watch },
    { name: "Headphones", icon: Headphones },
    { name: "Gaming", icon: Gamepad2 },
    { name: "Tablets", icon: Monitor }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold text-foreground">
            Browse by Category
          </h2>
          <Button 
            variant="outline" 
            className="hidden md:flex items-center gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className="group cursor-pointer border border-border hover:border-primary hover:shadow-lg transition-all duration-300 bg-white"
            >
              <CardContent className="p-6 text-center">
                {/* Icon Container */}
                <div className="mb-4">
                  <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-secondary group-hover:bg-primary/10 transition-colors">
                    <category.icon 
                      className="h-8 w-8 text-foreground group-hover:text-primary transition-colors" 
                    />
                  </div>
                </div>
                
                {/* Category Name */}
                <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="flex justify-center mt-8 md:hidden">
          <Button 
            variant="outline" 
            className="flex items-center gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            View All Categories
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Categories;