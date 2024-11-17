/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend:{
    
    colors: {
      'deep-purple': '#2e1a52',
    },
    
      backgroundImage: {
        'bg-main': "url('/images/auth-main-bg.png')",

      }
    }
  },
  plugins: [],
}