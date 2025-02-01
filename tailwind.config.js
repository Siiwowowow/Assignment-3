/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        animation:{
          wiggle:"wiggle 4s ease-in-out infinite",
        },
        keyframes: {
          wiggle:{
            "0% 100%":{
              transform:"rotate(-10deg)",
            },
            "50%":{
              transform:"rotate(30deg)",
            },
          },
        },
      },
    },
    plugins: [],
  };