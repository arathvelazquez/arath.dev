/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#ed9b40', // orange
        'secondary': '#2274a5', // blue
        'tertiary': '#57a773', // green
        'powder': '#fdfdfd' // white
      },
      height: {
        sm: '450px',
        xl: '550px',
      },
      borderWidth: {
        '14': '14px',
      },
      fontFamily: {
        'main-title': ['Poppins']
      },
      fontSize: {
        'main-title': '72px'
      },
      screens: {
        'xs': '475px'
      },
      boxShadow: {
        link: '0 -2px 0 0 rgb(252, 163, 17) inset',
      },
    },
  },
  plugins: [],
}
