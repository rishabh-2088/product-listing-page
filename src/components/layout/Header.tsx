import Image from 'next/image';
import { User, Search, Heart } from 'lucide-react';
import Navbar from './Navbar';   

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-8 py-4 grid grid-cols-3 items-center">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <Image src="/navbar-logo.svg" alt="E-Comm logo" width={51} height={44} />
          <span className="font-poppins font-bold text-2xl text-heading-text">
            E-Comm
          </span>
        </div>

        {/* Center: Navbar */}
        <Navbar />   

        {/* Right: Icons */}
        <div className="flex justify-end items-center gap-3">
          <div className="hidden md:flex items-center space-x-4 mr-4">
            <button className="text-gray-600 hover:text-blue-600 transition-colors">
              <Search size={24} />
            </button>
            <button className="text-gray-600 hover:text-blue-600 transition-colors">
              <Heart size={24} />
            </button>
          </div>
          <a href="#" className="flex items-center gap-3 group">
            <Image src="/cart-icon.svg" alt="Cart" width={31} height={34} />
            <div className="hidden sm:block font-proxima text-[20px] text-gray-700">
              <span className="group-hover:text-blue-600 transition-colors">Items</span>
              <span className="opacity-50 ml-2 group-hover:text-blue-600 transition-colors">$0.00</span>
            </div>
          </a>
          <button className="text-gray-600 hover:text-blue-600 transition-colors ml-2 sm:ml-4">
            <User size={24} />
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;
