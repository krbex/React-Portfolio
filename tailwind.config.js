/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    files: [
      "./src/**/*.html",
      "./src/**/*.js",
      "./public/**/*.html",
      "./public/**/*.js",
    ],

    theme: {
      extend: {},
    },
  },
  plugins: [],
};
