/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#d65c66",
        blue: "#3c6e8d",
        grayGreen: "#8daba8",
      },
    },
    fontSize: {
      body: "16px", // or any custom size you want
    },
  },
};
