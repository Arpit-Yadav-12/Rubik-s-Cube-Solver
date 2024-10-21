/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text_alt: '#fef5e7',
        text: '#1B1212',
      }
    },
  },
  plugins: [],
}

