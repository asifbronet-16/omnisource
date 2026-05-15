/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Now you can use bg-bg, bg-surface, text-accent, etc.
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        'surface-elev': 'var(--surface-elev)',
        line: 'var(--line)',
        'line-bright': 'var(--line-bright)',
        text: 'var(--text)',
        'text-dim': 'var(--text-dim)',
        accent: 'var(--accent)',
      },
      fontFamily: {
        // Now you can use font-display, font-sans, font-mono
        display: 'var(--display)',
        sans: 'var(--sans)',
        mono: 'var(--mono)',
        public: ['var(--font-public-sans)', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
    },
  },
  plugins: [],
}
