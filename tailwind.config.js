/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html, js}'],
  theme: {
    fontFamily: {
      poppins: ['Poppins'],
    },
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      animation: {
        'gravity': 'gravity 7s linear infinite'
      },
      keyframes: {
        gravity: {
          '0%, 100%': {
            transform: 'translateY(0)'
          },
          '50%': {
            transform: 'translateY(-100px)'
          },
        },
      },
      colors: {
        primary: '#14b8a6',
        secondary: '#64748b',
        dark: '#0f172a'
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}