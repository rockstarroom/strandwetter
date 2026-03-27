import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nordsee: "#183246",
        salz: "#F7F5F0",
        sand: "#D8C7AE",
        strandgras: "#7D8B72",
        treibholz: "#8D8B86",
        petrol: "#355D63",
        sonne: "#D9B96E",
        text: "#1E2529",
        muted: "#58636A",
        border: "#E7E1D8",
        surface: "#EFE8DE",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Cormorant Garamond", "serif"],
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0, 0, 0, 0.06)",
        float: "0 18px 60px rgba(24, 50, 70, 0.10)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;