/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./index.html"],
   theme: {
      container: {
         center: "true",
         padding: "16px",
      },
      extend: {
         colors: {
            primary: "#09B451",
         },
         
         fontFamily: {
            sans: "'Source Sans Pro', sans-serif;"
         }
      },
   },
   plugins: [],
};
