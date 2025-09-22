'use client';

// Define the props the component will accept
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  // Create an array of page numbers to render, e.g., [1, 2, 3, 4, 5]
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex justify-center items-center gap-x-[12px] mt-8 h-[68.56px] w-full bg-pagination-bg rounded-md">
      {pageNumbers.map((page) => {
        const isActive = page === currentPage;
        
        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`flex items-center justify-center font-proxima text-[18px] transition-colors
              ${
                isActive
                  ? 'bg-active-blue text-white w-[69.41px] h-full' // Active button styles
                  : 'text-heading-text w-[69.41px] h-full hover:bg-gray-200' // Inactive button styles
              }
            `}
          >
            {page}
          </button>
        );
      })}
    </nav>
  );
};

export default Pagination;