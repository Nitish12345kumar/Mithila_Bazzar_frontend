import { Search, ShoppingCart, Heart, User, Menu, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Sparkles className="w-8 h-8 text-primary" />
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Mithila Bazar
            </div>
          </div>

          {/* Search Bar - Hidden on small screens */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Search for products..."
                className="pl-10 pr-4 py-2 w-full bg-secondary/50 border-border focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
              />
            </div>
          </div>

          {/* Navigation Menu - Hidden on small screens */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Categories</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Wishlist */}
            <Button variant="ghost" size="icon" className="relative hover:bg-secondary transition-all duration-300">
              <Heart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold text-[10px]">
                3
              </span>
            </Button>

            {/* User Login */}
            <Button variant="ghost" size="icon" className="relative hover:bg-secondary transition-all duration-300">
              <User className="h-5 w-5" />
            </Button>

            {/* Shopping Cart */}
            <Button variant="ghost" size="icon" className="relative hover:bg-secondary transition-all duration-300">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold text-[10px]">
                2
              </span>
            </Button>

            {/* Mobile Menu */}
            <Button variant="ghost" size="icon" className="md:hidden hover:bg-secondary transition-all duration-300">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;