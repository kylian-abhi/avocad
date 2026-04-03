import React from 'react';
import { Instagram, Twitter, Facebook, Youtube, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-black border-t border-white/10 py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <h2 className="text-3xl font-black tracking-tighter">AVOCAD<span className="text-brand-accent">.</span></h2>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs">
            Pushing the boundaries of performance and design. Join the future of movement.
          </p>
          <div className="flex space-x-4">
            <a 
              href="https://www.instagram.com/kylian_abhi/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-brand-accent cursor-pointer transition-colors"
            >
              <Instagram size={20} />
            </a>
            <Twitter size={20} className="hover:text-brand-accent cursor-pointer transition-colors" />
            <Facebook size={20} className="hover:text-brand-accent cursor-pointer transition-colors" />
            <Youtube size={20} className="hover:text-brand-accent cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Links 1 */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.3em] mb-8">Shop</h4>
          <ul className="space-y-4 text-sm text-white/50">
            <li className="hover:text-brand-white cursor-pointer transition-colors">New Arrivals</li>
            <li className="hover:text-brand-white cursor-pointer transition-colors">Men's Collection</li>
            <li className="hover:text-brand-white cursor-pointer transition-colors">Women's Collection</li>
            <li className="hover:text-brand-white cursor-pointer transition-colors">Limited Editions</li>
          </ul>
        </div>

        {/* Links 2 */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.3em] mb-8">Support</h4>
          <ul className="space-y-4 text-sm text-white/50">
            <li className="hover:text-brand-white cursor-pointer transition-colors">Shipping & Returns</li>
            <li className="hover:text-brand-white cursor-pointer transition-colors">Size Guide</li>
            <li className="hover:text-brand-white cursor-pointer transition-colors">Contact Us</li>
            <li className="hover:text-brand-white cursor-pointer transition-colors">FAQ</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.3em] mb-8">Newsletter</h4>
          <p className="text-sm text-white/50 mb-6">Get early access to drops and exclusive content.</p>
          <div className="flex border-b border-white/30 pb-2 group focus-within:border-brand-accent transition-colors">
            <input
              type="email"
              placeholder="YOUR EMAIL"
              className="bg-transparent border-none outline-none text-xs w-full tracking-widest uppercase"
            />
            <button className="group-hover:text-brand-accent transition-colors">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] uppercase tracking-[0.2em] text-white/30">
        <p>© 2026 AVOCAD FOOTWEAR. ALL RIGHTS RESERVED.</p>
        <div className="flex space-x-8">
          <span className="hover:text-brand-white cursor-pointer">Privacy Policy</span>
          <span className="hover:text-brand-white cursor-pointer">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
