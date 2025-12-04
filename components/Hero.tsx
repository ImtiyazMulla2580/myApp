import React from 'react';
import { View } from '../types';

interface HeroProps {
  onShopNow: () => void;
  onPlanParty: () => void;
}

const Hero: React.FC<HeroProps> = ({ onShopNow, onPlanParty }) => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Make every birthday</span>{' '}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                  unforgettable
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                From magical balloons to perfect party favors, we have everything you need to celebrate in style. 
                Use our AI Planner to organize the perfect bash!
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <button
                    onClick={onShopNow}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 md:py-4 md:text-lg transition-all transform hover:scale-105"
                  >
                    Shop Supplies
                  </button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <button
                    onClick={onPlanParty}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-pink-700 bg-pink-100 hover:bg-pink-200 md:py-4 md:text-lg transition-all"
                  >
                    AI Party Planner 🤖
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-pink-50">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full opacity-90"
          src="https://images.unsplash.com/photo-1530103862676-de3c9a59af38?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Birthday party celebration"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/30 to-transparent lg:via-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;