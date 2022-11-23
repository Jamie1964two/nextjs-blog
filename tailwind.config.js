/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      keyframes: {
        ascend: {
          "0%": { opacity: "0", top: "100%" },
          "100%": { opacity: "100%" },
        },
        fadein1: {
          "0%": { opacity: "100%" },
          "23%": { opacity: "100%" },
          "27%": { opacity: "0%" },
          "98%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
        fadein2: {
          "0%": { opacity: "0" },
          "23%": { opacity: "0" },
          "27%": { opacity: "100%" },
          "48%": { opacity: "100%" },
          "52%": { opacity: "0" },
          "100%": { opacity: "0" },
        },
        fadein3: {
          "0%": { opacity: "0" },
          "48%": { opacity: "0" },
          "52%": { opacity: "100%" },
          "73%": { opacity: "100%" },
          "77%": { opacity: "0" },
          "100%": { opacity: "0" },
        },
        fadein4: {
          "0%": { opacity: "0" },
          "73%": { opacity: "0" },
          "77%": { opacity: "100%" },
          "98%": { opacity: "100%" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        ascend: "ascend 1.2s ease-in-out",
        fadein1: "fadein1 20s ease-in-out infinite",
        fadein2: "fadein2 20s ease-in-out infinite",
        fadein3: "fadein3 20s ease-in-out infinite",
        fadein4: "fadein4 20s ease-in-out infinite",

        fadeout: "fadeout 0.8s ease-in-out infinite ",
      },
      colors: {
        myblue: "#77b1d1",
      },
      screens: {
        tall: { raw: "(max-height: 420px)" },
      },
      fontFamily: {
        sans: ["Quicksand", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
