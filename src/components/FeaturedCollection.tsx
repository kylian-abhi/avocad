import React from 'react';
import { motion } from 'motion/react';
import ProductCard from './ProductCard';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface FeaturedCollectionProps {
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
  id?: string;
}

const FeaturedCollection: React.FC<FeaturedCollectionProps> = ({ onAddToCart, onViewDetails, id }) => {
  return (
    <section id={id} className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
        <div>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-brand-accent text-xs font-bold uppercase tracking-[0.4em] mb-4"
          >
            Curated Selection
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tighter leading-none"
          >
            FEATURED<br />COLLECTION
          </motion.h2>
        </div>
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-sm font-bold uppercase tracking-widest border-b-2 border-brand-accent pb-2 hover:text-brand-accent transition-colors"
        >
          View All Products
        </motion.button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
        {PRODUCTS.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            onViewDetails={onViewDetails}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedCollection;
