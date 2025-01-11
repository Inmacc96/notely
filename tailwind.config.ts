import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      gray: {
        900: "#212121",
        "900-87": "rgba(33, 33, 33, 0.87)",
        "900-60": "rgba(33, 33, 33, 0.60)",
        "900-36": "rgba(33, 33, 33, 0.36)",
        600: "#757575",
        200: "#EEEEEE",
      },
      black: {
        DEFAULT: "#000000",
        "12": "rgba(0, 0, 0, 0.12)",
        "24": "rgba(0, 0, 0, 0.24)",
        "32": "rgba(0, 0, 0, 0.32)",
      },
      white: {
        DEFAULT: "#FFFFFF",
        "24": "rgba(255, 255, 255, 0.24)",
      },
      blue: {
        500: "#2196F3",
        400: "#42A5F5",
      },
      orange: {
        900: "#E65100",
        200: "#FFCC80",
      },
      green: {
        900: "#1B5E20",
        200: "#A5D6A7",
      },
      deepPurple: {
        200: "#B39DDB",
        900: "#4527A0",
      },
      red: {
        500: "#F44336",
        400: "#EF5350",
      },
    },
  },
  plugins: [],
} satisfies Config;
