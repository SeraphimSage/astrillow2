import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./assets/css/index.css";
import { App, SpaceActs } from "./assets/components/componentIndex.jsx";

const router = createBrowserRouter([
	{ path: "/", element: <App /> },
	{ path: "/spaceacts", element: <SpaceActs /> },
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
