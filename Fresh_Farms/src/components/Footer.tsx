import { Leaf, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-farm-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Leaf className="h-8 w-8 text-farm-light" />
              <span className="ml-2 text-2xl font-bold">Fresh Farms</span>
            </div>
            <p className="text-farm-light max-w-md">
              Bringing the goodness of nature to your doorstep. We are committed to sustainable farming and healthy living.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-farm-light hover:text-white transition-colors">Home</a></li>
              <li><a href="#products" className="text-farm-light hover:text-white transition-colors">Shop</a></li>
              <li><a href="#about" className="text-farm-light hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-farm-light hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-farm-light hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-farm-light hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-farm-light hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-farm-light/20 mt-12 pt-8 text-center text-farm-light">
          <p>&copy; {new Date().getFullYear()} Fresh Farms. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
