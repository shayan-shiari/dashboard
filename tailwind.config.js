/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        body_dark: "rgba(14,35,56,1)",
        body_light: "#f3f4f6",
      },
    },
  },
  plugins: [],
};
