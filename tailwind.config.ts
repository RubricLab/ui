import { type Config } from "tailwindcss";

const tailwindConfig = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "brand-primary": {
          DEFAULT: "#FCFCFC",
        },
        "brand-contrast": {
          DEFAULT: "#050505",
        },
      },
      transitionDuration: {
        "brand-duration": "300ms",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default tailwindConfig;
