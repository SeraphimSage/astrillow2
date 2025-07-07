import { useAuth0 } from "@auth0/auth0-react";
import Menu from "./menu.jsx";
import Footer from "./footer.jsx";

const Profile = () => {
	const { user, isAuthenticated, isLoading } = useAuth0();

	if (isLoading) {
		return <div>Loading ...</div>;
	}

	return isAuthenticated ? (
		<div>
			<Menu />
			<h2 className="text-white text-lg p-4 m-4">{user.name}</h2>
			<img
				src={user.picture}
				alt={user.name}
			/>
			<p className="text-white text-lg p-4 m-4">{user.email}</p>
			<Footer />
		</div>
	) : (
		<div>
			<Menu />
			<h2 className="w-fit bg-dark-space text-white text-2xl font-bold p-4 m-4 rounded-lg shadow-neon-glow">
				Please log in to view your profile
			</h2>
			<Footer />
		</div>
	);
};

export default Profile;
