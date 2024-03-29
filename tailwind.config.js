/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
        'custom': ['ubuntu-mono', 'Ubuntu', 'sans-serif'],
    }, screens: {
      'sm': '300px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }},
  theme: {
    extend: {
      gradientColorStops: theme => ({
        // Define your custom gradient colors here
        'neon-pink': '#FF6AC1',
        'neon-purple': '#9013FE',
      })
    },
    theme: {
      extend: {
        animation: {
          // Define your custom animation here
          'neon-pulse': 'neon-pulse 1s infinite',
        },
        keyframes: {
          // Define your custom keyframes here
          'neon-pulse': {
            '0%, 100%': { opacity: '1' },
            '50%': { opacity: '0.5' },
          },
        },
      },
    },
    variants: {
      extend: {
        // Enable animation variants if required
        animation: ['hover', 'focus'],
      },
    },
  },
  plugins: [],
}

