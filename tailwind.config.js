module.exports = {
  darkMode: "media", 
  content: [
    "./pages/**/*.{js,ts,jsx,tsx, html}",
    "./components/**/*.{js,ts,jsx,tsx, html}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio")
  ],
}