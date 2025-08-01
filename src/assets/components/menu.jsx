import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import PersonalLogo from "../images/Favicon.png";
import { Login, Logout } from "./componentIndex.jsx";

// This component is a responsive navigation menu that includes a logo, links, and a user profile dropdown.
function Menu() {
	// State to manage the visibility of the mobile menu and profile dropdown
	// Using useState hook to create state variables and their setters
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

	// Using Auth0 for authentication
	const { isAuthenticated, user } = useAuth0();

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const toggleProfileDropdown = () => {
		setIsProfileDropdownOpen(!isProfileDropdownOpen);
	};

	// Reset the mobile menu and profile dropdown state after authentication actions
	const handleAuthActionComplete = () => {
		setIsMobileMenuOpen(false);
		setIsProfileDropdownOpen(false);
	};

	return (
		<nav className="bg-gray-900/60 backdrop-blur-lg fixed top-0 inset-x-0 z-50 border-b border-gray-700/50">
			<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<div className="relative flex h-16 items-center justify-between">
					<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
						{/* <!-- Mobile menu button--> */}
						<button
							type="button"
							className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white "
							aria-controls="mobile-menu"
							aria-expanded={isMobileMenuOpen}
							onClick={toggleMobileMenu}
						>
							<span className="absolute -inset-0.5"></span>
							<span className="sr-only">Open main menu</span>

							<svg
								className={isMobileMenuOpen ? "hidden size-6" : "size-6"}
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								aria-hidden="true"
								data-slot="icon"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
								/>
							</svg>

							<svg
								className={isMobileMenuOpen ? "block size-6" : "hidden size-6"}
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								aria-hidden="true"
								data-slot="icon"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18 18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
					<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ">
						<div className="flex shrink-0 items-center">
							<a
								href="https://seraphimsage.github.io/portfolio/"
								target="_blank"
								end
							>
								<img
									className="
								logo
								h-8 w-auto 
								logo-spin-manual
								will-change-filter 
								transition 
								drop-shadow-[5px_5px_logo-white]							
								hover:drop-shadow-[0_0_1em_logo-white]"
									src={PersonalLogo}
									alt="Seraphic Industries LLC Logo"
								/>
							</a>
						</div>
						<div className="hidden sm:ml-6 sm:block">
							<div className="flex space-x-4">
								{/* Navigation links */}
								<NavLink
									to="/"
									className="rounded-md px-3 py-2 text-sm font-medium text-neon-blue hover:text-white hover:shadow-neon-glow transform hover:scale-105"
									aria-current="page"
									end
								>
									Home
								</NavLink>
								<NavLink
									to="#"
									className="rounded-md px-3 py-2 text-sm font-medium text-neon-blue hover:text-white hover:shadow-neon-glow transform hover:scale-105"
								>
									Saved Asteroids
								</NavLink>
								<NavLink
									to="#"
									className="rounded-md px-3 py-2 text-sm font-medium text-neon-blue hover:text-white hover:shadow-neon-glow transform hover:scale-105"
								>
									Search Asteroids
								</NavLink>
								<NavLink
									to="#"
									className="rounded-md px-3 py-2 text-sm font-medium text-neon-blue hover:text-white hover:shadow-neon-glow transform hover:scale-105"
								>
									Projects
								</NavLink>
								<NavLink
									to="/spaceacts"
									className="rounded-md px-3 py-2 text-sm font-medium text-neon-blue hover:text-white hover:shadow-neon-glow transform hover:scale-105"
								>
									Space Act Info
								</NavLink>
								<NavLink
									to="/about"
									className="rounded-md px-3 py-2 text-sm font-medium text-neon-blue hover:text-white hover:shadow-neon-glow transform hover:scale-105"
								>
									About Astrillow2
								</NavLink>
							</div>
						</div>
					</div>
					<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
						<button
							type="button"
							className="relative rounded-full p-1 text-neon-blue hover:text-white "
						>
							<span className="absolute -inset-1.5"></span>
							<span className="sr-only">View notifications</span>
							<svg
								className="size-6"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								aria-hidden="true"
								data-slot="icon"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
								/>
							</svg>
						</button>
						{isAuthenticated ? (
							// User is authenticated: Show Profile Dropdown
							<div className="relative ml-3">
								<div>
									<button
										type="button"
										className="relative flex rounded-md text-sm font-medium text-neon-blue hover:text-white hover:shadow-neon-glow transform hover:scale-105 "
										id="user-menu-button"
										aria-expanded={isProfileDropdownOpen}
										aria-haspopup="true"
										onClick={toggleProfileDropdown}
									>
										<span className="absolute -inset-1.5"></span>
										<span className="sr-only">Open user menu</span>
										<img
											className="size-8 rounded-full"
											src={user?.picture || "https://via.placeholder.com/150"}
											alt="user profile image"
										/>
									</button>
								</div>

								{/* Dropdown menu, show/hide based on menu state. */}
								{isProfileDropdownOpen && ( // Conditionally render based on state
									<div
										className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-900/80 backdrop-blur-md py-1 shadow-lg ring-1 ring-neon-blue/30 focus:outline-none border border-gray-700/50"
										role="menu"
										aria-orientation="vertical"
										aria-labelledby="user-menu-button"
										tabIndex="-1"
									>
										<NavLink
											to="/profile"
											className="block px-4 py-2 text-sm text-white"
											role="menuitem"
											tabIndex="-1"
											id="user-menu-item-0"
										>
											Your Profile
										</NavLink>
										<NavLink
											to="#"
											className="block px-4 py-2 text-sm text-white"
											role="menuitem"
											tabIndex="-1"
											id="user-menu-item-1"
										>
											Settings
										</NavLink>
										<Logout onActionComplete={handleAuthActionComplete} />
									</div>
								)}
							</div>
						) : (
							<Login onActionComplete={handleAuthActionComplete} />
						)}
					</div>
				</div>
			</div>
			{/* <!-- Mobile menu, show/hide based on menu state. --> */}
			<div
				className={isMobileMenuOpen ? "sm:hidden" : "hidden sm:hidden"}
				id="mobile-menu"
			>
				<div className="space-y-1 px-2 pt-2 pb-3">
					<NavLink
						to="/"
						className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
						aria-current="page"
					>
						Home
					</NavLink>
					<NavLink
						to="#"
						className="block rounded-md px-3 py-2 text-base font-medium text-neon-blue hover:bg-gray-700 hover:text-white"
					>
						Saved Asteroids
					</NavLink>
					<NavLink
						to="#"
						className="block rounded-md px-3 py-2 text-base font-medium text-neon-blue hover:bg-gray-700 hover:text-white"
					>
						Search Asteroids
					</NavLink>
					<NavLink
						to="#"
						className="block rounded-md px-3 py-2 text-base font-medium text-neon-blue hover:bg-gray-700 hover:text-white"
					>
						Projects
					</NavLink>
					<NavLink
						to="/spaceacts"
						className="block rounded-md px-3 py-2 text-base font-medium text-neon-blue hover:bg-gray-700 hover:text-white"
					>
						Space Act Info
					</NavLink>
				</div>
			</div>
		</nav>
	);
}

export default Menu;
