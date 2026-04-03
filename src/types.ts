export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  hoverImage: string;
  details: string[];
  sizes: string[];
  isNew?: boolean;
}

export type NavItem = 'Home' | 'Men' | 'Women' | 'Collections' | 'Contact';
