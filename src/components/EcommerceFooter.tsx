import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  Shield,
  Truck,
  RefreshCw,
  Heart,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const EcommerceFooter = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-bg opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
      
      <div className="relative">
        {/* Features Section */}
        <div className="border-t border-white/10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="glass p-6 rounded-2xl border border-white/10 group-hover:border-primary/30 transition-all duration-500 group-hover:shadow-glass">
                  <Truck className="h-8 w-8 text-primary mx-auto mb-4 group-hover:animate-bounce" />
                  <h3 className="font-semibold text-foreground mb-2">Free Shipping</h3>
                  <p className="text-sm text-muted-foreground">On orders over ₹500</p>
                </div>
              </div>
              
              <div className="text-center group">
                <div className="glass p-6 rounded-2xl border border-white/10 group-hover:border-primary/30 transition-all duration-500 group-hover:shadow-glass">
                  <RefreshCw className="h-8 w-8 text-green-400 mx-auto mb-4 group-hover:animate-spin" />
                  <h3 className="font-semibold text-foreground mb-2">Easy Returns</h3>
                  <p className="text-sm text-muted-foreground">30-day return policy</p>
                </div>
              </div>
              
              <div className="text-center group">
                <div className="glass p-6 rounded-2xl border border-white/10 group-hover:border-primary/30 transition-all duration-500 group-hover:shadow-glass">
                  <Shield className="h-8 w-8 text-blue-400 mx-auto mb-4 group-hover:animate-pulse" />
                  <h3 className="font-semibold text-foreground mb-2">Secure Payment</h3>
                  <p className="text-sm text-muted-foreground">100% secure checkout</p>
                </div>
              </div>
              
              <div className="text-center group">
                <div className="glass p-6 rounded-2xl border border-white/10 group-hover:border-primary/30 transition-all duration-500 group-hover:shadow-glass">
                  <Phone className="h-8 w-8 text-yellow-400 mx-auto mb-4 group-hover:animate-bounce" />
                  <h3 className="font-semibold text-foreground mb-2">24/7 Support</h3>
                  <p className="text-sm text-muted-foreground">Always here to help</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="border-t border-white/10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Company Info */}
              <div className="space-y-6">
                <div className="flex items-center space-x-2">
                  <Sparkles className="h-8 w-8 text-primary animate-glow-pulse" />
                  <h3 className="text-2xl font-black bg-gradient-primary bg-clip-text text-transparent">
                    Mithila Bazar
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Your one-stop destination for premium quality products at unbeatable prices. 
                  Experience the future of online shopping.
                </p>
                
                {/* Social Links */}
                <div className="flex space-x-4">
                  {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      size="sm"
                      className="glass hover:bg-white/10 p-3 rounded-full group"
                    >
                      <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </Button>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
                <ul className="space-y-3">
                  {['About Us', 'Contact', 'FAQ', 'Shipping Info', 'Returns', 'Privacy Policy'].map((link) => (
                    <li key={link}>
                      <a 
                        href="#" 
                        className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Categories */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-foreground">Categories</h4>
                <ul className="space-y-3">
                  {['Electronics', 'Fashion', 'Home & Garden', 'Sports', 'Books', 'Toys & Games'].map((category) => (
                    <li key={category}>
                      <a 
                        href="#" 
                        className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                      >
                        {category}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-foreground">Stay Updated</h4>
                <p className="text-muted-foreground">
                  Subscribe to get special offers, exclusive deals, and first access to new products.
                </p>
                
                <div className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      placeholder="Enter your email"
                      className="pl-10 glass border-white/20 focus:border-primary/50 h-12"
                    />
                  </div>
                  <Button className="w-full bg-gradient-primary hover:bg-gradient-secondary border-0 shadow-neon hover:shadow-glow transition-all duration-300">
                    Subscribe Now
                  </Button>
                </div>

                {/* Contact Info */}
                <div className="space-y-3 pt-4">
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>123 Commerce St, City, Country</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4 text-primary" />
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <Mail className="h-4 w-4 text-primary" />
                    <span>hello@mithilabazar.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              
              {/* Copyright */}
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>© 2024 Mithila Bazar. Made with</span>
                <Heart className="h-4 w-4 text-destructive animate-pulse" />
                <span>in India</span>
              </div>

              {/* Payment Methods */}
              <div className="flex items-center space-x-4">
                <span className="text-sm text-muted-foreground">We Accept:</span>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="glass p-2 rounded border border-white/10">
                      <CreditCard className="h-4 w-4 text-muted-foreground" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EcommerceFooter;