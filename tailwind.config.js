/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Open+Sans"],
        second:["Noto+Sans+Mono"]
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
