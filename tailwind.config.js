/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: "10px",
        xs: "13px",
        sm: "15px",
        base: "16px",
        md: "18px",
        lg: "30px",
        xl: "36px",
      },
      colors: {
        primary: "#FF5C00",
        grey: "#F4F4F6",
        black: {
          default: "#000000",
          dark: "white",
        },
        blue: "#0027B4",
      },
      borderRadius: {
        ten: "10px",
      },
    },
  },
  plugins: [],
}

