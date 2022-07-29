/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {  screens: {
    'xx': {'min': '0px', 'max': '380px'},

    'xs': {'min': '375px', 'max': '812px'},

    'sm': '640px',
   

    'md': '768px',
   
    'lg': '1024px',
    

    'xl': '1280px',
    

    '2xl': '1536px',
   
  },
    extend: {
     
      spacing: {
        '112': '28%',
        '128': '21rem',
      },
      fontSize: {
        'tiny': '18rem',
      }
    },
  },
  plugins: [],
}

// #';./



// npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch

