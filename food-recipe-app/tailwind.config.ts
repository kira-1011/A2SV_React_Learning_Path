import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
       colors:{
        primary: '#FF5363',
        secondary: {
          100: '#E2DA2D',
          200: '#777772'
        }
      },

      fontFamily: {
        caveat: ['Caveat']
      }
    },
  },
  plugins: [],
}
export default config
