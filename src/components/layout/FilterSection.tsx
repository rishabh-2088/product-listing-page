'use client';

import { useState, ReactNode } from 'react';

// Props for the FilterSection component
interface FilterSectionProps {
  title: string;
  children: ReactNode;
  isOpenDefault?: boolean; 
}

const FilterSection = ({ title, children, isOpenDefault = false }: FilterSectionProps) => {
  // State to manage the open/closed status of the section
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  // Function to toggle the state when the header is clicked
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-6 bg-sidebar-box-bg rounded-lg">
      {/* The header of the section, which acts as a button */}
      <button
        onClick={toggleOpen}
        className="w-full flex justify-between items-center"
        aria-expanded={isOpen}
      >
        <h3 className="font-poppins font-medium text-[20px] text-heading-text">{title}</h3>
        {/* Chevron icon that rotates based on the 'isOpen' state */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      {/* The content of the section, which is shown or hidden based on 'isOpen' state */}
      {isOpen && (
        <div className="mt-6">
          {children}
        </div>
      )}
    </div>
  );
};

export default FilterSection;
