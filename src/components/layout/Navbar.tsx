// src/components/layout/Navbar.tsx
const Navbar = () => {
  const navLinks = ["HOME", "BAG", "SNEAKERS", "BELT", "CONTACT"];

  return (
    <nav className="bg-white font-poppins">
      <div className="container mx-auto flex justify-center items-center py-2">
        <div className="flex gap-8">
          {navLinks.map((link) => (
            <a key={link} href="#" className="text-[20px] uppercase tracking-wider font-medium text-gray-500 hover:text-blue-600">
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;