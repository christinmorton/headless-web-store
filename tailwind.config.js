/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xxs: "325px",
      xs: "480px",
      sm: "540px",
      md: "768px",
      lg: "1020px",
      xl: "1440px",
    },
  },
  plugins: [require("tailwindcss-animate"), require('tailwind-scrollbar-hide')],
};
