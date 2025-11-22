import { Sun, CloudRain, Sprout } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-farm-green/10 rounded-3xl transform rotate-3"></div>
            <img
              className="relative rounded-3xl shadow-lg w-full object-cover h-96 lg:h-auto"
              src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Farmer in field"
            />
          </div>
          
          <div className="mt-12 lg:mt-0">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">Rooted in Nature</h2>
            <p className="text-lg text-gray-600 mb-8">
              Founded in 2020, Fresh Farms started with a simple mission: to bring the freshest, chemical-free produce directly from our soil to your kitchen. We believe in sustainable farming practices that honor the earth and nourish our community.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-farm-light/20 rounded-full mb-4">
                  <Sun className="h-8 w-8 text-farm-green" />
                </div>
                <h3 className="font-semibold text-gray-900">Sun Kissed</h3>
                <p className="text-sm text-gray-500 mt-2">Naturally ripened under the Indian sun</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-farm-light/20 rounded-full mb-4">
                  <CloudRain className="h-8 w-8 text-farm-green" />
                </div>
                <h3 className="font-semibold text-gray-900">Pure Water</h3>
                <p className="text-sm text-gray-500 mt-2">Irrigated with clean, natural water sources</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-farm-light/20 rounded-full mb-4">
                  <Sprout className="h-8 w-8 text-farm-green" />
                </div>
                <h3 className="font-semibold text-gray-900">Organic</h3>
                <p className="text-sm text-gray-500 mt-2">100% chemical-free farming</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
