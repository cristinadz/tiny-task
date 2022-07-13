import React, { useState } from "react";

function Profile({user}) {
	const [profileData, setProfileData] = useState({
		username: user.name,
		email: user.email,
		// profile_img: user.profile_img,
	});

	// return (
	// 	<form>
	// 		<label name="username">Username</label>
	// 		<input
	// 			type="text"
	// 			id="new_username"
	// 			autoComplete="off"
	// 			value={username}
	// 			onChange={(e) => setUsername(e.target.value)}
	// 		/>

	// 		<label name="email">Email</label>
	// 		<input
	// 			type="text"
	// 			id="email"
	// 			autoComplete="off"
	// 			value={email}
	// 			onChange={(e) => setEmail(e.target.value)}
	// 		/>

	// 		<button type="submit">Save</button>
	// 	</form>
	// );
}

export default Profile;
