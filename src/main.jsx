import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/App.css";
import "./assets/css/index.css";
import App from "./assets/components/App.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
		<p>Test</p>
	</StrictMode>
);
