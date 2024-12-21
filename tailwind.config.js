/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#52b788',
        secondary: '#00b4d8',
        heading: {
          light: {
            section_heading: '#2d6a4f',
            normal_heading: '#40916c',
          },
          dark: {
            section_heading: '#0077b6',
            normal_heading_heading: '#0096c7',
          },
        },
        text: {
          light: '#74c69d',
          dark: '#90e0ef',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
