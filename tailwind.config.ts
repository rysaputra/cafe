import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      scrollBehavior: {
        smooth: 'smooth',
      },
      fontFamily: {
        'sans': ['Plus Jakarta Sans', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    variants: {
      extend: {
        scrollBehavior: ['responsive'],
      },
    },
  },
<<<<<<< HEAD
  plugins: [],
=======
  plugins: [
    function ({ }) {
        ['responsive']
      );
    },
  ],
>>>>>>> 78946e53bd7606f36ba1b49570ea7fb580078acd
};
export default config;
