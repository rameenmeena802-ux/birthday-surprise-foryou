/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FFF9E6',
          100: '#FFF0B3',
          200: '#FFE680',
          300: '#FFD94D',
          400: '#FFCC1A',
          500: '#D4AF37',
          600: '#B8960F',
          700: '#9A7D0C',
          800: '#7C640A',
          900: '#5E4B07',
        },
        luxury: {
          black: '#0A0A0A',
          charcoal: '#1A1A1A',
          slate: '#2A2A2A',
          cream: '#F5F0E8',
        },
        glow: {
          gold: '#FFD700',
          warm: '#FFA500',
          soft: '#FFE4B5',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Cormorant Garamond', 'serif'],
        elegant: ['Great Vibes', 'cursive'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 3s linear infinite',
        'sparkle': 'sparkle 1.5s ease-in-out infinite',
        'rise': 'rise 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.8s ease-out',
        'fade-in': 'fadeIn 1s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'typewriter': 'typewriter 3s steps(40) 1s forwards',
        'blink': 'blink 1s step-end infinite',
        'confetti': 'confetti 3s ease-in-out infinite',
        'firework': 'firework 1.5s ease-out forwards',
        'star-twinkle': 'starTwinkle 2s ease-in-out infinite',
        'heart-beat': 'heartBeat 1.2s ease-in-out infinite',
        'candle-flicker': 'candleFlicker 0.3s ease-in-out infinite alternate',
        'rotate-slow': 'rotateSlow 20s linear infinite',
        'bounce-soft': 'bounceSoft 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(212, 175, 55, 0.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        rise: {
          '0%': { transform: 'translateY(100vh) rotate(0deg)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(-100vh) rotate(720deg)', opacity: '0' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: '#D4AF37' },
        },
        confetti: {
          '0%': { transform: 'translateY(0) rotateZ(0deg)' },
          '100%': { transform: 'translateY(100vh) rotateZ(720deg)' },
        },
        firework: {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '50%': { opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '0' },
        },
        starTwinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.9)' },
          '50%': { opacity: '1', transform: 'scale(1.1)' },
        },
        heartBeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.1)' },
          '50%': { transform: 'scale(1)' },
          '75%': { transform: 'scale(1.1)' },
        },
        candleFlicker: {
          '0%': { transform: 'scaleY(1) scaleX(1)' },
          '100%': { transform: 'scaleY(1.1) scaleX(0.9)' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'gold-glow': '0 0 30px rgba(212, 175, 55, 0.5)',
        'inner-gold': 'inset 0 0 30px rgba(212, 175, 55, 0.1)',
        'luxury': '0 10px 40px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #B8960F 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 50%, #0A0A0A 100%)',
        'shimmer-gold': 'linear-gradient(90deg, transparent 0%, rgba(212, 175, 55, 0.3) 50%, transparent 100%)',
      },
    },
  },
  plugins: [],
};
