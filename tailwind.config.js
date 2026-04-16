/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        royal: '#233b74',
        emerald: '#cc7f14',
        orange: '#e79a2f',
        'orange-hover': '#cc7f14',
        lavender: '#f3e4d2',
        ivory: '#fcf8f3',
        gold: '#e79a2f',
        ink: '#5e5148',
        body: '#5e5148',
        muted: '#8e7d72',
        section: '#f8f3ed',
        main: '#fcf8f3'
      },
      fontFamily: {
        display: ['Georgia', 'Times New Roman', 'serif'],
        body: ['Arial', 'Helvetica', 'sans-serif']
      },
      boxShadow: {
        soft: '0 10px 28px rgba(35, 59, 116, 0.08)',
        card: '0 12px 32px rgba(94, 81, 72, 0.14)'
      },
      backgroundImage: {
        'royal-gradient': 'linear-gradient(120deg, #233b74 0%, #35538f 45%, #4a689f 100%)',
        'lavender-glow': 'radial-gradient(circle at 20% 20%, rgba(231, 154, 47, 0.2), transparent 55%)'
      }
    }
  },
  plugins: []
};
