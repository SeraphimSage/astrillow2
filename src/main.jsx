import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

import "./assets/css/index.css";
import {
	App,
	About,
	FourOhFour,
	Login,
	Logout,
	Profile,
	SpaceActs,
} from "./assets/components/componentIndex.jsx";

const router = createBrowserRouter([
	{ path: "/", element: <App /> },
	{ path: "/login", element: <Login /> },
	{ path: "/logout", element: <Logout /> },
	{ path: "/profile", element: <Profile /> },
	{ path: "/spaceacts", element: <SpaceActs /> },
	{ path: "/about", element: <About /> },

	// Fallback route for unmatched paths
	{ path: "*", element: <FourOhFour /> },
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Auth0Provider
			domain={import.meta.env.VITE_AUTH0_DOMAIN}
			clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
			authorizationParams={{ redirect_uri: window.location.origin }}
			useRefreshTokens={true}
			cacheLocation="localstorage"
		>
			<RouterProvider router={router} />
		</Auth0Provider>
	</StrictMode>
);
