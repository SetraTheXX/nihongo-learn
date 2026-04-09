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
        background: "var(--background)",
        foreground: "var(--foreground)",
        kawaii: {
          sakura: "#FFB7B2",     // Soft pastel pink
          peach: "#FFDAC1",      // Soft pastel peach
          mint: "#E2F0CB",       // Soft pastel green
          lavender: "#C7CEEA",   // Soft pastel purple
          sky: "#B5EAD7",        // Soft pastel blue
          card: "var(--card-bg)" // Card background responsive
        }
      },
    },
  },
  plugins: [],
};
export default config;
