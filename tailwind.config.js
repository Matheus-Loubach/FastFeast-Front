/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile2': '200px',
      'mobile1': '391px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',

    },
  },
  plugins: [],
}

