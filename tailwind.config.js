/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx", "*"],
  theme: {
    fontFamily: {
      Arial: ["Arial", "Helvetica Neue", "Helvetica", "sans-serif"],
      Roboto: ["Roboto", "sans-serif"],
      "Roboto-Condensed": ["Roboto Condensed", "sans-serif"],
      "Roboto-slab": ["Roboto Slab", "serif"],
    },
    extend: {
      colors: {
        gray: "#333",
        green: "#00b874",
        blue: "#0050b8",
        "light-gray": "#00000057",
      },
    },
  },
  plugins: [],
};
