import { getApiClient } from '../lib/apiClient';
import { API_CONSTANTS } from '../lib/constants';
import { LumoraAuthTokens, LumoraUser } from '../types';

/**
 * Authentication service for interacting with the Lumora API
 * Provides methods for login, logout, token refresh, and user management
 */
export const authService = {
	/**
	 * Authenticate user with email and password
	 * @param email - User's email address
	 * @param password - User's password
	 * @returns Promise resolving to authentication tokens
	 */
	login: async (email: string, password: string): Promise<LumoraAuthTokens> => {
		try {
			const client = getApiClient();
			const response = await client.post(API_CONSTANTS.ENDPOINTS.LOGIN, {
				email,
				password
			});

			return {
				accessToken: response.data.accessToken,
				refreshToken: response.data.refreshToken
			};
		} catch (error: any) {
			throw new Error(
				error.response?.data?.message || 
				error.message || 
				'Login failed'
			);
		}
	},

	/**
	 * Logout user and invalidate refresh token
	 * @param refreshToken - The refresh token to invalidate
	 * @returns Promise resolving when logout is complete
	 */
	logout: async (refreshToken: string): Promise<void> => {
		try {
			const client = getApiClient();
			await client.post(API_CONSTANTS.ENDPOINTS.LOGOUT, {
				refreshToken
			});
		} catch (error: any) {
			// Log error but don't throw - logout should succeed even if API call fails
			console.error('Logout API call failed:', error);
		}
	},

	/**
	 * Refresh access token using refresh token
	 * @param refreshToken - The refresh token
	 * @returns Promise resolving to new authentication tokens
	 */
	refresh: async (refreshToken: string): Promise<LumoraAuthTokens> => {
		try {
			const client = getApiClient();
			const response = await client.post(API_CONSTANTS.ENDPOINTS.REFRESH, {
				refreshToken
			});

			return {
				accessToken: response.data.accessToken,
				refreshToken: response.data.refreshToken
			};
		} catch (error: any) {
			throw new Error(
				error.response?.data?.message || 
				error.message || 
				'Token refresh failed'
			);
		}
	},

	/**
	 * Get current user profile
	 * @returns Promise resolving to user profile
	 */
	getCurrentUser: async (): Promise<LumoraUser> => {
		try {
			const client = getApiClient();
			const response = await client.get(API_CONSTANTS.ENDPOINTS.USER_ME);

			return {
				id: response.data.id,
				email: response.data.email,
				name: response.data.name
			};
		} catch (error: any) {
			throw new Error(
				error.response?.data?.message || 
				error.message || 
				'Failed to fetch user profile'
			);
		}
	},

	/**
	 * Initiate Google OAuth flow by redirecting to Lumora API
	 * @param redirectUri - The URI to redirect to after OAuth completion
	 * @param apiBaseUrl - The base URL of the Lumora API
	 */
	initiateGoogleOAuth: (redirectUri: string, apiBaseUrl: string): void => {
		// Add prompt=select_account to force Google to show account selection
		const googleAuthUrl = `${apiBaseUrl}${API_CONSTANTS.ENDPOINTS.GOOGLE_AUTH}?redirect_uri=${encodeURIComponent(redirectUri)}&prompt=select_account`;
		console.log('🚀 Initiating Google OAuth redirect...');
		console.log('📍 Redirect URL:', googleAuthUrl);
		console.log('🔙 Callback URL:', redirectUri);
		window.location.href = googleAuthUrl;
	}
};
