// import { useState } from "react";

import Menu from "./menu.jsx";
import Footer from "./footer.jsx";

import Profile from "./profile.jsx";

function App() {
	return (
		<>
			<Menu />
			<main className="pt-16">
				<h1>Astrillow2</h1>

				<Profile />
			</main>
			<Footer />
		</>
	);
}

export default App;
