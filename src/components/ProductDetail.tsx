import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, ChevronRight, Star } from 'lucide-react';
import { Product } from '../types';
import { cn } from '../lib/utils';

interface ProductDetailProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, isOpen, onClose, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'description' | 'details' | 'reviews'>('description');

  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-brand-black/95 backdrop-blur-xl" onClick={onClose} />

          {/* Content Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 40 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative w-full max-w-6xl bg-brand-black border border-white/10 overflow-hidden flex flex-col md:flex-row h-full max-h-[90vh] shadow-[0_0_100px_rgba(0,229,255,0.1)]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 text-white/50 hover:text-brand-accent transition-colors"
            >
              <X size={32} />
            </button>

            {/* Image Gallery */}
            <div className="w-full md:w-1/2 h-1/2 md:h-full bg-white/5 relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-8 left-8 flex space-x-4">
                {[product.image, product.hoverImage].map((img, i) => (
                  <div key={i} className="w-16 h-20 border border-white/20 overflow-hidden cursor-pointer hover:border-brand-accent transition-colors">
                    <img src={img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
            </div>

            {/* Info Section */}
            <div className="w-full md:w-1/2 p-8 md:p-16 overflow-y-auto flex flex-col hide-scrollbar">
              <div className="mb-12">
                <p className="text-brand-accent text-xs font-bold uppercase tracking-[0.4em] mb-4">
                  {product.category}
                </p>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 leading-none">
                  {product.name}
                </h2>
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-2xl font-black tracking-tighter">${product.price}</span>
                  <div className="flex items-center text-brand-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                    <span className="text-[10px] text-white/50 ml-2 uppercase tracking-widest">(48 Reviews)</span>
                  </div>
                </div>
              </div>

              {/* Sizes */}
              <div className="mb-12">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-xs font-bold uppercase tracking-widest">Select Size</h4>
                  <button className="text-[10px] uppercase tracking-widest text-white/50 hover:text-brand-accent transition-colors">Size Guide</button>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        "py-3 text-xs font-bold uppercase tracking-widest border transition-all duration-300",
                        selectedSize === size
                          ? "bg-brand-white text-brand-black border-brand-white"
                          : "border-white/10 hover:border-brand-accent"
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tabs */}
              <div className="mb-12">
                <div className="flex space-x-8 border-b border-white/10 mb-6">
                  {(['description', 'details', 'reviews'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={cn(
                        "pb-4 text-[10px] font-bold uppercase tracking-[0.2em] transition-all relative",
                        activeTab === tab ? "text-brand-white" : "text-white/30 hover:text-white/60"
                      )}
                    >
                      {tab}
                      {activeTab === tab && (
                        <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-accent" />
                      )}
                    </button>
                  ))}
                </div>
                <div className="text-sm text-white/50 leading-relaxed">
                  {activeTab === 'description' && product.description}
                  {activeTab === 'details' && (
                    <ul className="space-y-2">
                      {product.details.map((detail, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <ChevronRight size={12} className="text-brand-accent" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {activeTab === 'reviews' && "No reviews available yet. Be the first to share your experience."}
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={() => onAddToCart(product)}
                className="mt-auto w-full py-5 bg-brand-accent text-brand-black font-black uppercase tracking-[0.3em] flex items-center justify-center space-x-4 hover:bg-brand-white transition-all duration-500 group"
              >
                <ShoppingBag size={20} />
                <span>Add to Cart</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductDetail;
