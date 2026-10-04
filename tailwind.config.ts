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
        temple: {
          maroon: "#5B1717",
          dark: "#241313",
          gold: "#C89B3C",
          "gold-light": "#E3C878",
          ivory: "#FBF6E9",
          sandal: "#F2E8D0",
          text: "#30221D",
          muted: "#77665A",
          green: "#314A38",
          white: "#FFFDF7",
        },
      },
      fontFamily: {
        serif: ["var(--font-noto-serif-malayalam)", "serif"],
        sans: ["var(--font-noto-sans-malayalam)", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      boxShadow: {
        subtle: "0 4px 20px -2px rgba(36, 19, 19, 0.05)",
        card: "0 10px 30px -5px rgba(91, 23, 23, 0.08)",
        gold: "0 0 25px -5px rgba(200, 155, 60, 0.25)",
      },
      animation: {
        "slow-zoom": "slowZoom 20s ease-in-out infinite alternate",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
      },
      keyframes: {
        slowZoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.05)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
