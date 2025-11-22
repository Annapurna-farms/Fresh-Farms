import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-farm-green overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-40"
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Fresh vegetables farm"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-farm-green/90 to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Fresh from our farm<br />
          <span className="text-farm-light">to your table</span>
        </h1>
        <p className="mt-6 text-xl text-gray-100 max-w-3xl">
          Experience the taste of nature with our hand-picked, organic vegetables and fruits. 
          Grown with care, delivered with love.
        </p>
        <div className="mt-10 max-w-sm sm:flex sm:max-w-none">
          <div className="space-y-4 sm:space-y-0 sm:inline-grid sm:grid-cols-2 sm:gap-5">
            <a
              href="#products"
              className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-farm-green bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-all transform hover:scale-105"
            >
              Shop Now
            </a>
            <a
              href="#about"
              className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-farm-green/50 hover:bg-farm-green/70 backdrop-blur-sm md:py-4 md:text-lg md:px-10 transition-all"
            >
              Our Story <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
