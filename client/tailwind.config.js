/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./index.html", "./src/**/*.{js,jsx}"],
   mode: "jit",
   theme: {
      extend: {
         colors: {
            primary: "#ffffff", // Change primary color to white
            secondary: "#007bff", // Change secondary color to a light blue
            dimWhite: "rgba(0, 0, 0, 0.7)", // Adjust dimWhite color
            darkblue: "#1976D2", // Adjust dimWhite color
            dimBlue: "rgba(0, 123, 255, 0.1)", // Adjust dimBlue color
            facebook: "#316FF6", // Adjust dimBlue color
         },
         fontFamily: {
            poppins: ["Poppins", "sans-serif"],
         },
      },
      screens: {
         xs: "480px",
         ss: "620px",
         sm: "768px",
         md: "1060px",
         lg: "1200px",
         xl: "1700px",
      },
   },
   plugins: [
      require("@tailwindcss/line-clamp"),
      // ...
   ],
};
