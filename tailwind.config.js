/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jum: "Jomhuria",
        poor: "poor",
        harmattan: "harmattan",
      },

      fontSize: {
        30: "30px",
        40: "40px",
        80: "80px",
        200: "200px",
      },
      lineHeight: {
        120: "120px",
      },
      borderColor: {
        "custom-black": "#565656",
      },
      textColor: {
        "custom-yellow": "#FEFFD1",
        "custom-black": "#565656",
      },
      width: {
        90: "90px",
        800: "800px",
      },
      margin: {
        50: "50px",
        200: "200px",
      },
    },
  },
  plugins: [],
};
