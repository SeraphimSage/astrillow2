import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
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

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Auth0Provider
			domain={import.meta.env.VITE_AUTH0_DOMAIN}
			clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
			authorizationParams={{ redirect_uri: window.location.origin }}
			useRefreshTokens={true}
			cacheLocation="localstorage"
		>
			<HashRouter>
				<Routes>
					<Route
						path="/"
						element={<App />}
					></Route>
					<Route
						path="/login"
						element={<Login />}
					></Route>
					<Route
						path="/logout"
						element={<Logout />}
					></Route>
					<Route
						path="/profile"
						element={<Profile />}
					></Route>
					<Route
						path="/spaceacts"
						element={<SpaceActs />}
					></Route>
					<Route
						path="/about"
						element={<About />}
					></Route>

					{/* Fallback route */}
					<Route
						path="*"
						element={<FourOhFour />}
					></Route>
				</Routes>
			</HashRouter>
		</Auth0Provider>
	</StrictMode>
);
