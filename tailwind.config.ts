import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        4000: "4000ms",
        80: "80ms",
      },
      letterSpacing: {
        "more-widest": ".2em",
      },
      colors: {
        primary: "#51B660",
        "creation-light": "#F2F2F2",
        "creation-dark": "#E8E8E8",
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
