/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Config } from "tailwindcss";
// import inaConfig from "ina-ui/config";
import inaConfig from "ina-ui/config";

const config: Config = inaConfig({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "md-light-surface": "#fff",
        "ios-light-surface": "#fff",
        "fill-success": "#19B26B",
        "fill-critical": "#AF2A2D",
        "text-primary": "#1F1F1F",
        "text-secondary": "#667085",
        "primary-fill": "#0C111D",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      addUtilities({
        ".placeholder-ellipsis": {
          "text-overflow": "ellipsis",
          "white-space": "nowrap",
          overflow: "hidden",
        },
      });
    },
  ],
});
export default config;
