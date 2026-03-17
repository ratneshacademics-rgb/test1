import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef8ff",
          100: "#d8ecff",
          600: "#0069b4",
          700: "#00538f",
          900: "#06263d"
        }
      },
      boxShadow: {
        soft: "0 10px 25px -12px rgba(0, 83, 143, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
