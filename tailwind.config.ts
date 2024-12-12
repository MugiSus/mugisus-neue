import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gothicmb101: ["var(--font-inter)", "a-otf-gothic-mb101-pr6n"],
        cezanne: ["var(--font-inter)", "fot-cezanne-pron"],
      },
      transitionDuration: {
        4000: "4000ms",
        80: "80ms",
      },
      letterSpacing: {
        "more-widest": ".2em",
      },
      colors: {
        content: "#505050",
        primary: "#51B660",
        "creation-light": "#FBFBFB",
        "creation-dark": "#F0F0F0",
        icon: "#c0c0c0", // Added lighter color for icons
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
