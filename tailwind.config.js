/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hindi: ['"Yatra One"', '"Rozha One"', 'cursive', 'sans-serif'],
        sans: ['Poppins', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        maroon: {
          900: '#1a0105',
          800: '#2b030b',
          700: '#420814',
          600: '#5e0d1d',
        },
        gold: {
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
        }
      }
    },
  },
  plugins: [],
}

