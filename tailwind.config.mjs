module.exports = {
	theme: {
		extend: {
			colors: {
				"dark-space": "#0A0A1A",
				"neon-blue": "#00F0FF",
				"electric-green": "#00FF7F",
				"cyber-purple": "#8A2BE2",
				"deep-gray": "#1A202C",
			},
			fontFamily: {
				futuristic: ['"Space Mono"', "monospace"], // Example, choose a cool font
				display: ['"Orbitron"', "sans-serif"], // Another example for headings
			},
			boxShadow: {
				"neon-glow":
					"0 0 10px rgba(0, 240, 255, 0.7), 0 0 20px rgba(0, 240, 255, 0.5)",
			},
			keyframes: {
				flicker: {
					"0%, 100%": { opacity: 1 },
					"50%": { opacity: 0.8 },
					"75%": { opacity: 0.6 },
				},
				scanline: {
					"0%": { transform: "translateY(0%)" },
					"100%": { transform: "translateY(100%)" },
				},
			},
			animation: {
				"flicker-slow": "flicker 4s linear infinite",
				"scan-loop": "scanline 2s linear infinite alternate",
			},
			plugins: [],
		},
	},
};
