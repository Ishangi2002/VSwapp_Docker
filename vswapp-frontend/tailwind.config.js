/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 1. Define the custom movement (Keyframes)
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }, // Moves up by 20 pixels
        },
        slowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
        }
      },
      // 2. Define the animation classes
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-bg': 'slowPulse 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}