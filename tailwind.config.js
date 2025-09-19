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
        'divider': '#FAFAFB',
     },
    },
  },
  plugins: [],
};