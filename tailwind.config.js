/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-pattern': "url('./Assets/cssPattern.png')", 
      },
      colors: {
        'react-blue': '#61DAFB',
        'js-yellow': '#F7DF1E',
      },
    },
  },
  plugins: [],
}

