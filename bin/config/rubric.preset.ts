import type { Config } from "tailwindcss"

const rubricConfig = {
  content: ["./node_modules/rubricui/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "rubricui-primary": "rgb(var(--rubricui-primary) / <alpha-value>)",
        "rubricui-contrast": "rgb(var(--rubricui-contrast) / <alpha-value>)",
      },
      transitionDuration: {
        "rubricui-duration": "300ms",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default rubricConfig;
