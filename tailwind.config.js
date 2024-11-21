/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
  	extend: {
  		colors: {
  			neon: {
  				codGray: '#08080F',
  				governorBay: '#495495',
  				blueBell: '#8B94C6',
  				dukeBlue: '#0000AF',
  				electricBlue: '#4000D6',
  				blue: '#1C5BFA',
  				munsellBlue: '#0087AF',
  				aqua: '#03EDF9',
  				fadedCyan: '#8BFFFF',
  				white: '#FFFFFF',
  				gainsboro: '#DDDDDD',
  				mountainMist: '#949494',
  				nobel: '#B6B1B1',
  				dimGray: '#6F6868',
  				black: '#000000',
  				springGreen: '#0BEB99',
  				atlantis: '#84DD29',
  				inchWorm: '#ADFF56',
  				slateBlue: '#9466FF',
  				perfume: '#D4C2FF',
  				gamboge: '#995E00',
  				orangePeel: '#FF9E01',
  				koromiko: '#FFC466',
  				siren: '#740246',
  				royalHeath: '#A23779',
  				persianRose: '#FC28A8',
  				fuchsia: '#FF00FF',
  				lavender: '#FFAAFF',
  				ebony: '#150621',
  				purple: '#5E00AB',
  				darkOrchid: '#8A2DC0',
  				mediumOrchid: '#A34DD5',
  				operaMauve: '#AF87AF',
  				redOxide: '#660C00',
  				scarlet: '#FF1E01',
  				bittersweet: '#FF7866',
  				butteredRum: '#997A00',
  				tangerine: '#FFCC00',
  				drover: '#FFEB99'
  			},
  			border: 'rgb(var(--border) / <alpha-value>)',
  			input: 'rgb(var(--input) / <alpha-value>)',
  			ring: 'rgb(var(--ring) / <alpha-value>)',
  			background: 'rgb(var(--background) / <alpha-value>)',
  			foreground: 'rgb(var(--foreground) / <alpha-value>)',
  			primary: {
  				DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
  				foreground: 'rgb(var(--primary-foreground) / <alpha-value>)'
  			},
  			secondary: {
  				DEFAULT: 'rgb(var(--secondary) / <alpha-value>)',
  				foreground: 'rgb(var(--secondary-foreground) / <alpha-value>)'
  			},
  			destructive: {
  				DEFAULT: 'rgb(var(--destructive) / <alpha-value>)',
  				foreground: 'rgb(var(--destructive-foreground) / <alpha-value>)'
  			},
  			muted: {
  				DEFAULT: 'rgb(var(--muted) / <alpha-value>)',
  				foreground: 'rgb(var(--muted-foreground) / <alpha-value>)'
  			},
  			accent: {
  				DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
  				foreground: 'rgb(var(--accent-foreground) / <alpha-value>)'
  			},
  			popover: {
  				DEFAULT: 'rgb(var(--popover) / <alpha-value>)',
  				foreground: 'rgb(var(--popover-foreground) / <alpha-value>)'
  			},
  			card: {
  				DEFAULT: 'rgb(var(--card) / <alpha-value>)',
  				foreground: 'rgb(var(--card-foreground) / <alpha-value>)'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
