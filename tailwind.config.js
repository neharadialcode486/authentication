/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
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
        black: "#000000",
        blue: "#0027B4",
      },
      borderRadius: {
        ten: "10px",
      },
    },
  },
  plugins: [],
};
