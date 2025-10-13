import { useEffect, useState } from 'react';
import { TokenStorage } from '../lib/tokenStorage';
import { authService } from '../services/authService';
import { LumoraAuthTokens, LumoraUser } from '../types';

export interface UseAuthCallbackConfig {
	onSuccess?: (tokens: LumoraAuthTokens, user: LumoraUser) => void;
	onError?: (error: Error) => void;
	redirectPath?: string;
	apiBaseUrl?: string;
}

/**
 * Hook for handling OAuth callback from Lumora API
 * Extracts tokens from URL parameters and stores them in localStorage
 * 
 * @param config - Configuration object for the callback handler
 * @returns Object with loading state and error state
 */
export const useAuthCallback = (config?: UseAuthCallbackConfig) => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);
	
	useEffect(() => {
		const handleCallback = async () => {
			try {
				// Parse URL parameters sent by Lumora API after OAuth completion
				const params = new URLSearchParams(window.location.search);
				const accessToken = params.get('accessToken');
				const refreshToken = params.get('refreshToken');
				const errorParam = params.get('error');
				
				// Check for error parameter from OAuth flow
				if (errorParam) {
					throw new Error(decodeURIComponent(errorParam));
				}
				
				// Validate tokens are present in URL
				if (!accessToken || !refreshToken) {
					throw new Error('Missing authentication tokens in callback URL');
				}
				
				// Store tokens in localStorage
				TokenStorage.setTokens(accessToken, refreshToken);
				
				// Fetch user profile using the new access token
				const user = await authService.getCurrentUser();
				
				// Call success callback
				config?.onSuccess?.({ accessToken, refreshToken }, user);
				
				// Security: Clean up URL by removing tokens from address bar
				// Redirect to specified path or default to dashboard
				const redirectPath = config?.redirectPath || '/dashboard';
				window.history.replaceState({}, document.title, redirectPath);
				
				setLoading(false);
			} catch (err) {
				const error = err as Error;
				setError(error);
				config?.onError?.(error);
				setLoading(false);
			}
		};
		
		handleCallback();
	}, [config?.redirectPath]);
	
	return { loading, error };
};
