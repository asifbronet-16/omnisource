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
          primaryCard: '#041232',
          backgroundHighlight:"rgb(15 92 242 / 0.1)" 
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
        // Linear gradient matching the banner in your image (left to right)
        'skin-gradient-primary': 'linear-gradient(to right, #000000, #1b1a51, #0086ca)',
        // Alternative smooth primary navy gradient scale
        'skin-navy-scale': 'linear-gradient(to right, #1b1a51, #35469d)', 'text-gradient-primary':
          'linear-gradient(to right, #ffffff 0%, #e5e7eb 45%, #3b82f6 100%)',
        // Hero Bottom Fade
        'gradient-primary':
          'linear-gradient(to top, rgba(2,11,30,0.95) 0%, rgba(2,11,30,0.5) 40%, transparent 100%)',

        // Left Overlay
        'gradient-left':
          'linear-gradient(to right, rgba(2,11,30,0.85) 0%, transparent 70%)',
        'gradient-cinematic':
          'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)',
        'text-gradient-right':
          'linear-gradient(to right, #ffffff 0%, #e5e7eb 45%, #3b82f6 100%)',
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
