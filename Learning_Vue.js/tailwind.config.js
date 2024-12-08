/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'white': '#FDF7F4',
      'pale-green': '#8EB486',
      'sepia': '#997C70',
      'bark': '#685752',
    },
    fontFamily: {
      sans: ['Shippori Antique B1', 'Poppins', 'sans-serif'],
    },
    gridTemplateColumns: {
      '70/30': '70% 28%',
    },
    extend: {},
  },
  plugins: [],
}

