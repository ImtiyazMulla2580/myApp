import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import PartyPlannerChat from './components/PartyPlannerChat';
import ReminderSignup from './components/ReminderSignup';
import CartDrawer from './components/CartDrawer';
import { View, Product, CartItem } from './types';

function App() {
  const [currentView, setCurrentView] = useState<View>(View.HOME);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(1, item.quantity + delta) };
      }
      return item;
    }));
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const renderContent = () => {
    switch (currentView) {
      case View.HOME:
        return (
          <>
            <Hero 
              onShopNow={() => setCurrentView(View.SHOP)} 
              onPlanParty={() => setCurrentView(View.PLANNER)} 
            />
            {/* Show a preview of products on home page */}
            <div className="bg-gray-50">
              <div className="max-w-7xl mx-auto py-12 px-4 text-center">
                 <h2 className="text-2xl font-bold text-gray-900">Why shop with us?</h2>
                 <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6 bg-white rounded-lg shadow-sm">
                      <div className="text-4xl mb-4">🎈</div>
                      <h3 className="font-bold mb-2">Huge Selection</h3>
                      <p className="text-gray-600">From balloons to banners, we have it all.</p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-sm">
                      <div className="text-4xl mb-4">🤖</div>
                      <h3 className="font-bold mb-2">AI Planner</h3>
                      <p className="text-gray-600">Get free party planning advice instantly.</p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-sm">
                      <div className="text-4xl mb-4">🚚</div>
                      <h3 className="font-bold mb-2">Fast Delivery</h3>
                      <p className="text-gray-600">Same-day local delivery for party emergencies!</p>
                    </div>
                 </div>
              </div>
            </div>
          </>
        );
      case View.SHOP:
        return <ProductList addToCart={addToCart} />;
      case View.PLANNER:
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-extrabold text-gray-900">AI Party Planner</h2>
              <p className="mt-2 text-gray-600">Chat with BashBot to get ideas, checklists, and product recommendations.</p>
            </div>
            <PartyPlannerChat />
          </div>
        );
      case View.REMINDERS:
        return <ReminderSignup />;
      default:
        return <Hero onShopNow={() => setCurrentView(View.SHOP)} onPlanParty={() => setCurrentView(View.PLANNER)} />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-pink-100 selection:text-pink-900">
      <Header 
        currentView={currentView} 
        setCurrentView={setCurrentView} 
        cartCount={cartCount}
        toggleCart={() => setIsCartOpen(true)}
      />
      
      <main className="pb-20 md:pb-0">
        {renderContent()}
      </main>

      {currentView === View.HOME && (
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">BirthdayBash</h3>
                <p className="text-gray-400">Making every celebration memorable since 2024.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li className="hover:text-pink-400 cursor-pointer" onClick={() => setCurrentView(View.SHOP)}>Shop</li>
                  <li className="hover:text-pink-400 cursor-pointer" onClick={() => setCurrentView(View.PLANNER)}>Party Planner</li>
                  <li className="hover:text-pink-400 cursor-pointer" onClick={() => setCurrentView(View.REMINDERS)}>Reminders</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact</h4>
                <p className="text-gray-400">123 Party Lane, Celebration City</p>
                <p className="text-gray-400">support@birthdaybash.com</p>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
              &copy; 2024 Birthday Bash. All rights reserved.
            </div>
          </div>
        </footer>
      )}

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />
    </div>
  );
}

export default App;