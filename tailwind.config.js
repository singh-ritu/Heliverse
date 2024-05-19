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
        20: "#6F6F6F",
      },
      white: {
        DEFAULT: "#FFFFFF",
        10: "#EEE5FFBD",
        20: "#EEE5FF",
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
        "custom-gradient": "linear-gradient(90deg, #5E11FF 30%, #F87516 100%)",
        "custom-gradient-2":
          "linear-gradient(180deg, #0D061F 0%, #251E35 100%);",
      },
      lineHeight: {
        "custom-55": "55px",
        "custon-24": "24px",
        "custon-75": "75px",
        "custon-45": "45px",
        "custon-40": "40px",
      },
      screens: {
        df: "0px",
        // => @media (min-width: 200px) { ... }

        xs: { min: "200px", max: "375px" },

        mobile_580: "580px",

        // => @media (min-width: 200px, max-width: 375px) { ... }
        sm: "480px",
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
        sora: ["Sora", "sans-serif"],
      },
    },
  },
  plugins: [],
};
