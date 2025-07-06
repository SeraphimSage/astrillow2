import { NavLink } from "react-router-dom";

import Menu from "./menu.jsx";
import Footer from "./footer.jsx";

function About() {
	return (
		<div>
			<Menu />

			<div className="bg-gray-900/80 p-4 text-white">
				<p className=" bg-gray-900/80 p-1 text-white">
					This is a React-based application that uses the Spacekit library to
					display a simulation of the solar system and asteroids.
				</p>
				<p className="rounded-full bg-gray-900/80 p-1 text-white text-left">
					Tools used to accomplish this:
				</p>
				<ul className="list-disc list-inside bg-gray-900/80 p-1 text-white text-left">
					<li className="text-white">
						<NavLink
							to="https://auth0.com/"
							target="_blank"
							className="px-3 py-2 font-medium text-neon-blue hover:text-white"
							aria-current="page"
							end
						>
							AuthO
						</NavLink>
						for authentication
					</li>
					<li className="text-white">
						<NavLink
							to="https://api.nasa.gov/"
							target="_blank"
							className="px-3 py-2 font-medium text-neon-blue hover:text-white"
							aria-current="page"
							end
						>
							NASA API
						</NavLink>
						for asteroid data
					</li>
					<li className="text-white">
						<NavLink
							to="https://react.dev/"
							target="_blank"
							className="px-3 py-2 font-medium text-neon-blue hover:text-white"
							aria-current="page"
							end
						>
							React using Vite
						</NavLink>
						for the frontend framework
					</li>
					<li className="text-white">
						<NavLink
							to="https://reactrouter.com/home"
							target="_blank"
							className="px-3 py-2 font-medium text-neon-blue hover:text-white"
							aria-current="page"
							end
						>
							React Router
						</NavLink>
						for routing
					</li>
					<li className="text-white">
						<NavLink
							to="https://typpo.github.io/spacekit/docs/"
							target="_blank"
							className="px-3 py-2 font-medium text-neon-blue hover:text-white"
							aria-current="page"
							end
						>
							Spacekit
						</NavLink>
						for the solar system simulation
					</li>
					<li className="text-white">
						<NavLink
							to="https://tailwindcss.com/"
							target="_blank"
							className="px-3 py-2 font-medium text-neon-blue hover:text-white"
							aria-current="page"
							end
						>
							Tailwind CSS
						</NavLink>
						for styling
					</li>
				</ul>
			</div>
			<Footer />
		</div>
	);
}

export default About;
