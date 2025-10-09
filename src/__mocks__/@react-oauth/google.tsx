import React from 'react';

// Mock GoogleOAuthProvider
export const GoogleOAuthProvider: React.FC<{
	children: React.ReactNode;
	clientId: string;
}> = ({ children }) => {
	return <>{children}</>;
};

// Mock useGoogleLogin hook
export const useGoogleLogin = (config: {
	onSuccess: (response: {
		access_token: string;
		expires_in: number;
		scope: string;
		token_type: string;
	}) => void;
	onError: (error: { error_description?: string }) => void;
}) => {
	return () => {
		// Simulate successful Google OAuth response
		const mockResponse = {
			access_token: 'mock-google-access-token',
			expires_in: 3600,
			scope: 'openid profile email',
			token_type: 'Bearer'
		};
		config.onSuccess(mockResponse);
	};
};
