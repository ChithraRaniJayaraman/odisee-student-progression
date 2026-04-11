/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        royal: '#173c7a',
        emerald: '#0f8a6b',
        orange: '#ea8b3b',
        lavender: '#b8a2e0',
        ivory: '#f8f5ee',
        gold: '#c8a14a',
        ink: '#1f2a44'
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['Nunito Sans', 'sans-serif']
      },
      boxShadow: {
        soft: '0 10px 30px rgba(23, 60, 122, 0.08)',
        card: '0 10px 26px rgba(31, 42, 68, 0.12)'
      },
      backgroundImage: {
        'royal-gradient': 'linear-gradient(120deg, #173c7a 0%, #2452a6 45%, #3a6cc4 100%)',
        'lavender-glow': 'radial-gradient(circle at 20% 20%, rgba(184, 162, 224, 0.28), transparent 55%)'
      }
    }
  },
  plugins: []
};
