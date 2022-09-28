/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkCyan': 'hsl(var(--darkCyan) / 1)', // primary
        'lightGrayishCyan': 'hsl(var(--lightGrayishCyan) / 1)', // bgColor
        'bgFilter': 'hsl(var(--bgFilter) / 1)',
        'darkGrayishCyan': 'hsl(var(--darkGrayishCyan) / 1) ',
        'veryDarkGrayishCyan': 'hsl(var(--veryDarkGrayishCyan) / 1) '
        // ...
      },
      fontFamily: {
        'ff': ['"League Spartan"', 'sans-serif']
      }
    },
  },
  plugins: [],
}
