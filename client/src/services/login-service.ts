import axios from "axios";

export interface GoogleLoginResponse {
	status: string;
	message: string;
	token: string;
	user: {
		id: string;
		name: string;
		email: string;
		picture: string;
	};
}

export async function googleLogin(
	idToken: string
): Promise<GoogleLoginResponse> {
	const endpoint = "http://localhost:5000/auth/login";
	try {
		const response = await axios.post(endpoint, { token: idToken });
		const responseData = response.data as GoogleLoginResponse;

		// Save the token to localStorage
		localStorage.setItem("userToken", responseData.token);

		// Set authorization header for future requests
		if (responseData && responseData.token) {
			axios.defaults.headers.common[
				"Authorization"
			] = `Bearer ${responseData.token}`;
		}
		return responseData;
	} catch (error: any) {
		// If it's an AxiosError and has a response (e.g., 401, 400, etc.)
		if (axios.isAxiosError(error) && error.response) {
			// Re-throw the original AxiosError directly.
			// This is crucial. The SignInForm component needs the original error.response.status.
			throw error;
		}
		// For non-Axios errors or Axios errors without a response (e.g., network issues)
		throw new Error(
			"Google login failed. Please check your internet connection or try again."
		);
	}
}
