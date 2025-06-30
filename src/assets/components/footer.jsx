function Footer() {
	return (
		<footer className="bg-gray-900/60 backdrop-blur-lg fixed bottom-0 inset-x-0 z-50 border-b border-gray-700/50">
			<div className="container mx-auto text-center">
				<p className="text-sm">
					&copy; {new Date().getFullYear()} Astrillow. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
export default Footer;
