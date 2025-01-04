/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '1280': '1280px',
        '1400': '1400px',
        '1500':'1500px',
        '1600': '1600px',
        '1980': '1980px',
        '2100': '2100px',
        
      },
      fontSize: {
        'font-legacy': '24px', 
        'extra-large': '3rem', 
      },
    },
  },
  plugins: [],
}

