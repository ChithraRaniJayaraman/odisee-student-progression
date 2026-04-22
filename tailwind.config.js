/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        royal: '#203a32',
        emerald: '#8ea68a',
        orange: '#d8b155',
        'orange-hover': '#c79f44',
        lavender: '#eef4ea',
        ivory: '#fffdf8',
        gold: '#e0bf6a',
        ink: '#2f342f',
        body: '#4d554d',
        muted: '#6f756d',
        section: '#f4efe1',
        main: '#fcf8ef',
        card: '#fffaf2'
      },
      fontFamily: {
        display: ['Georgia', 'Times New Roman', 'serif'],
        body: ['Arial', 'Helvetica', 'sans-serif']
      },
      boxShadow: {
        soft: '0 18px 42px rgba(64, 79, 60, 0.10)',
        card: '0 22px 48px rgba(64, 79, 60, 0.14)'
      },
      backgroundImage: {
        'royal-gradient': 'linear-gradient(120deg, #4c6650 0%, #b7c08d 48%, #f0e1b6 100%)',
        'lavender-glow': 'radial-gradient(circle at 20% 20%, rgba(224, 191, 106, 0.16), transparent 58%)'
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
            filter: 'drop-shadow(0 0 0px rgba(224, 191, 106, 0))'
          },
          '50%': {
            opacity: '0.4',
            filter: 'drop-shadow(0 0 6px rgba(224, 191, 106, 0.6))'
          },
          '100%': {
            opacity: '0.4',
            strokeWidth: '2px',
            filter: 'drop-shadow(0 0 8px rgba(224, 191, 106, 0.4))'
          }
        },
        sparkle: {
          '0%': {
            opacity: '0',
            r: '0',
            filter: 'drop-shadow(0 0 0px rgba(224, 191, 106, 0))'
          },
          '40%': {
            opacity: '1',
            r: '3',
            filter: 'drop-shadow(0 0 6px rgba(224, 191, 106, 0.75))'
          },
          '70%': {
            opacity: '1',
            r: '3',
            filter: 'drop-shadow(0 0 8px rgba(224, 191, 106, 0.55))'
          },
          '100%': {
            opacity: '0.6',
            r: '3',
            filter: 'drop-shadow(0 0 4px rgba(224, 191, 106, 0.3))'
          }
        },
        sparklePulse: {
          '0%': {
            opacity: '0',
            r: '3',
            filter: 'drop-shadow(0 0 0px rgba(224, 191, 106, 0))'
          },
          '30%': {
            opacity: '0.8',
            r: '6',
            filter: 'drop-shadow(0 0 6px rgba(224, 191, 106, 0.6))'
          },
          '100%': {
            opacity: '0',
            r: '12',
            filter: 'drop-shadow(0 0 2px rgba(224, 191, 106, 0))'
          }
        }
      }
    }
  },
  plugins: []
};
