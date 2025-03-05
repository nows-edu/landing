import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserratAlt: ['Montserrat Alternates', 'sans-serif'],
        josefinSans: ['Josefin Sans', 'sans-serif'],
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        darkerGrotesque: ['Darker Grotesque', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
