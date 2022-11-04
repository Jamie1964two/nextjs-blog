/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Quicksand", "ui-sans-serif", "system-ui"],
    },
    extend: {
      keyframes: {
        ascend: {
          "0%": { opacity: "0", top: "50%" },
          "100%": { opacity: "100%" },
        },
      },
      animation: {
        ascend: "ascend 1.5s ease-in-out",
      },
      colors: {
        myblue: "#77b1d1",
      },
    },
  },
  plugins: [],
};
