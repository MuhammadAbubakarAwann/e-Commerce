// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        primary:'#01A8BE',
        secondary:'#092428',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        krona: ['"Krona One"', 'sans-serif'],
        kulim: ['"Kulim Park"', 'sans-serif'],
      },
    },
  },
  plugins: [
    // ...
    require('tailwind-scrollbar'),
    require('daisyui'),
  ],
  variants: {
    scrollbar: ['rounded'],
  },
};
