/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js", "./src/**/styles/*.js", "./src/**/components/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        'plant': "url('../public/plant.jpeg')",
      },
    },
  },
  plugins: [],
}
