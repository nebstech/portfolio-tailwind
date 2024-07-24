/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      olors: {
        customGray: '#e0e0e0',
        customDark: '#1f2937',
      },
    },
  },
  plugins: [],
}
