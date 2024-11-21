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
        secondaryColor: "#061423",
        hoverColor: "#C89578",
      },
      screens: {
        'xl': '1280px',
        'lg': '1024px',
        'md': '768px',
        'sm': '640px',
        'vsm': '460px',
        'tiny': '360px',
      },
    },
  },
  plugins: [],
}