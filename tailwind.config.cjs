/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-500": "#d96057"
      },
      fontFamily: {
        jakartasans: ["Plus Jakarta Sans", "sans-serif"],
        caveat: ["Caveat", "cursive"],
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
      },
      letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest1: '.075em',
      widest2: '.1em',
    }
    },
  },
  plugins: [],
}
