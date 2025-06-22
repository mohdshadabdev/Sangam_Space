
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		fontFamily: {
			sans: ['Inter', 'system-ui', 'sans-serif'],
			heading: ['Poppins', 'Inter', 'sans-serif'],
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				neon: {
					blue: '#4f8cff',
					purple: '#9836ff',
					orange: '#ff9900',
					red: '#ff2d55',
				},
			},
			borderRadius: {
				'3xl': '2rem',
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			boxShadow: {
				'glow': '0 0 30px 0 rgba(80,150,255,0.3), 0 8px 50px 0 rgba(152,54,255,0.2)',
				'card': '0 4px 30px 0 rgba(80,150,255,0.15), 0 8px 20px rgba(152,54,255,0.1)',
				'neon': '0 0 40px rgba(79,140,255,0.6), 0 0 80px rgba(152,54,255,0.4)',
			},
			gradientColorStops: {
				'blue-purple': ['#4f8cff', '#9836ff'],
				'orange-red': ['#ff9900', '#ff2d55'],
				'light-purple': ['#9286ff', '#ff75c8'],
			},
			keyframes: {
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(32px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in-left': {
					'0%': { opacity: '0', transform: 'translateX(-50px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'slide-in-right': {
					'0%': { opacity: '0', transform: 'translateX(50px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 20px rgba(79,140,255,0.4)' },
					'50%': { boxShadow: '0 0 40px rgba(79,140,255,0.8), 0 0 60px rgba(152,54,255,0.6)' }
				},
				'rotate-border': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				},
				'cyber-glitch': {
					'0%, 100%': { transform: 'translate(0)' },
					'10%': { transform: 'translate(-2px, 2px)' },
					'20%': { transform: 'translate(2px, -2px)' },
					'30%': { transform: 'translate(-2px, -2px)' },
					'40%': { transform: 'translate(2px, 2px)' },
					'50%': { transform: 'translate(-2px, 2px)' },
					'60%': { transform: 'translate(2px, -2px)' },
					'70%': { transform: 'translate(-2px, -2px)' },
					'80%': { transform: 'translate(2px, 2px)' },
					'90%': { transform: 'translate(-2px, 2px)' }
				}
			},
			animation: {
				'fade-in-up': 'fade-in-up 0.8s cubic-bezier(.39,.575,.565,1.000) both',
				'slide-in-left': 'slide-in-left 0.6s cubic-bezier(.39,.575,.565,1.000) both',
				'slide-in-right': 'slide-in-right 0.6s cubic-bezier(.39,.575,.565,1.000) both',
				'float': 'float 3s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'rotate-border': 'rotate-border 8s linear infinite',
				'shimmer': 'shimmer 2s linear infinite',
				'cyber-glitch': 'cyber-glitch 0.3s ease-in-out infinite',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
