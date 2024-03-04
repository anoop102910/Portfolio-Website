/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pacifico: "Pacifico",
        roboto: "Roboto",
        playfair: "Playfair Display",
        bungee: "Bungee Spice",
        salsa:"Salsa"
      },
      colors: {
        primary: {
          800: "#2B0B56",
          700: "#003B84",
          600: "#0065A4",
          500: "#008DB7",
          400: "#00B3C0",
          300: "#6CD9C7",
        },
        secondary: {
          800: "#910944",
          700: "#B93A65",
          600: "#E36187",
          500: "#FF87AB",
        },
        tertiary: {
          100: "#889109",
        },
      },
      backgroundColor: {
        glass: "rgba(0,0,0,0,25)",
        dark: "rgba(0, 0, 0, 0.4)",
      },
      backgroundImage: {
        r1: "linear-gradient(to right, black, #120991)",
        r2: "linear-gradient(to right, blue, green)",
        r3: " linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(126,0,167,1) 100%);",
      },
    },
  },
  plugins: [],
};
