import React from 'react';
import { View } from '../types';

interface HeaderProps {
  currentView: View;
  setCurrentView: (view: View) => void;
  cartCount: number;
  toggleCart: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, setCurrentView, cartCount, toggleCart }) => {
  const navItems = [
    { label: 'Home', value: View.HOME },
    { label: 'Shop', value: View.SHOP },
    { label: 'AI Planner', value: View.PLANNER },
    { label: 'Reminders', value: View.REMINDERS },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => setCurrentView(View.HOME)}
          >
            <div className="w-8 h-8 bg-gradient-to-tr from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-2">
              B
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900">Birthday<span className="text-pink-600">Bash</span></span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => setCurrentView(item.value)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  currentView === item.value
                    ? 'text-pink-600 border-b-2 border-pink-600'
                    : 'text-gray-500 hover:text-pink-500'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Cart Icon */}
          <div className="flex items-center">
            <button 
              onClick={toggleCart}
              className="relative p-2 text-gray-500 hover:text-pink-600 focus:outline-none transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-pink-600 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            
            {/* Mobile Menu Button (simplified, just toggles planner for now or could expand) */}
            <div className="md:hidden ml-4">
                 {/* Mobile menu logic could go here, omitting for brevity to focus on core features */}
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Nav Bar (Simple Bottom Bar style for mobile feel) */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 flex justify-around py-3 z-50 pb-safe">
         {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => setCurrentView(item.value)}
              className={`flex flex-col items-center text-xs ${
                currentView === item.value ? 'text-pink-600' : 'text-gray-400'
              }`}
            >
              <span className="font-semibold">{item.label}</span>
            </button>
          ))}
      </div>
    </header>
  );
};

export default Header;