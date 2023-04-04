/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      "xxs": "0.5rem",
      "xs": "0.75rem",
      "sm": "0.875rem",
      "base": "1rem",
      "lg": "0.875rem",
      "xl": "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
    },
    extend: {},
  },
  plugins: [],
}
