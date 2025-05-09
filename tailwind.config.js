/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
            'helvetica': ['Helvetica', 'sans-serif', 'Roboto'],
            'futura': ["Futura", "sans-serif"],
          },
    },
  },
  plugins: [],
}