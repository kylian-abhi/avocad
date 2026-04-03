import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCollection from './components/FeaturedCollection';
import ProductShowcase from './components/ProductShowcase';
import VideoHighlight from './components/VideoHighlight';
import CartDrawer from './components/CartDrawer';
import ProductDetail from './components/ProductDetail';
import Footer from './components/Footer';
import { Product } from './types';

interface CartItem extends Product {
  quantity: number;
}

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setIsDetailOpen(true);
  };

  const [view, setView] = useState<'home' | 'shop'>('home');

  return (
    <div className="relative min-h-screen bg-brand-black overflow-x-hidden">
      {/* Futuristic Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-mesh" />
        <div className="absolute inset-0 bg-noise" />
        
        {/* Animated Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-accent/5 rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-accent-red/5 rounded-full blur-[120px] animate-blob" style={{ animationDelay: '-5s' }} />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-brand-accent/5 rounded-full blur-[100px] animate-blob" style={{ animationDelay: '-10s' }} />
      </div>

      <div className="relative z-10">
        <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-brand-black flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-black tracking-tighter mb-8"
            >
              AVOCAD<span className="text-brand-accent">.</span>
            </motion.div>
            <div className="w-48 h-[2px] bg-white/10 relative overflow-hidden">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                className="absolute top-0 left-0 w-full h-full bg-brand-accent"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navbar onCartOpen={() => setIsCartOpen(true)} cartCount={cartItems.reduce((s, i) => s + i.quantity, 0)} />
          
          <main>
            {view === 'home' ? (
              <>
                <Hero />
                <FeaturedCollection id="men" onAddToCart={handleAddToCart} onViewDetails={handleViewDetails} />
                <div id="women">
                  <ProductShowcase />
                </div>
                <VideoHighlight />
                
                {/* Secondary Collection Section */}
                <section id="collections" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
                  <div className="text-center mb-16">
                    <p className="text-brand-accent text-xs font-bold uppercase tracking-[0.4em] mb-4">Performance First</p>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">The Future is Here</h2>
                  </div>
                  <FeaturedCollection onAddToCart={handleAddToCart} onViewDetails={handleViewDetails} />
                  <div className="flex justify-center mt-12">
                    <button 
                      onClick={() => {
                        setView('shop');
                        window.scrollTo(0, 0);
                      }}
                      className="px-12 py-4 border border-brand-accent text-brand-accent font-black uppercase tracking-[0.3em] text-xs hover:bg-brand-accent hover:text-brand-black transition-all duration-500"
                    >
                      View All Products
                    </button>
                  </div>
                </section>
              </>
            ) : (
              <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center mb-16 space-y-6 md:space-y-0">
                  <h2 className="text-5xl font-black tracking-tighter uppercase">Shop All</h2>
                  <div className="flex space-x-4">
                    <button className="px-6 py-2 border border-white/10 text-[10px] font-bold uppercase tracking-widest hover:border-brand-accent transition-colors">Filter</button>
                    <button className="px-6 py-2 border border-white/10 text-[10px] font-bold uppercase tracking-widest hover:border-brand-accent transition-colors">Sort By</button>
                    <button 
                      onClick={() => setView('home')}
                      className="px-6 py-2 bg-white/5 text-[10px] font-bold uppercase tracking-widest hover:text-brand-accent transition-colors"
                    >
                      Back Home
                    </button>
                  </div>
                </div>
                <FeaturedCollection onAddToCart={handleAddToCart} onViewDetails={handleViewDetails} />
                <div className="mt-24">
                  <FeaturedCollection onAddToCart={handleAddToCart} onViewDetails={handleViewDetails} />
                </div>
              </div>
            )}
          </main>

          <Footer />

          <CartDrawer
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            items={cartItems}
            onUpdateQuantity={handleUpdateQuantity}
            onRemove={handleRemoveFromCart}
          />

          <ProductDetail
            product={selectedProduct}
            isOpen={isDetailOpen}
            onClose={() => setIsDetailOpen(false)}
            onAddToCart={handleAddToCart}
          />
        </motion.div>
      )}
      </div>
    </div>
  );
};

export default App;
