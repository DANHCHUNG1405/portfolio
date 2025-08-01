// tailwind.config.js
import tailwindScrollbar from "tailwind-scrollbar";

export default {
  content: [
    "./index.html", // với Vite
    "./src/**/*.{js,ts,jsx,tsx}", // tất cả file React
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "san-serif"],
      },
    },
  },
  plugins: [tailwindScrollbar],
};
