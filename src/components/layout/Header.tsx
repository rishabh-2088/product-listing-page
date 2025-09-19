// src/components/layout/Header.tsx
import Image from 'next/image';
import { ShoppingCart, User, Search, Heart } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white">
      <div className="container mx-auto px-8 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <Image src="/navbar-logo.svg" alt="E-Comm logo" width={51} height={44} />
          <span className="font-poppins font-bold text-2xl text-heading-text">
            E-Comm
          </span>
        </div>

        {/* Cart / Action Icons Section */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center space-x-4 mr-4">
            <button className="text-gray-600 hover:text-blue-600 transition-colors"><Search size={24} /></button>
            <button className="text-gray-600 hover:text-blue-600 transition-colors"><Heart size={24} /></button>
          </div>
          <a href="#" className="flex items-center gap-3 group">
            <Image src="/cart-icon.svg" alt="Cart" width={31} height={34} />
            <div className="font-proxima text-[20px] text-gray-700">
              <span className="group-hover:text-blue-600 transition-colors">Items</span>
              <span className="opacity-50 ml-2 group-hover:text-blue-600 transition-colors">$0.00</span>
            </div>
          </a>
          <button className="text-gray-600 hover:text-blue-600 transition-colors ml-4"><User size={24} /></button>
        </div>
      </div>
    </header>
  );
};

export default Header;