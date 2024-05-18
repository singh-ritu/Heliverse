const { Outfit, Sora } = require("next/font/google");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: {
        DEFAULT: "#000000",
        10: "#262626",
      },
      white: {
        DEFAULT: "#FFFFFF",
        30: "#F5F5F5",
        40: "#F6F6F6",
        50: "#F1F1F1",
        60: "#F8F8F8",
      },
      green: {
        10: "#82B440",
      },
      grey: {
        10: "#969696",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        df: "0px",
        // => @media (min-width: 200px) { ... }

        xs: { min: "200px", max: "375px" },

        // => @media (min-width: 320px, max-width: 540px) { ... }
        mobile_540_range: { min: "320px", max: "540px" },
        mobile_540: "540px",

        // => @media (min-width: 200px, max-width: 375px) { ... }
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
