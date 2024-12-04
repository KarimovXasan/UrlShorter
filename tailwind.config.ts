import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'gradient':"(89.92deg, #144EE3 -0.02%, #EB568E 18.86%, #A353AA 64.49%, #144EE3 100.67%)",
        'pink':"#EB568E",
        'blue':'#144EE3',
        'black':'#0B101B',
        'grey':'#181E29',
        'lite':'#C9CED6',
      },
    },
  },  
  plugins: [],
} satisfies Config;
