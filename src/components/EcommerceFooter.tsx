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
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Features Section */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 group-hover:border-blue-500 transition-all duration-300">
                <Truck className="h-8 w-8 text-blue-400 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Free Shipping</h3>
                <p className="text-sm text-gray-300">On orders over ₹500</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 group-hover:border-green-500 transition-all duration-300">
                <RefreshCw className="h-8 w-8 text-green-400 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Easy Returns</h3>
                <p className="text-sm text-gray-300">30-day return policy</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 group-hover:border-blue-500 transition-all duration-300">
                <Shield className="h-8 w-8 text-blue-400 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Secure Payment</h3>
                <p className="text-sm text-gray-300">100% secure checkout</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 group-hover:border-yellow-500 transition-all duration-300">
                <Phone className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">24/7 Support</h3>
                <p className="text-sm text-gray-300">Always here to help</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="border-t border-gray-700 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Sparkles className="h-8 w-8 text-blue-400" />
                <h3 className="text-2xl font-bold text-white">
                  Mithila Bazar
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
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
                    className="hover:bg-gray-800 p-3 rounded-full group"
                  >
                    <Icon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <ul className="space-y-3">
                {['About Us', 'Contact', 'FAQ', 'Shipping Info', 'Returns', 'Privacy Policy'].map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Categories</h4>
              <ul className="space-y-3">
                {['Electronics', 'Fashion', 'Home & Garden', 'Sports', 'Books', 'Toys & Games'].map((category) => (
                  <li key={category}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Stay Updated</h4>
              <p className="text-gray-300">
                Subscribe to get special offers, exclusive deals, and first access to new products.
              </p>
              
              <div className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Enter your email"
                    className="pl-10 bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Subscribe Now
                </Button>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 pt-4">
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <MapPin className="h-4 w-4 text-blue-400" />
                  <span>123 Commerce St, City, Country</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <Phone className="h-4 w-4 text-blue-400" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <Mail className="h-4 w-4 text-blue-400" />
                  <span>hello@mithilabazar.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>© 2024 Mithila Bazar. Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>in India</span>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400">We Accept:</span>
              <div className="flex space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-gray-800 p-2 rounded border border-gray-600">
                    <CreditCard className="h-4 w-4 text-gray-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EcommerceFooter;