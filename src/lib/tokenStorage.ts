/**
 * Token storage utilities for managing authentication tokens in localStorage
 * Provides a centralized interface for storing and retrieving access and refresh tokens
 */

export const TokenStorage = {
	/**
	 * Get the access token from localStorage
	 * @returns The access token or null if not found
	 */
	getAccessToken: (): string | null => {
		return localStorage.getItem('lumora_access_token');
	},

	/**
	 * Get the refresh token from localStorage
	 * @returns The refresh token or null if not found
	 */
	getRefreshToken: (): string | null => {
		return localStorage.getItem('lumora_refresh_token');
	},

	/**
	 * Store both access and refresh tokens in localStorage
	 * @param accessToken - The access token to store
	 * @param refreshToken - The refresh token to store
	 */
	setTokens: (accessToken: string, refreshToken: string): void => {
		localStorage.setItem('lumora_access_token', accessToken);
		localStorage.setItem('lumora_refresh_token', refreshToken);
	},

	/**
	 * Clear all authentication tokens from localStorage
	 */
	clearTokens: (): void => {
		localStorage.removeItem('lumora_access_token');
		localStorage.removeItem('lumora_refresh_token');
	},

	/**
	 * Check if both tokens are present in localStorage
	 * @returns True if both tokens exist, false otherwise
	 */
	hasTokens: (): boolean => {
		return !!(TokenStorage.getAccessToken() && TokenStorage.getRefreshToken());
	}
};
