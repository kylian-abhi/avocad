import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'AETHER V1 - NEON',
    price: 240,
    category: 'Running',
    description: 'Engineered for speed, designed for the future. The V1 Neon features our proprietary kinetic foam technology.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000',
    hoverImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1000',
    details: ['Kinetic Foam Midsole', 'Breathable Mesh Upper', 'Carbon Fiber Plate'],
    sizes: ['US 7', 'US 8', 'US 9', 'US 10', 'US 11', 'US 12'],
    isNew: true
  },
  {
    id: '2',
    name: 'AETHER V1 - STEALTH',
    price: 220,
    category: 'Lifestyle',
    description: 'The ultimate urban companion. Minimalist aesthetics meet maximum comfort.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000',
    hoverImage: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&q=80&w=1000',
    details: ['Premium Leather Accents', 'Memory Foam Insole', 'Anti-slip Rubber Outsole'],
    sizes: ['US 8', 'US 9', 'US 10', 'US 11'],
    isNew: false
  },
  {
    id: '3',
    name: 'AETHER V1 - ELECTRIC',
    price: 260,
    category: 'Performance',
    description: 'Push your limits with the Electric series. High-visibility accents for low-light performance.',
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=1000',
    hoverImage: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&q=80&w=1000',
    details: ['Reflective Elements', 'Dynamic Support System', 'Ultra-lightweight Construction'],
    sizes: ['US 7', 'US 8', 'US 9', 'US 10', 'US 11', 'US 12'],
    isNew: true
  },
  {
    id: '4',
    name: 'AETHER V1 - PURE',
    price: 210,
    category: 'Minimal',
    description: 'Stripped back to the essentials. Pure performance in a clean, white silhouette.',
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=1000',
    hoverImage: 'https://images.unsplash.com/photo-1512374382149-4332c6c021f1?auto=format&fit=crop&q=80&w=1000',
    details: ['Recycled Materials', 'Seamless Upper', 'Flexible Sole'],
    sizes: ['US 6', 'US 7', 'US 8', 'US 9', 'US 10'],
    isNew: false
  }
];
