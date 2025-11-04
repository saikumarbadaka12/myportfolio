/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // <-- enable class-based dark mode
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'glass-1': 'rgba(255,255,255,0.06)',
      },
      boxShadow: {
        'neon': '0 10px 30px rgba(99,102,241,0.15)',
      }
    },
  },
  plugins: [],
}
