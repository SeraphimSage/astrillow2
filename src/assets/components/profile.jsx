import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
	const { user, isAuthenticated, isLoading } = useAuth0();

	if (isLoading) {
		return <div>Loading ...</div>;
	}

	return (
		isAuthenticated && (
			<div>
				<h2>{user.name}</h2>
				<img
					src={user.picture}
					alt={user.name}
				/>
				<p>{user.email}</p>
			</div>
		)
	);
};

export default Profile;
