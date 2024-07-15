/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF7E24",
        secondary: "#469BAF",
      },
      fontFamily: {
        heading: ["Castoro"],
        poppins: ["Poppins"],
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
