import type { Config } from "tailwindcss";

export const colors = {
  blue: "#546EAB",
  green: "#4697B4",
  purple: "#864DC2",
};


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1310px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundColor: {
        argPrimary1: "#546EAB",
        argPrimary2: "#864DC2",
        argSecondary1: "#F1E6D2",
        argSecondary2: "#A7D0D2",
        argSecondary3: "#4697B4",
        argSecondary4: "#BDBFC1",
        // argPrimary: "#864DC2",
        // argSecondary: "#546EAB",
        // argTertiary: "#F1E6D2",
        // argCyan:"#546EAB",
        // argMagenta:"#864DC2",
        // argLightGreen:"#A7D0D2",
        // argTurquey:"#4697B4",
        // argGrey:"#BDBFC1",
        // argDarkGrey: "#36485C",
        // argBeige:"#F1E6D2",
        // primary:"#36485C",
        // info:"#172026",
        // google: {
        //   'text-gray': '#3c4043',
        //   'button-blue': '#1a73e8',
        //   'button-blue-hover': '#5195ee',
        //   'button-dark': '#202124',
        //   'button-dark-hover': '#555658',
        //   'button-border-light': '#dadce0',
        //   'logo-blue': '#4285f4',
        //   'logo-green': '#34a853',
        //   'logo-yellow': '#fbbc05',
        //   'logo-red': '#ea4335',
        // },
      },
      colors:{
        white:"#FFFFFF",
        black:"#000000",

        argPrimary1: "#546EAB",
        argPrimary2: "#864DC2",
        argSecondary1: "#F1E6D2",
        argSecondary2: "#A7D0D2",
        argSecondary3: "#4697B4",
        argSecondary4: "#BDBFC1",

        // argCyan:"#546EAB",
        // argMagenta:"#864DC2",
        // argLightGreen:"#A7D0D2",
        // argTurquey:"#4697B4",
        // argGrey:"#BDBFC1",
        // argDarkGrey: "#36485C",
        // argBeige:"#F1E6D2",

        primary:"#36485C",
        info:"#172026",
        google: {
          'text-gray': '#3c4043',
          'button-blue': '#1a73e8',
          'button-blue-hover': '#5195ee',
          'button-dark': '#202124',
          'button-dark-hover': '#555658',
          'button-border-light': '#dadce0',
          'logo-blue': '#4285f4',
          'logo-green': '#34a853',
          'logo-yellow': '#fbbc05',
          'logo-red': '#ea4335',
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  safelist: [
      'bg-argPrimary1',
      'bg-argPrimary2',
      'bg-argSecondary1',
      'bg-argSecondary2',
      'bg-argSecondary3',
      'bg-argSecondary4',
      'bg-black',
      'bg-white',
      'text-argPrimary1',
      'text-argPrimary2',
      'text-argSecondary1',
      'text-argSecondary2',
      'text-argSecondary3',
      'text-argSecondary4',
      'text-black',
      'text-white',
    ],
};
export default config;
