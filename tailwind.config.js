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
          500: '#17232D',
          700: '#18222E',
          900: '#0F141B',
        },
        secondary: '#2A4454',
        accent: '#FECD6C',
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
        'inherit': 'inherit',
      },
      minHeight: {
        '7': '1.75rem',
        '8': '2rem',
        '9': '2.25rem',
        '10': '2.5rem',
        '18': '4.25rem',
      },
      fontSize: {
      },
      lineHeight: {
      }
    },
  },
  plugins: [],
}
