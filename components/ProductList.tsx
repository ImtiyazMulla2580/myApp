import React, { useState } from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../constants';

interface ProductListProps {
  addToCart: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ addToCart }) => {
  const [filter, setFilter] = useState<string>('all');

  const categories = ['all', 'decorations', 'tableware', 'favors', 'candles'];

  const filteredProducts = filter === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4 md:mb-0">Featured Supplies</h2>
        
        <div className="flex space-x-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium capitalize whitespace-nowrap transition-colors ${
                filter === cat 
                  ? 'bg-pink-600 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="group relative bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 group-hover:opacity-90 h-64">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex-1 p-6 flex flex-col justify-between">
              <div>
                <p className="text-sm text-pink-500 font-medium capitalize mb-1">{product.category}</p>
                <h3 className="text-lg font-bold text-gray-900">
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-500 line-clamp-2">{product.description}</p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
                <button
                  onClick={(e) => {
                    e.preventDefault(); // Prevent navigating if wrapped in a link
                    e.stopPropagation(); // Stop bubbling
                    addToCart(product);
                  }}
                  className="z-10 bg-pink-50 hover:bg-pink-100 text-pink-600 p-2 rounded-full transition-colors"
                  aria-label="Add to cart"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;