/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "grayish-blue": {
          700: "hsl(217, 19%, 35%)",
          500: "hsl(214, 17%, 51%)",
          400: "hsl(212, 23%, 69%)",
          200: "hsl(210, 46%, 95%)",
        },
      },
      screens: {
        md: {
          max: "768px",
        },
      },
    },
  },
  plugins: [],
};
