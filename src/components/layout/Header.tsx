import Image from 'next/image';
import { ShoppingCart, User, Search, Heart } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white">
      <div className="container mx-auto px-8 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image src="/navbar-logo.svg" alt="E-Comm logo" width={51} height={44} />
          <span className="font-poppins font-bold text-2xl">E-Comm</span>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-3 group">
            <Image src="/cart-icon.svg" alt="Cart" width={31} height={34} />
            <span>Items</span>
            <span className="opacity-50 ml-2">$0.00</span>
          </a>
        </div>
      </div>
    </header>
  );
};
export default Header;