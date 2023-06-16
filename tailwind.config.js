/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        blob: {
          "0%": {
            translate: "0 0",
            rotate: "0deg",
          },
          "30%": {
            rotate: "40deg",
          },
          "50%": {
            transform: "translate(300px, 390px) scale(1.1)",
          },
          "80%": {
            rotate: "90%",
          },
        },
      },
      animation: {
        blob: "blob 8s infinite cubic-bezier(0.6, -0.28, 0.735, 0.045)",
        "blob-reverse":
          "blob 10s infinite cubic-bezier(0.215, 0.61, 0.355, 1) reverse",
      },
    },
  },
  plugins: [],
};
