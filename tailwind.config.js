/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        eucalyptus: "hsl(var(--eucalyptus))",
        "dark-purple": "hsl(var(--dark-purple))",
        "ghost-white": "hsl(var(--ghost-white))",
      },
      fontFamily: {
        fraunces: ["Fraunces", "sans-serif"],
        manrope: ["Manrope"],
      },
    },
  },
  plugins: [],
};
