/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brick: {
          50: '#faf6f3',
          100: '#f3e8e0',
          200: '#e6cfc0',
          300: '#d4a98c',
          400: '#c4845e',
          500: '#b56a45',
          600: '#a85438',
          700: '#8c4330',
          800: '#73392c',
          900: '#5f3128',
          950: '#331714',
        },
        clay: '#c4a484',
        charcoal: '#1c1917',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
