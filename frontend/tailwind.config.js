/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2D5A27',
        secondary: '#1E3D1A',
        'input-bg': '#F8F8F8',
      },
    },
  },
  plugins: [],
}
