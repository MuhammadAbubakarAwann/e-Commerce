// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        krona: ['"Krona One"', 'sans-serif'],
        kulim: ['"Kulim Park"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
