/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: { center: true, padding: '1rem' },
    extend: {
      colors: {
        base: {
          light: '#0f172a', // سرمه‌ای/ذغالی
          dark: '#0b1220',
        },
        glass: 'rgba(255,255,255,0.08)',
        neon: {
          cyan: '#22d3ee',
          blue: '#60a5fa',
          pink: '#fb37a3',
        },
      },
      boxShadow: {
        soft: '0 8px 30px rgba(0,0,0,0.25)',
        glass: '0 2px 20px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08)',
        neo: '8px 8px 24px #0a0f1a, -8px -8px 24px #121a2a',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        glow: { '0%,100%': { opacity: .7 }, '50%': { opacity: 1 } },
        sweep: { '0%': { transform: 'translateX(-120%)' }, '100%': { transform: 'translateX(120%)' } },
        hue: { '0%': { filter: 'hue-rotate(0deg)' }, '100%': { filter: 'hue-rotate(360deg)' } },
        cursor: { '0%': { opacity: 1 }, '50%': { opacity: 0 }, '100%': { opacity: 1 } },
      },
      animation: {
        glow: 'glow 3s ease-in-out infinite',
        hue: 'hue 6s linear infinite',
        cursor: 'cursor 1s step-start infinite',
      },
    },
  },
  plugins: [],
}
