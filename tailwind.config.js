/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        royal: '#233b74',
        emerald: '#b0673d',
        orange: '#e79a2f',
        'orange-hover': '#d58b24',
        lavender: '#f3e7d8',
        ivory: '#fffaf5',
        gold: '#d6a365',
        ink: '#5e5148',
        body: '#5e5148',
        muted: '#7b6f65',
        section: '#f7efe4',
        main: '#fcf8f3',
        card: '#fffaf5'
      },
      fontFamily: {
        display: ['Georgia', 'Times New Roman', 'serif'],
        body: ['Arial', 'Helvetica', 'sans-serif']
      },
      boxShadow: {
        soft: '0 14px 36px rgba(94, 81, 72, 0.08)',
        card: '0 18px 40px rgba(94, 81, 72, 0.12)'
      },
      backgroundImage: {
        'royal-gradient': 'linear-gradient(120deg, #233b74 0%, #2f4a85 48%, #3a568f 100%)',
        'lavender-glow': 'radial-gradient(circle at 20% 20%, rgba(231, 154, 47, 0.14), transparent 58%)'
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
