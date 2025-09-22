/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
         poppins: ['var(--font-poppins)'],
        proxima: ['var(--font-proxima)'],
      },
     colors: {
        'footer-bg': '#BCDDFE',
        'heading-text': '#22262A',
        'link-text': '#262626',
        'copyright-text': '#C1C8CE',
        'facebook-blue': '#385C8E',
        'twitter-blue': '#03A9F4', 
        'logo-icon-bg': '#40BFFF',
        'active-blue': '#33A0FF',
        'sidebar-box-bg': '#F6F7F8',
        'divider': '#FAFAFB',
        'inactive-bg': '#F1F3F4', // For the inactive view toggle
        'inactive-icon': '#C1C8CE', // For the list icon
        'select-border': '#F1F3F4',
        'pagination-bg': '#F7F7F9',

        // Product Card Colors
        'hot-badge-bg': '#FF4858',
        'product-title': '#223263',
        'star-filled': '#FFC600',
        'star-empty': '#C1C8CE',
        'price-original': '#9098B1',
        'price-discounted': '#40BFFF',
        'discount-percent-text': '#FB7181',
     },
    },
  },
  plugins: [],
};