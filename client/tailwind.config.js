/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rfabb: ["Ready For Anything", "sans-serif"],
        ttr: ["TT Ricks", "sans-serif"],
        ralltez: ["Ralltez", "sans-serif"],
        vetosans: ["Veto Sans", "sans-serif"],
      },
      screens: {
        1280: "1280px",
        1300: "1300px",
        1400: "1400px",
        1500: "1500px",
        1600: "1600px",
        1980: "1980px",
        2100: "2100px",
        2600: "2600px",
        xs: "500px",
        xxs: "400px",
        xxxs: "300px",
        260: "260px",
        380: "380px",
        270: "270px",
      },
    },
  },
  plugins: [],
};
