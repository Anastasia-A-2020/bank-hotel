/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        star: ["Helvetica", "Amiri", "Arial", "sans-serif"],
      },
      screens: {
        lg: { max: "1440px" },
        md: { max: "767px" },
        sm: { min: "240px", max: "639px" },
      },
      colors: {
        primary: "#e5e5e5",
        secondary: "#3F5148",
      },
    },
  },
  plugins: [],
};
