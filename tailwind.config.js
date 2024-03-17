/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },
    extend: {
      height: {
        screen: "100dvh",
      },
      backgroundImage: theme => ({
        'home_page': "url('/public/pizza_home.jpg')",
    })
    },
  },
  plugins: [],
};
