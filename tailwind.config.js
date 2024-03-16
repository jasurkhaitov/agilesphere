/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'Poppins, sans-serif',
      },

      colors: {
        BboxColor: 'rgb(17,24,39,1)',
        BbackgoundColor: 'hsl(222.2 84% 4.9%)',

        BbuttonColorHover: 'rgba(118, 18, 250, .80)',
        BbuttonColor: 'rgba(118, 18, 250, .50)',
        BbuttonColorNone: 'rgba(118, 18, 250, .10)',
        PrimaryWhite: '#E0E4E7',

        Bgray: '#A4A5A6'
      },

      fontSize: {
        logoFont: ['24px', {
          fontWeight: 700,
          lineHeight: '31.25px'
        }],

        button: ['18px', {
          fontWeight: 400,
          lineHeight: '22.25px'
        }]
      }
    },
  },
  plugins: [require("daisyui")],
}