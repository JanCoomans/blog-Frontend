/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      screens: {
        'xs': '576px',
        // => @media (min-width: 576px) { ... }
      },
      fontFamily: {
        dmmono: ['DM Mono'],
        dmsans: ['DM Sans'],
      },
      colors: {
        primary: {
          500: 'var(--primary-500)',
          700: 'var(--primary-700)',
          900: 'var(--primary-900)',
        },
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
      },
      borderWidth: {
        3: '3px',
      },
      content: {
        empty: '""',
      },
      transitionProperty: {
        height: 'height',
        width: 'width',
      },
      spacing: {
        '2px': '0.125',
        '3px': '0.188rem',
        '17': '4.25rem',// 68px
        '18': '4.5rem',// 72px
        '19': '4.75rem',// 76px
        '30': '7.5rem',// 120px
        '35': '8.75rem',// 140px
        'inherit': 'inherit',
      },
      minHeight: {
        '7': '1.75rem',
        '8': '2rem',
        '9': '2.25rem',
        '10': '2.5rem',
        '18': '4.25rem',
      },
      maxWidth: {
        '8xl': '96rem',
      },
      fontSize: {
      },
      lineHeight: {
      }
    },
  },
  plugins: [],
}
