/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans : ["Open Sans", "sans-serif"],
      sora : ["Sora", "sans-serif"]
    },
    backgroundColor: {
      'primary': '#4E944F',
      'secondary': '#FF6A3F',
      'primary-hover': '#0FC112',
      'secondary-hover': '#F13323',
      'gray': '#D9D9D9',
      'gray-300': '#e0e0e0',
      'gray-500': '#9e9e9e',
      'gray-700': '#616161',
      'light-gray': '#F8F8F8',
      'black': '#000000',
      'white': '#ffffff',
      'footer': '#272B27',
      'transparent': 'transparent'
    },
    textColor: {
      'primary': '#4E944F',
      'secondary': '#FF6A3F',
      'white': '#ffffff',
      'black': '#000000',
      'light-blue': '#29b6f6',
      'gray-300': '#e0e0e0',
      'gray-500': '#9e9e9e',
    },
    borderWidth: {
      '0': '0',
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px'
    },
    borderColor: {
      'primary': '#4E944F',
      'secondary': '#FF6A3F',
      'primary-hover': '#0FC112',
      'secondary-hover': '#F13323',
      'gray': '#D9D9D9',
      'gray-300': '#e0e0e0',
      'gray-500': '#9e9e9e',
      'gray-700': '#616161',
      'light-gray': '#F8F8F8',
      'black': '#000000',
      'white': '#ffffff',
      'footer': '#272B27',
      'transparent': 'transparent'
    }
  },
  plugins: [],
}

