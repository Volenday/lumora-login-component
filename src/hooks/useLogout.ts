import { useCallback } from 'react';
import { TokenStorage } from '../lib/tokenStorage';
import { authService } from '../services/authService';
import { LumoraAuthConfig } from '../types';

/**
 * Hook for handling user logout
 * Provides a logout function that calls the API and clears local tokens
 * 
 * @param authConfig - Authentication configuration for API integration
 * @returns Object with logout function
 */
export const useLogout = (authConfig?: LumoraAuthConfig) => {
	const logout = useCallback(async () => {
		const refreshToken = TokenStorage.getRefreshToken();
		
		// Call API logout if in API integration mode
		if (authConfig?.useApiIntegration && authConfig?.apiBaseUrl && refreshToken) {
			try {
				await authService.logout(refreshToken);
			} catch (error) {
				console.error('Logout API call failed:', error);
				// Continue with local logout even if API call fails
			}
		}
		
		// Clear tokens from localStorage
		TokenStorage.clearTokens();
		
		// Redirect to login or home
		window.location.href = '/login';
	}, [authConfig?.useApiIntegration, authConfig?.apiBaseUrl]);
	
	return { logout };
};
