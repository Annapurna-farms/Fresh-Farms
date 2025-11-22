import React from 'react';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, image, category }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-farm-green uppercase tracking-wider">
          {category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{name}</h3>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-farm-green">{price}</span>
          <button className="p-2 rounded-full bg-farm-light/20 text-farm-green hover:bg-farm-green hover:text-white transition-colors">
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
