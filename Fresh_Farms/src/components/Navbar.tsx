import { useState } from 'react';
import { ShoppingCart, Menu, X, Leaf } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Leaf className="h-8 w-8 text-farm-green" />
            <span className="ml-2 text-2xl font-bold text-farm-green">Fresh Farms</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-farm-green font-medium transition-colors">Home</a>
            <a href="#products" className="text-gray-700 hover:text-farm-green font-medium transition-colors">Shop</a>
            <a href="#about" className="text-gray-700 hover:text-farm-green font-medium transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-farm-green font-medium transition-colors">Contact</a>
            <button className="p-2 rounded-full hover:bg-gray-100 relative">
              <ShoppingCart className="h-6 w-6 text-gray-700" />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-farm-accent rounded-full">0</span>
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-farm-green focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-farm-green hover:bg-gray-50">Home</a>
            <a href="#products" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-farm-green hover:bg-gray-50">Shop</a>
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-farm-green hover:bg-gray-50">About</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-farm-green hover:bg-gray-50">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
