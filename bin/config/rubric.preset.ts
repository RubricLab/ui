import type { Config } from "tailwindcss"

const rubricConfig = {
  content: ["./node_modules/rubricui/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--primary) / <alpha-value>)",
        contrast: "rgb(var(--contrast) / <alpha-value>)",
      },
      transitionDuration: {
        "brand-duration": "300ms",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default rubricConfig;