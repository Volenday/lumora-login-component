/**
 * API constants and configuration
 * Centralized place for API-related constants and default values
 */

export const API_CONSTANTS = {
	// Default API endpoints
	ENDPOINTS: {
		LOGIN: '/auth/login',
		LOGOUT: '/auth/logout',
		REFRESH: '/auth/refresh',
		GOOGLE_AUTH: '/auth/google',
		GOOGLE_CALLBACK: '/auth/google/callback',
		USER_ME: '/users/me'
	},

	// Token storage keys
	STORAGE_KEYS: {
		ACCESS_TOKEN: 'lumora_access_token',
		REFRESH_TOKEN: 'lumora_refresh_token'
	},

	// Default API configuration
	DEFAULT_CONFIG: {
		API_BASE_URL: 'https://dev.api.lumora.capital',
		TIMEOUT: 10000, // 10 seconds
		RETRY_ATTEMPTS: 1
	},

	// HTTP status codes
	STATUS_CODES: {
		UNAUTHORIZED: 401,
		FORBIDDEN: 403,
		NOT_FOUND: 404,
		INTERNAL_SERVER_ERROR: 500
	}
} as const;

export const ERROR_MESSAGES = {
	NO_ACCESS_TOKEN: 'No access token available',
	NO_REFRESH_TOKEN: 'No refresh token available',
	TOKEN_REFRESH_FAILED: 'Token refresh failed',
	API_REQUEST_FAILED: 'API request failed',
	NETWORK_ERROR: 'Network error occurred',
	INVALID_CREDENTIALS: 'Invalid credentials',
	UNAUTHORIZED: 'Unauthorized access',
	FORBIDDEN: 'Access forbidden',
	NOT_FOUND: 'Resource not found',
	INTERNAL_ERROR: 'Internal server error'
} as const;
