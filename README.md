Product Listing Page

A responsive Product Listing Page built with Next.js + TypeScript and styled using Tailwind CSS.
This project demonstrates a modern e-commerce product grid with filtering, pagination, and responsive design.




Product-Listing_Page
<img width="603" height="831" alt="Screenshot 2025-09-22 205232" src="https://github.com/user-attachments/assets/4a037e7b-c2d0-4109-af26-3e72530e2c9e" />

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

src/
├─ app/
│  ├─ favicon.ico              # App favicon
│  ├─ globals.css              # Tailwind global styles
│  ├─ layout.tsx               # Root layout with sidebar + navbar
│  └─ page.tsx                 # Main product listing page
│
├─ components/
│  └─ layout/
│     ├─ Navbar.tsx            # Top navigation bar
│     ├─ Sidebar.tsx           # Sidebar filter/navigation
│     ├─ Header.tsx            # Page header
│     ├─ Footer.tsx            # Footer section
│     ├─ FilterSection.tsx     # Product filters (categories, price, etc.)
│     ├─ ProductCard.tsx       # Individual product card
│     ├─ ProductToolbar.tsx    # Toolbar with sort/view options
│     ├─ Pagination.tsx        # Pagination component
│     └─ TopBanner.tsx         # Promotional / hero banner
│
├─ data/
│  └─ mockProducts.ts          # Mock product dataset
│
├─ .eslintrc.json              # ESLint config
├─ .gitignore                  # Git ignore file
├─ next-env.d.ts               # Next.js TypeScript types
├─ next.config.mjs             # Next.js configuration
├─ package.json                # Project dependencies & scripts
├─ package-lock.json           # Dependency lockfile
└─ postcss.config.js           # PostCSS configuration


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
