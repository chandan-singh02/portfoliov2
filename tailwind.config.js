module.exports = {
  purge: {
    enabled: true,
    content: ["./public/**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "portfolio-darkblue": "hsl(233, 26%, 24%)",
        "portfolio-limegreen": "hsl(136, 65%, 51%)",
        "portfolio-brightcyan": "hsl(192, 70%, 51%)",
        "portfolio-grayishBlue": "hsl(233, 8%, 62%)",
        "portfolio-lightgrayishblue": "hsl(220, 16%, 96%)",
        "portfolio-verylightgray": "hsl(0, 0%, 98%)",
        "portfolio-white": "hsl(0, 0%, 100%)",
      },
    },
    container: {
      center: true,
      padding: "3rem",
      screens: {
        lg: "1290px",
        xl: "1290px",

        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "639px" },

        // "2xl":"1124px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
