import defaultTheme from 'tailwindcss/defaultTheme'
import { customColors } from './src/customs/color'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Bật chế độ dark mode bằng class (thay vì media query)
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}', // Quét tất cả file Vue và JS
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'sans' là key cho các font chữ không chân (mặc định)
        sans: [
          'Be Vietnam Pro', // font mong muốn
          ...defaultTheme.fontFamily.sans, // Giữ lại các font dự phòng mặc định nếu như font chính không load được
        ],
        // một số font riêng
        heading: ['Roboto Mono', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        ...customColors, // color custom
      },
    },
  },
  plugins: [],
}
