/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#FFFFFF",
        secondaryColor: "#000000",
      },
      screens: {
        'xl': '1280px',
        'lg': '1024px',
        'md': '868px',
        'sm': '640px',
        'vsm': '460px',
        'tiny': '360px',
      },
    },
  },
  plugins: [],
}