/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neon: {
          blue: '#00FFFF',
          green: '#00FF85',
          pink: '#FF4C9D'
        },
        dark: {
          DEFAULT: '#000000',
          lighter: '#111111'
        },
        gray: {
          750: '#2D3748',
          850: '#1A1A1A'
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
        'glow-pulse': 'glowPulse 2s infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { 
            transform: 'translateY(20px)',
            opacity: '0'
          },
          '100%': { 
            transform: 'translateY(0)',
            opacity: '1'
          },
        },
        glowPulse: {
          '0%': { boxShadow: '0 0 5px var(--accent-primary)' },
          '50%': { boxShadow: '0 0 20px var(--accent-primary)' },
          '100%': { boxShadow: '0 0 5px var(--accent-primary)' }
        }
      },
      backgroundImage: {
        'gradient-text': 'linear-gradient(to right, var(--tw-gradient-stops))',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: 'var(--accent-primary)',
              '&:hover': {
                color: 'var(--accent-secondary)',
              },
            },
          },
        },
        dark: {
          css: {
            color: 'var(--text-secondary)',
            a: {
              color: 'var(--accent-primary)',
              '&:hover': {
                color: 'var(--accent-secondary)',
              },
            },
            h1: {
              color: 'var(--text-primary)',
            },
            h2: {
              color: 'var(--text-primary)',
            },
            h3: {
              color: 'var(--text-primary)',
            },
            h4: {
              color: 'var(--text-primary)',
            },
            strong: {
              color: 'var(--text-primary)',
            },
            code: {
              color: 'var(--text-secondary)',
            },
            blockquote: {
              color: 'var(--text-secondary)',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}