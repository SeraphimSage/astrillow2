import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";

const Login = () => {
	const { loginWithRedirect } = useAuth0();

	return (
		<NavLink
			onClick={() => loginWithRedirect()}
			className="rounded-md px-4 py-2 text-sm font-medium text-neon-blue hover:text-white hover:shadow-neon-glow transform hover:scale-105"
			aria-label="Log In"
			tabIndex="0"
		>
			Log In
		</NavLink>
	);
};

export default Login;
