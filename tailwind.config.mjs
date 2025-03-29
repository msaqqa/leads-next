/** @type {import('tailwindcss').Config} */

const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        "neutral-900": "#121212",
        "blue-500": "#000000",
        accent: "#ff5323",
        gray: {
          300: "#e0e0e0",
          400: "#bdbdbd",
          500: "#616161",
        },
      },
      transitionDuration: {
        DEFAULT: "500ms",
      },
      // fontFamily: {
      //   custom: ["'Cairo'", "sans-serif"],
      // },
    },
  },
  plugins: [],
};

export default config;
