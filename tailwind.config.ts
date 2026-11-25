import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F7F6F3",
        foreground: "#14213D",
        primary: {
          DEFAULT: '#3B4FE4',
          hover: '#2F3FBA',
          light: 'rgba(59, 79, 228, 0.1)',
          stroke: 'rgba(59, 79, 228, 0.08)',
        },
        navy: {
          950: '#0B1426',
          900: '#14213D',
          800: '#1B2B4F',
          700: '#24365F',
          600: '#34477A',
          500: '#55658C',
          400: '#8391B3',
          300: '#B7C0D6',
        },
        surface: "#F7F6F3",
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
  plugins: [typography],
};
export default config;
