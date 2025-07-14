import axios from "axios";

export interface UserProfile {
	id: string;
	name: string;
	email: string;
	profilePicture?: string;
}

export async function getUserProfile(userId: string): Promise<UserProfile> {
	const endpoint = `/api/users/${userId}`;
	try {
		const response = await axios.get(endpoint);
		return response.data as UserProfile;
	} catch (error) {
		console.error("Error fetching user profile:", error);
		throw new Error("Failed to fetch user profile");
	}
}
