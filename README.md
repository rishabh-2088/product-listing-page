Product Listing Page

A responsive Product Listing Page built with Next.js + TypeScript and styled using Tailwind CSS.
This project demonstrates a modern e-commerce product grid with filtering, pagination, and responsive design.

🚀 Tech Stack

Framework: Next.js (React + TypeScript)

Styling: Tailwind CSS

State Management: React hooks / local state

Icons: Lucide / Heroicons

Accessibility:

Keyboard navigation

Focus styles

Alt text for images

ARIA attributes for collapsible sections

Performance:

Responsive images

Lazy-loading where needed

📂 Project Structure
src/
 ├─ app/
 │   ├─ layout.tsx        # Root layout with sidebar + navbar
 │   ├─ page.tsx          # Main product listing page
 │   └─ globals.css       # Tailwind global styles
 │
 ├─ components/
 │   └─ layout/
 │        ├─ Navbar.tsx
 │        ├─ Sidebar.tsx
 │        ├─ Header.tsx
 │        ├─ Footer.tsx
 │        ├─ FilterSection.tsx
 │        ├─ ProductCard.tsx
 │        ├─ ProductToolbar.tsx
 │        ├─ Pagination.tsx
 │        └─ TopBanner.tsx
 │
 └─ data/
      └─ mockProducts.ts   # Mock product dataset

📱 Responsiveness

Desktop (≥1024px) → Sidebar is always visible on the left

Tablet (≥768px and <1024px) → Sidebar collapses into drawer, grid adjusts

Mobile (<768px) → Sidebar is hidden, can be toggled via hamburger button

Tested at:

320px (mobile small)

768px (tablet)

1024px (desktop)

⚙️ Getting Started

Clone the repo:

git clone https://github.com/rishabh-2088/product-listing-page.git
cd product-listing-page


Install dependencies:

npm install


Run development server:

npm run dev


Open http://localhost:3000
 in your browser.

🧪 Features

Product cards with responsive grid layout

Sidebar with filter options

Pagination component

Toolbar for sorting/filter toggles

Accessible, keyboard-friendly navigation

Mobile drawer sidebar with smooth animation

📦 Build for Production
npm run build
npm run start

📝 Notes

Replace mockProducts.ts with a real backend API when ready.

Extend ProductCard.tsx to show price, ratings, and actions.

Adjust Tailwind config (tailwind.config.js) if adding custom themes.



Developed as part of a Product Listing Page assignment using modern React + Next.js best practices.