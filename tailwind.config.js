/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gray: {
          gray70: "#4a5568",
        },
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        gray70: "#4a5568",
      }),
    },
  },

  plugins: [],
};
