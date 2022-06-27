module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",

  theme: {
    fontSize: {
      xxs: ".70rem",
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      "8xl": "6rem",
      "8.5xl": "6.9rem",
      "9xl": "7rem",
      "10xl": "10rem",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "0.5rem",
        sm: "1rem",
        md: "1rem",
        lg: "2rem",
        xl: "3rem",
        "2xl": "3rem",
      },
    },
    screens: {
      xs: "340px",
      // => @media (min-width: 400px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        primary: ["Inter"],
      },
      colors: {
        textAbout: "#3F3F46",
        tutor: "#71717A",
        codehighlight: "#2d2d2d",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
