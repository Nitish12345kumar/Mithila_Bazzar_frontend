import { 
  Smartphone, 
  Monitor, 
  Watch, 
  Camera, 
  Headphones, 
  Gamepad2, 
  Laptop, 
  Speaker, 
  Tablet 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Categories = () => {
  const categories = [
    { name: "Phones", icon: Smartphone, color: "text-blue-500" },
    { name: "Computers", icon: Monitor, color: "text-purple-500" },
    { name: "SmartWatch", icon: Watch, color: "text-green-500" },
    { name: "Camera", icon: Camera, color: "text-red-500" },
    { name: "Headphones", icon: Headphones, color: "text-yellow-500" },
    { name: "Gaming", icon: Gamepad2, color: "text-indigo-500" },
    { name: "Laptops", icon: Laptop, color: "text-pink-500" },
    { name: "Speakers", icon: Speaker, color: "text-teal-500" },
    { name: "Tablets", icon: Tablet, color: "text-orange-500" }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Browse By Category
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-4">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className="group cursor-pointer hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-card border-border/50"
            >
              <CardContent className="p-6 text-center">
                <category.icon 
                  className={`h-8 w-8 mx-auto mb-3 ${category.color} group-hover:scale-110 transition-transform`} 
                />
                <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
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