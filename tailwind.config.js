/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default {
  content: [
    `./src/**/*.{html,js,jsx,ts,tsx}`,
    `./index.html`,
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
 
module.exports = withMT({
  content: [
    `./src/**/*.{html,js,jsx,ts,tsx}`,
    `./index.html`,
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});

