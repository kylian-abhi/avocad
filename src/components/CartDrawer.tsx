import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, Plus, Minus } from 'lucide-react';
import { Product } from '../types';

interface CartItem extends Product {
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onUpdateQuantity, onRemove }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-brand-black z-[110] flex flex-col shadow-2xl border-l border-white/10"
          >
            {/* Header */}
            <div className="p-6 flex items-center justify-between border-b border-white/10">
              <h2 className="text-xl font-black tracking-tighter uppercase">Your Cart</h2>
              <button onClick={onClose} className="hover:text-brand-accent transition-colors">
                <X size={24} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8 hide-scrollbar">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <p className="text-white/50 uppercase tracking-widest text-sm mb-6">Your cart is empty</p>
                  <button
                    onClick={onClose}
                    className="px-8 py-3 bg-brand-white text-brand-black font-bold uppercase tracking-widest text-xs"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex space-x-4">
                    <div className="w-24 h-32 bg-white/5 overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="text-xs font-bold uppercase tracking-tight">{item.name}</h3>
                          <button onClick={() => onRemove(item.id)} className="text-white/30 hover:text-brand-accent-red transition-colors">
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <p className="text-xs text-white/50 uppercase tracking-widest mt-1">${item.price}</p>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center border border-white/20">
                          <button
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="p-1 hover:text-brand-accent transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-xs font-bold">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="p-1 hover:text-brand-accent transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-white/10 bg-white/5">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs uppercase tracking-widest text-white/50">Subtotal</span>
                  <span className="text-xl font-black tracking-tighter">${total}</span>
                </div>
                <button className="w-full py-4 bg-brand-accent text-brand-black font-black uppercase tracking-[0.2em] hover:bg-brand-white transition-all duration-300">
                  Checkout Now
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
