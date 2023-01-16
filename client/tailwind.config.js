/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js", "./src/**/styles/*.js", "./src/**/components/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        'plants': "url('../public/plants.jpeg')",
        'plant': "url('../public/plant.jpeg')",
        'cactus': "url('../public/cactus.jpeg')"
      },
      colors: {
        'viridian': '#40826D',
      },
    },
  },
  plugins: [],
}
