import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/theme");
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#007396",
        secondary: "#1E39A1",
        tertiary: "#80B9CB",
        heading: "#1B325E",
        white: "#fff",
        black: "#000",
        gray: "#D9D9D9",
        btn: "#404040",
      },
    },
  },
  plugins: [nextui({})],
};
export default config;
