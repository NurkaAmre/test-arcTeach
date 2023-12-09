/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Define custom background colors and gradients
      backgroundImage: {
        'radial-body':
          'radial-gradient(at 0% 100%, hsla(253, 16%, 7%, 1) 0, transparent 50%), radial-gradient(at 50% 0%, hsla(225, 39%, 25%, 1) 0, transparent 50%)',
        'radial-footer':
          'radial-gradient(at 0% 100%, hsla(253, 16%, 7%, 1) 0, transparent 50%), radial-gradient(at 50% 0%, hsla(225, 39%, 25%, 1) 0, transparent 50%)',
        'radial-header':
          'radial-gradient(at 0% 0%, hsla(253, 16%, 7%, 1) 0, transparent 50%), radial-gradient(at 50% 100%, hsla(225, 39%, 25%, 1) 0, transparent 50%)',
      },
      backgroundColor: {
        // Define custom background colors
        'custom-body': '#0F0E13',
        'custom-footer': '#0F0E13',
        'custom-header': '#0F0E13',
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
