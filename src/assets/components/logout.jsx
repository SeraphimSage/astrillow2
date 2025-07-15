import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";

const Logout = () => {
	const { logout } = useAuth0();

	return (
		<NavLink
			className="rounded-md px-4 py-2 text-sm font-medium text-neon-blue hover:text-white hover:shadow-neon-glow transform hover:scale-105"
			onClick={() =>
				logout({
					logoutParams: {
						returnTo: window.location.origin + window.location.pathname + "#/",
					},
				})
			}
			aria-label="Log Out"
		>
			Log Out
		</NavLink>
	);
};

export default Logout;
