module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"dark-space": "#0A0A1A",
				"neon-blue": "#00F0FF",
				"electric-green": "#00FF7F",
				"cyber-purple": "#8A2BE2",
				"deep-gray": "#1A202C",
				"glow-white": "#F0F0F0",
				"scanline-gray": "#2D3748",
				"futuristic-yellow": "#FFD700",
				"neon-pink": "#FF1493",
				"logo-white": "#cbd8e5",
			},
			fontFamily: {
				futuristic: ['"Space Mono"', "monospace"], // Example, choose a cool font
				display: ['"Orbitron"', "sans-serif"], // Another example for headings
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
		},
	},
	plugins: [
		plugin(function ({ addVariant, e, postcss }) {
			addVariant("firefox", ({ container, separator }) => {
				const isFirefoxRule = postcss.atRule({
					name: "-moz-document",
					params: "url-prefix()",
				});
				isFirefoxRule.append(container.nodes);
				container.append(isFirefoxRule);
				isFirefoxRule.walkRules((rule) => {
					rule.selector = `.${e(
						`firefox${separator}${rule.selector.slice(1)}`
					)}`;
				});
			});
		}),
		require("tailwindcss-animate"),
		require("tailwind-scrollbar"),
	],
};
