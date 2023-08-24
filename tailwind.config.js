/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
        background: "#121214",
        text: "#c4c4cc",
        title: "#e1e1e6",
        "bg-card": "#202024",
        border: "#323238",
        header: "#02799d",
        "sub-title": "#e1e1e6",
      },
      gridTemplateColumns: {
        custom: "repeat(3, 370px)",
      },
      fontFamily: {
        mulish: "Mulish",
      },
    },
  },
  plugins: [],
};
