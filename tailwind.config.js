/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        "110": "28rem"
      },
      backgroundImage:{
        "landing_page": "url('/assets/sofa.png')"
      },
      width:{
        "100":"28rem",
        "110": "35rem"
      }
    },
  },
  plugins: [],
}