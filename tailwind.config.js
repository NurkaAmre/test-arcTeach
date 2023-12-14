/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'radial-body':
          'radial-gradient(at 0% 100%, hsla(253, 16%, 7%, 1) 0, transparent 50%), radial-gradient(at 50% 0%, hsla(225, 39%, 25%, 1) 0, transparent 50%)',
        'radial-footer':
          'radial-gradient(at 0% 100%, hsla(253, 16%, 7%, 1) 0, transparent 50%), radial-gradient(at 50% 0%, hsla(225, 39%, 25%, 1) 0, transparent 50%)',
        'radial-header':
          'radial-gradient(at 0% 0%, hsla(253, 16%, 7%, 1) 0, transparent 50%), radial-gradient(at 50% 100%, hsla(225, 39%, 25%, 1) 0, transparent 50%)',
      },
      backgroundColor: {
        'custom-body': '#0F0E13',
        'custom-footer': '#0F0E13',
        'custom-header': '#0F0E13',
      },
      fontFamily: {
        logo: ['Dhurjati', 'sans'],
        sans: ['Montserrat Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ['hover', 'focus'],
      backgroundColor: ['hover', 'focus'],
    },
  },

  plugins: [],
};
