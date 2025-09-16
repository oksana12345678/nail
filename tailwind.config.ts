/** @type {import('tailwindcss/plugin').Plugin} */
import plugin from 'tailwindcss/plugin';

const tailwindConfig = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        dots: "url('/icons/dots.svg')",
        circle: "url('/icons/circle.svg')",
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        main_bg: '#fcf8ef',
        main_button: '#1D1D1E',
        secondary_accent: '#F6E6D6',
        accent_discount: '#FBBBFF',
        skin_accent: '#D8B192',
        secondary_white_text: '#f3f3f3;',
      },
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
        display: ['Playfair Display', 'sans-serif'],
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 500ms ease-in-out',
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

          '.hover-main:hover': {
            backgroundColor: '#D8B192',
            boxShadow: '0px 0px 30px 6px #D8B192',
            borderRadius: '14px',
            color: '#1D1D1E',
            textShadow: '2px 2px 10px #fff',
          },

          '.transition-custom': {
            transitionProperty:
              'background-color, border-color, color, fill, stroke, box-shadow, transform, border-radius, text-shadow',
            transitionDelay: '100ms',
            transitionDuration: '500ms',
            transitionTimingFunction: 'ease-in-out',
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
