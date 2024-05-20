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
        30: "#EEE5FFB8",
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
        "custom-gradient-3":
          "linear-gradient(90deg, #F87516 0%, #5E11FF 100%);",
      },
      lineHeight: {
        "custom-55": "55px",
        "custom-24": "24px",
        "custom-75": "75px",
        "custom-45": "45px",
        "custom-40": "40px",
        "custom-30": "30px",
        "custom-50": "50px",
        "custom-60": "60px",
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

        "2xl": "1440px",
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
