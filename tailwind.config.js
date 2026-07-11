/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        skin: {
          primary: "var(--color-primary)",
          black: "var(--color-black)",
          logo: "var(--color-logo-color)",
          logoHover: "var(--color-logo-hover)",
          light: "var(--color-white)",
          background: "var(--color-background)",
          primaryCard: '#130305',
          backgroundHighlight: "rgb(226 46 51 / 0.1)"
        }
      },
      textColor: {
        skin: {
          default: "var(--text-bright)",
          primary: "var(--color-primary)",

          logo: "var(--color-logo-color)",
          logoHover: "var(--color-logo-hover)",
          light: "var(--color-white)",
          dark: "var(--color-black)",
          mutedLight: "var(--text-muted-light)",
          badgeBG: "var(--color-badge-background)",

        },
      },
      backgroundImage: {
        // Linear gradient matching OmniSource brand (left to right)
        'skin-gradient-primary': 'linear-gradient(to right, #0D0809, #9F212B, #E22E33)',
        // Alternative smooth primary red gradient scale
        'skin-navy-scale': 'linear-gradient(to right, #9F212B, #E22E33)',
        'text-gradient-primary':
          'linear-gradient(to right, #ffffff 0%, #e5e7eb 45%, #E22E33 100%)',
        // Hero Bottom Fade
        'gradient-primary':
          'linear-gradient(to top, rgba(159, 33, 43, 0.95) 0%, rgba(226, 46, 51, 0.3) 40%, transparent 100%)',

        // Left Overlay
        'gradient-left':
          'linear-gradient(to right,  0%, transparent 70%)',
        'gradient-cinematic':
          'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)',
        'text-gradient-right':
          'linear-gradient(to right, #ffffff 0%, #e5e7eb 45%, #E22E33 100%)',
      },
      colors: {
        glow: "var(--color-shadow-primary)",
        mutedLight: "var(--text-muted-light)"

      },
      borderColor: {
        skin: {
          muted: "var(--color-border-muted)",
          badgeBorder: "var(--color-border-batch)",
          subtle: 'rgba(255,255,255,0.05)',
          borderHover: "var(--color-border-hover)"
        }
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
