/** @type {import('tailwindcss').Config} */
export default {
  // Bật chế độ dark mode bằng class (thay vì media query)
  darkMode: 'class',

  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}', // Quét tất cả file Vue và JS
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
