/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        sm: "15.568px",
        md: "19px",
      },
      colors: {
        green: "#31A36C",
        black: "#1E1E1E",
        darkBlack: "#1D1D1D",
        white: "#FFFFFF",
        lightWhite: "#D9D9D9",
        orange: "#FA4616",
      },
    },
  },
  plugins: [],
};
