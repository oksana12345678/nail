/** @type {import('tailwindcss/plugin').Plugin} */
import plugin from 'tailwindcss/plugin';

const tailwindConfig = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        main_bg: '#fcf8ef',
        main_button: '#1D1D1E',
        secondary_accent: '#F6E6D6',
      },
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
        display: ['Playfair Display', 'sans-serif'],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities(
        {
          '.base-font-normal': {
            '@apply text-base font-normal': {},
          },
        },
        {
          respectPrefix: false,
          respectImportant: false,
        }
      );
    }),
  ],
};

export default tailwindConfig;
