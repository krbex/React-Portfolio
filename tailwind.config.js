/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    files: ["./src/**/*.{js,jsx,ts,tsx}", "./public/**/*.html"],

    theme: {
      backgroundColor: {
        primary: "#ffed4a",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1536px",
        extend: {},
      },
    },
  },
  plugins: [],
};
