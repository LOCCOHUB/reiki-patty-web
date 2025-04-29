/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['PP Neue Montreal', 'sans-serif'],
      },
      colors: {
        background: "#fbfbfb",
        foreground: "#202019",
        border: "#9ba1a8",
        primary: "#8b6442",
        secondary: "#98885f",
        accent: "#738c9c",
        muted: "#c3af9c",
        'light-gray': "#cac9ca",
        beige: "#ccc0ac",
      },
      boxShadow: {
        modal: "0 5px 30px rgba(0, 0, 0, 0.15)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideOutRight: {
          "0%": { transform: "translateX(0)", opacity: "1" },
          "100%": { transform: "translateX(100%)", opacity: "0" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out forwards",
        "slide-up": "slideUp 0.7s ease-out forwards",
        "slide-in-right": "slideInRight 0.5s ease-out forwards",
        "slide-out-right": "slideOutRight 0.5s ease-out forwards",
      },
      gridTemplateColumns: {
        "custom-12": "repeat(12, minmax(0, 1fr))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
