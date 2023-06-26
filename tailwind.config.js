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
        "proof-border": "rgba(255, 255, 255, 0.38)",
        "light-white": "rgba(255, 255, 255, 0.09)",
      },
      backgroundImage: {
        "waterfall-img": "url('/waterfall-bg.jpg')",
        "waves-img": "url('/waves-bg.jpg')",
      },
      boxShadow: {
        "inner-green":
          "inset -1px 0 0 0 rgba(0, 0, 0, 0.12), 0 1px 0 0 #00b874",
        "inner-black": "inset -1px 0 0 0 rgba(0, 0, 0, 0.12), 0 1px 0 0 #000",
        "inner-gray":
          "inset -1px 0 0 0 rgba(0, 0, 0, 0.12), 0 -1px 0 0 transparent",
        "gray-bottom":
          "0 1px 0 0 rgba(0, 0, 0, 0.12), inset -1px 0 0 0 rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};
