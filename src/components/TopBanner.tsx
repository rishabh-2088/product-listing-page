const TopBanner = () => {
  return (
    
    <div className="relative bg-active-blue  h-[350px] flex items-center overflow-hidden mb-8">
      
      
      <div className="z-10 text-white w-[390.45px] pl-[61px]">
      
        <h1 className="font-poppins font-medium text-3xl leading-none">
          Adidas Men Running
          <br />
          Sneakers
        </h1>
        
        
        <p className="font-proxima mt-4 text-base opacity-90">
          Performance and design. Taken right to the edge.
        </p>
        
        {/* Shop Now Link */}
        
        <a href="#" className="inline-block mt-6 group">
        
          <span className="font-poppins font-semibold text-[12px] leading-none uppercase tracking-wider">
            SHOP NOW
          </span>
        
          <div className="w-[41.79px] h-[2.01px] bg-white mt-[2px] transition-transform duration-300 group-hover:scale-x-125"></div>
        </a>
      </div>

      
      <img
        src="blue-shoe.png"
        alt="Adidas Running Sneaker"
        className="absolute top-[104.55px] left-[602.8px] w-[442.76px] h-[221.56px]"
      />

    </div>
  );
};

export default TopBanner;

