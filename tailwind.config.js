/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondaryDark: "#1A3137",
        secondaryLight: "#294C5A",
        darkgray: "#4F4F4F",
        lightGreen: "#A5D9D0"
      }
    }
  }
};
