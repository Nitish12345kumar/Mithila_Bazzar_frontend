import { 
  Smartphone, 
  Monitor, 
  Watch, 
  Headphones, 
  Gamepad2, 
  Laptop
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-8">
            Browse by Category
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className="group cursor-pointer border border-border hover:shadow-lg transition-all duration-300 bg-white"
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
                <h3 className="text-sm font-medium text-foreground">
                  {category.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;