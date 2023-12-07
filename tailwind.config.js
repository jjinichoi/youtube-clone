/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '700px',
      md: '1082px',
      lg: '1408px',
      xl: '1733px',
    },
    extend: {},
  },
  plugins: [],
};
