/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxHeight: {
        256: "48rem",
      },
      gridTemplateColumns: {
        "2/3": "1fr 2fr",
      },
      gridTemplateRows: {
        "2/3": "1fr 2fr",
        "3/2": "2fr 1fr",
        "8/1": "8fr 1fr",
      },
    },
  },
  plugins: [],
};
