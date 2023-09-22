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
      },
      backgroundColor: {
        "creation-light": "#503B5C",
        "creation-dark": "#473751",
      },
    },
  },
  plugins: [],
};
export default config;
