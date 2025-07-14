import { Search, ShoppingCart, Heart, User, Menu, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative">
              <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-primary animate-glow-pulse" />
              <h1 className="text-3xl font-black bg-gradient-primary bg-clip-text text-transparent">
                Mithila Bazar
              </h1>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5 group-focus-within:text-primary transition-colors" />
              <Input
                placeholder="Search for amazing products..."
                className="pl-12 pr-6 h-14 glass border-white/20 focus:border-primary/50 text-lg placeholder:text-muted-foreground/70 transition-all duration-300"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-primary opacity-0 group-focus-within:opacity-10 transition-opacity -z-10" />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="lg" className="hidden md:flex glass hover:bg-white/10 text-foreground">
              <User className="h-5 w-5 mr-2" />
              Login
            </Button>
            <Button variant="ghost" size="lg" className="relative glass hover:bg-white/10 group">
              <Heart className="h-6 w-6 group-hover:text-destructive transition-colors" />
              <span className="absolute -top-2 -right-2 bg-gradient-primary text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold shadow-neon">
                2
              </span>
            </Button>
            <Button variant="ghost" size="lg" className="relative glass hover:bg-white/10 group">
              <ShoppingCart className="h-6 w-6 group-hover:text-primary transition-colors" />
              <span className="absolute -top-2 -right-2 bg-gradient-primary text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold shadow-neon">
                3
              </span>
            </Button>
            <Button variant="ghost" size="lg" className="md:hidden glass hover:bg-white/10">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;