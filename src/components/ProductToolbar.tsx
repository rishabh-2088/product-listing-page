import { ChevronDown } from 'lucide-react';

// Custom SVG Grid Icon 
const GridIcon = () => (
  <svg width="25" height="22" viewBox="0 0 25 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.587006" y="0.577271" width="4.91735" height="4.31545" />
    <rect x="10.417" y="0.577271" width="4.91735" height="4.31545" />
    <rect x="20.247" y="0.577271" width="4.91735" height="4.31545" />
    <rect x="0.587006" y="8.86182" width="4.91735" height="4.31545" />
    <rect x="10.417" y="8.86182" width="4.91735" height="4.31545" />
    <rect x="20.247" y="8.86182" width="4.91735" height="4.31545" />
    <rect x="0.587006" y="17.1464" width="4.91735" height="4.31545" />
    <rect x="10.417" y="17.1464" width="4.91735" height="4.31545" />
    <rect x="20.247" y="17.1464" width="4.91735" height="4.31545" />
  </svg>
);

// Custom SVG List Icon 
const ListIcon = () => (
  <svg width="23" height="18" viewBox="0 0 23 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect y="0.361816" width="22.1281" height="2.15773" />
    <rect y="7.91016" width="22.1281" height="2.15773" />
    <rect y="15.4585" width="22.1281" height="2.15773" />
  </svg>
);

// Define the props the component will accept
interface ProductToolbarProps {
  totalItems: number;
  sortOption: { by: string; order: string };
  onSortChange: (newSortOption: { by: string; order: string }) => void;
  itemsPerPage: number;
  onItemsPerPageChange: (newSize: number) => void;
}

const ProductToolbar = ({ 
  totalItems, 
  sortOption, 
  onSortChange, 
  itemsPerPage, 
  onItemsPerPageChange 
}: ProductToolbarProps) => {

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const [by, order] = e.target.value.split('-');
    onSortChange({ by, order });
  };

  return (
   
    <div className="flex flex-wrap items-center justify-between bg-sidebar-box-bg p-4 rounded-lg gap-4">
      
      <div className="flex items-center flex-wrap gap-x-8 gap-y-4">
        <p className="font-proxima text-heading-text text-[16px]">{totalItems} Items</p>
        
        <div className="flex items-center gap-x-4">
          <label htmlFor="sort-by" className="font-proxima text-heading-text text-[16px]">Sort By</label>
          <div className="relative">
            <select 
              id="sort-by" 
              value={`${sortOption.by}-${sortOption.order}`}
              onChange={handleSortChange}
              className="appearance-none bg-white border-2 border-select-border rounded-md py-2 pl-4 pr-10 text-[16px] font-proxima text-heading-text h-[41px] w-[142.6px] focus:outline-none focus:ring-2 focus:ring-active-blue"
            >
              <option value="name-asc">Name</option>
              <option value="price-asc">Price (Low to High)</option>
              <option value="price-desc">Price (High to Low)</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-heading-text pointer-events-none" />
          </div>
        </div>
        
        <div className="flex items-center gap-x-4">
          <label htmlFor="show" className="font-proxima text-heading-text text-[16px]">Show</label>
          <div className="relative">
            <select 
              id="show" 
              value={itemsPerPage}
              onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
              className="appearance-none bg-white border-2 border-select-border rounded-md py-2 pl-4 pr-10 text-[16px] font-proxima text-heading-text h-[41px] w-[142.6px] focus:outline-none focus:ring-2 focus:ring-active-blue"
            >
              <option value={12}>12</option>
              <option value={24}>24</option>
              <option value={36}>36</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-heading-text pointer-events-none" />
          </div>
        </div>
      </div>
      
      
      <div className="flex">
        <button className="w-[61.47px] h-[48px] flex items-center justify-center text-active-blue">
          <GridIcon />
        </button>
        <button className="w-[61.47px] h-[48px] flex items-center justify-center bg-inactive-bg text-inactive-icon">
          <ListIcon />
        </button>
      </div>
    </div>
  );
};

export default ProductToolbar;