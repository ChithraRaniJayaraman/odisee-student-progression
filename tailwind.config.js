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
      },
      animation: {
        'tool-popup': 'toolPopup 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) backwards',
        'ray-glow': 'rayGlow 1.2s ease-out forwards',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'sparkle-pulse': 'sparklePulse 2s ease-out infinite'
      },
      keyframes: {
        toolPopup: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        rayGlow: {
          '0%': {
            opacity: '0',
            strokeWidth: '2px',
            filter: 'drop-shadow(0 0 0px rgba(231, 154, 47, 0))'
          },
          '50%': {
            opacity: '0.4',
            filter: 'drop-shadow(0 0 6px rgba(231, 154, 47, 0.6))'
          },
          '100%': {
            opacity: '0.4',
            strokeWidth: '2px',
            filter: 'drop-shadow(0 0 8px rgba(231, 154, 47, 0.4))'
          }
        },
        sparkle: {
          '0%': {
            opacity: '0',
            r: '0',
            filter: 'drop-shadow(0 0 0px rgba(231, 154, 47, 0))'
          },
          '40%': {
            opacity: '1',
            r: '3',
            filter: 'drop-shadow(0 0 6px rgba(231, 154, 47, 0.8))'
          },
          '70%': {
            opacity: '1',
            r: '3',
            filter: 'drop-shadow(0 0 8px rgba(231, 154, 47, 0.6))'
          },
          '100%': {
            opacity: '0.6',
            r: '3',
            filter: 'drop-shadow(0 0 4px rgba(231, 154, 47, 0.3))'
          }
        },
        sparklePulse: {
          '0%': {
            opacity: '0',
            r: '3',
            filter: 'drop-shadow(0 0 0px rgba(231, 154, 47, 0))'
          },
          '30%': {
            opacity: '0.8',
            r: '6',
            filter: 'drop-shadow(0 0 6px rgba(231, 154, 47, 0.6))'
          },
          '100%': {
            opacity: '0',
            r: '12',
            filter: 'drop-shadow(0 0 2px rgba(231, 154, 47, 0))'
          }
        }
      }
    }
  },
  plugins: []
};
