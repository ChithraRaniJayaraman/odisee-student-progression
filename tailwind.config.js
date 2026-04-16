/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        royal: '#29436f',
        emerald: '#b0673d',
        orange: '#c7794a',
        'orange-hover': '#ac6439',
        lavender: '#e6d7c4',
        ivory: '#f6efe4',
        gold: '#d09a61',
        ink: '#6d5c4f',
        body: '#6d5c4f',
        muted: '#8d7a69',
        section: '#efe3d1',
        main: '#f5ede1'
      },
      fontFamily: {
        display: ['Georgia', 'Times New Roman', 'serif'],
        body: ['Arial', 'Helvetica', 'sans-serif']
      },
      boxShadow: {
        soft: '0 12px 30px rgba(109, 92, 79, 0.1)',
        card: '0 14px 34px rgba(109, 92, 79, 0.16)'
      },
      backgroundImage: {
        'royal-gradient': 'linear-gradient(120deg, #29436f 0%, #36527d 45%, #476089 100%)',
        'lavender-glow': 'radial-gradient(circle at 20% 20%, rgba(208, 154, 97, 0.2), transparent 55%)'
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
            filter: 'drop-shadow(0 0 0px rgba(208, 154, 97, 0))'
          },
          '50%': {
            opacity: '0.4',
            filter: 'drop-shadow(0 0 6px rgba(208, 154, 97, 0.6))'
          },
          '100%': {
            opacity: '0.4',
            strokeWidth: '2px',
            filter: 'drop-shadow(0 0 8px rgba(208, 154, 97, 0.4))'
          }
        },
        sparkle: {
          '0%': {
            opacity: '0',
            r: '0',
            filter: 'drop-shadow(0 0 0px rgba(208, 154, 97, 0))'
          },
          '40%': {
            opacity: '1',
            r: '3',
            filter: 'drop-shadow(0 0 6px rgba(208, 154, 97, 0.75))'
          },
          '70%': {
            opacity: '1',
            r: '3',
            filter: 'drop-shadow(0 0 8px rgba(208, 154, 97, 0.55))'
          },
          '100%': {
            opacity: '0.6',
            r: '3',
            filter: 'drop-shadow(0 0 4px rgba(208, 154, 97, 0.3))'
          }
        },
        sparklePulse: {
          '0%': {
            opacity: '0',
            r: '3',
            filter: 'drop-shadow(0 0 0px rgba(208, 154, 97, 0))'
          },
          '30%': {
            opacity: '0.8',
            r: '6',
            filter: 'drop-shadow(0 0 6px rgba(208, 154, 97, 0.6))'
          },
          '100%': {
            opacity: '0',
            r: '12',
            filter: 'drop-shadow(0 0 2px rgba(208, 154, 97, 0))'
          }
        }
      }
    }
  },
  plugins: []
};
