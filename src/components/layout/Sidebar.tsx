'use client'; 

import { useState, useEffect } from 'react';
import FilterSection from './FilterSection';
import ReactSlider from 'react-slider';


type Filters = {
  brands: string[];
  priceRange: [number, number];
  colors: string[];
};

interface SidebarProps {
  filters: Filters;
  onFilterChange: (filterType: keyof Filters, value: string | string[] | [number, number]) => void;
  availableBrands: string[];
  availableColors: string[];
}

const Sidebar = ({ filters, onFilterChange, availableBrands, availableColors }: SidebarProps) => {
  const MIN_PRICE = 0;
  const MAX_PRICE = 1000;

  // Local state for the price slider to provide immediate visual feedback
  const [localPriceRange, setLocalPriceRange] = useState(filters.priceRange);

  // This effect syncs the local state if the filters are ever reset from the parent
  useEffect(() => {
    setLocalPriceRange(filters.priceRange);
  }, [filters.priceRange]);

  const handleBrandChange = (brand: string) => {
    const newBrands = filters.brands.includes(brand)
      ? filters.brands.filter(b => b !== brand)
      : [...filters.brands, brand];
    onFilterChange('brands', newBrands);
  };
  
  const handleColorChange = (color: string) => {
    const newColors = filters.colors.includes(color)
      ? filters.colors.filter(c => c !== color)
      : [...filters.colors, color];
    onFilterChange('colors', newColors);
  };

  return (
    <aside className="w-full font-proxima flex flex-col h-full">
      <div className="flex-grow space-y-6">
        <FilterSection title="BRAND" isOpenDefault={true}>
          <ul className="space-y-4 text-[18px] text-link-text">
            {availableBrands.map(brand => (
              <li key={brand}>
                <button 
                  onClick={() => handleBrandChange(brand)}
                  className={`flex justify-between w-full hover:text-active-blue ${filters.brands.includes(brand) ? 'font-bold text-active-blue' : ''}`}
                >
                  <span>{brand}</span>
                </button>
              </li>
            ))}
          </ul>
        </FilterSection>

        <FilterSection title="PRICES" isOpenDefault={true}>
          {/* This text now displays the real-time value from the local state */}
          <div className="text-[18px] text-link-text flex justify-between">
            <span>Range:</span>
            <span className="font-normal text-heading-text">${localPriceRange[0]} - ${localPriceRange[1]}</span>
          </div>
          <ReactSlider
            className="horizontal-slider mt-6"
            thumbClassName="thumb"
            trackClassName="track"
            value={localPriceRange} // The slider's position is controlled by the local state
            onChange={(value) => setLocalPriceRange(value as [number, number])} // Updates the visual display in real-time
            onAfterChange={(value) => onFilterChange('priceRange', value as [number, number])} // Updates the actual product filter on release
            min={MIN_PRICE}
            max={MAX_PRICE}
            ariaLabel={['Lower price handle', 'Upper price handle']}
            pearling
            minDistance={50}
          />
        </FilterSection>

        <FilterSection title="COLOR" isOpenDefault={true}>
          <div className="grid grid-cols-6 gap-3">
            {availableColors.map(color => (
              <button 
                key={color}
                onClick={() => handleColorChange(color)}
                className={`w-8 h-8 rounded-full transition-transform hover:scale-110 ${filters.colors.includes(color) ? 'ring-2 ring-offset-2 ring-active-blue' : ''}`} 
                style={{ backgroundColor: color }}
                aria-label={`Filter by ${color}`}
              />
            ))}
          </div>
        </FilterSection>
      </div>

      <div className="text-center p-6 bg-sidebar-box-bg rounded-lg mt-6 shrink-0">
        <button className="font-poppins font-medium text-[20px] text-link-text">MORE</button>
      </div>
    </aside>
  );
};

export default Sidebar;
