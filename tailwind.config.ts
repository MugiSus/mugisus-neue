import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E1B5F8",
        "creation-light": "#4D305D",
        "creation-dark": "#432952",
      },
      keyframes: {
        "marquee-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-25%)" },
        },
        "marquee-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(25%)" },
        },
      },
      animation: {
        "marquee-left": "marquee-left 60s linear infinite",
        "marquee-right": "marquee-right 60s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
