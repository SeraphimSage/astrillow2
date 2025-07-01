import React, { useEffect } from "react";

function Footer() {
	const [isVisible, setIsVisible] = React.useState(false);

	const toggleVisibility = () => {
		if (window.pageYOffset > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};
	useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<footer className="bg-gray-900/60 backdrop-blur-lg fixed bottom-0 inset-x-0 z-50 border-t border-gray-700/50 py-2">
			<div className="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex items-center justify-between">
				<p className="text-sm whitespace-nowrap">
					&copy; {new Date().getFullYear()} Astrillow. All rights reserved.
				</p>
				{isVisible && (
					<button
						onClick={scrollToTop}
						className="bg-neon-blue text-neon-blue font-bold py-1 px-2 rounded-full
					shadow-lg hover:bg-electric-green transition-all duration-300
					focus:outline-none focus:ring-2 focus:ring-neon-blue focus:ring-opacity-75
                            hover:shadow-neon-glow transform hover:scale-105"
						aria-label="Back to Top"
					>
						Back to Top
					</button>
				)}
			</div>
		</footer>
	);
}
export default Footer;
