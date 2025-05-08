/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        navy: "#1a2f4f",
        skyblue: "#8fc1e1",
        gold: "#fad045",
        border: "#e5e7eb",
        input: "#e5e7eb",
        ring: "#1a2f4f",
        background: "#ffffff",
        foreground: "#1a2f4f",
        primary: {
          DEFAULT: "#1a2f4f",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#8fc1e1",
          foreground: "#1a2f4f",
        },
        accent: {
          DEFAULT: "#fad045",
          foreground: "#1a2f4f",
        },
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          }
        }
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

