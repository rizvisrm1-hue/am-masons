import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F4F5FD",
        foreground: "#111827",
        primary: {
          DEFAULT: '#3B4FE4',
          hover: '#2F3FBA',
          light: 'rgba(59, 79, 228, 0.1)',
          stroke: 'rgba(59, 79, 228, 0.08)',
        },
        surface: "#F4F5FD",
        card: "#FFFFFF",
      },
      boxShadow: {
        'card-resting': '0 4px 20px -2px rgba(17, 24, 39, 0.05)',
        'card-hover': '0 12px 30px -4px rgba(59, 79, 228, 0.12)',
        'btn-primary': '0 8px 20px rgba(59, 79, 228, 0.35)',
      },
      letterSpacing: {
        'tight-header': '-0.015em',
      }
    },
  },
  plugins: [],
};
export default config;
