/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors : {
        "purple": '#6E20A0',
        "purple-light": '#A44AF2',
        "purple-dark": '#3D0A6F',
        "white": '#FFFFFF',
      }
    },
  },
  plugins: [],
}
