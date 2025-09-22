const Navbar = () => {
  const navLinks = ["HOME", "BAG", "SNEAKERS", "BELT", "CONTACT"];
  return (
    <nav className="flex justify-center gap-8 font-poppins">
      {navLinks.map((link) => (
        <a
          key={link}
          href="#"
          className="text-[16px] uppercase tracking-wider font-medium text-gray-600 hover:text-blue-600"
        >
          {link}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
