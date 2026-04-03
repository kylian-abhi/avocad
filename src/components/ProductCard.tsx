import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Eye } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onViewDetails }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative flex flex-col"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-white/5 cursor-pointer" onClick={() => onViewDetails(product)}>
        {product.isNew && (
          <div className="absolute top-4 left-4 z-10 bg-brand-accent text-brand-black text-[10px] font-bold px-2 py-1 uppercase tracking-widest">
            New Arrival
          </div>
        )}
        
        {/* Main Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        
        {/* Hover Image */}
        <img
          src={product.hoverImage}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          referrerPolicy="no-referrer"
        />

        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-brand-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            className="w-12 h-12 bg-brand-white text-brand-black rounded-full flex items-center justify-center hover:bg-brand-accent transition-colors"
          >
            <ShoppingCart size={20} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(product);
            }}
            className="w-12 h-12 bg-brand-white text-brand-black rounded-full flex items-center justify-center hover:bg-brand-accent transition-colors"
          >
            <Eye size={20} />
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="mt-6 flex justify-between items-start">
        <div>
          <h3 className="text-sm font-bold tracking-tight uppercase group-hover:text-brand-accent transition-colors">
            {product.name}
          </h3>
          <p className="text-xs text-white/50 uppercase tracking-widest mt-1">
            {product.category}
          </p>
        </div>
        <p className="text-sm font-bold tracking-tighter">
          ${product.price}
        </p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
