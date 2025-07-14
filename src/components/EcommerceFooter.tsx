import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const EcommerceFooter = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Mithila Bazar</h3>
            <p className="text-secondary-foreground/80 mb-6">
              Your trusted online marketplace for quality products at amazing prices. 
              Get 10% off your first order with exclusive deals.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm">exclusive@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">+88015-88888-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">6c/2, Kalikapur, DH 1515, India</span>
              </div>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-secondary-foreground/80 hover:text-white transition-colors">My Account</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-white transition-colors">Login / Register</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-white transition-colors">Cart</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-white transition-colors">Wishlist</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-white transition-colors">Shop</a></li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Account</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-secondary-foreground/80 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-white transition-colors">Terms Of Use</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Link</h3>
            <p className="text-secondary-foreground/80 mb-4">
              Subscribe to get 10% off your first order
            </p>
            <div className="flex space-x-2 mb-6">
              <Input 
                placeholder="Enter your email" 
                className="bg-secondary-foreground/10 border-secondary-foreground/20 text-white placeholder:text-secondary-foreground/60"
              />
              <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                →
              </Button>
            </div>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-secondary-foreground/80 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-secondary-foreground/80 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-secondary-foreground/80 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-secondary-foreground/80 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-secondary-foreground/60">
            © Copyright Rimel 2022. All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default EcommerceFooter;