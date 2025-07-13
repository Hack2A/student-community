import axios from "axios";

export interface GoogleLoginResponse {
	message: string;
	isNewUser: boolean;
	access_token: string;
	token_type: string;
}

export async function googleLogin(
	idToken: string
): Promise<GoogleLoginResponse> {
	const endpoint = "localhost:5000/auth/login";
	try {
		const response = await axios.post(endpoint, { token: idToken });
		const responseData = response.data as GoogleLoginResponse;

		// Save the token to localStorage
		localStorage.setItem("userToken", responseData.access_token);

		// Remove this if using HTTPCookies
		if (responseData && responseData.access_token) {
			axios.defaults.headers.common[
				"Authorization"
			] = `Bearer ${responseData.access_token}`;
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
