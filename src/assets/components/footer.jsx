function Footer() {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<footer className="bg-gray-900/60 backdrop-blur-lg fixed bottom-0 inset-x-0 z-50 border-b border-gray-700/50">
			<div className="container mx-auto text-center flex items-center justify-between p-4">
				<p className="text-sm">
					&copy; {new Date().getFullYear()} Astrillow. All rights reserved.
				</p>
				<button
					onClick={scrollToTop}
					className="bg-neon-blue text-neon-blue font-bold py-2 px-4 rounded-full
                        shadow-lg hover:bg-electric-green transition-colors duration-300
                        hover:shadow-neon-glow
"
				>
					Back to Top
				</button>
			</div>
		</footer>
	);
}
export default Footer;
