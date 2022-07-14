import React, { useState } from "react";

function Profile({ user, setUser }) {
	const [profileData, setProfileData] = useState({
		username: user.username,
		email: user.email,
		// profile_img: user.profile_img,
	});

function handleFormChange(e){
	setProfileData( profileData => ({
		...profileData, [e.target.name]: e.target.value
	}))
}

async function handlePatchProfile(e){
	e.preventDefault()

	const res = await fetch(`/users/${user.id}`,{
		method: "PATCH",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(profileData)
	})

	if (res.ok){
		res.json()
		.then( updatedUser => {
			setUser( updatedUser )
		})
	}
}
	return (
		<form onSubmit={ handlePatchProfile }>
			<label name="username">Username</label>
			<input
				type="text"
				name="username"
				autoComplete="off"
				value={profileData.username}
				onChange={handleFormChange}
			/>

			<label name="email">Email</label>
			<input
				type="text"
				name="email"
				autoComplete="off"
				value={profileData.email}
				onChange={handleFormChange}
			/>

			{/* <label name="profile_img">Profile Image</label>
			<input
				type="text"
				name="email"
				autoComplete="off"
				value={profileData.email}
				onChange={handleFormChange}
			/> */}


			<button type="submit">Save</button>
		</form>
	);
}

export default Profile;
