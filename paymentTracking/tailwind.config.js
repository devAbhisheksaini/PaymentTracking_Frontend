/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Ubuntu","Roboto", "Open-sans", "Montserrat", "Roboto Condesed", "Oswald","Nunito"],
      },
    },
  },
  plugins: [],
}

