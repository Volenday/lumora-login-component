import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { TokenStorage } from './tokenStorage';
import { API_CONSTANTS, ERROR_MESSAGES } from './constants';
import { LumoraAuthTokens } from '../types';

/**
 * Create a configured Axios instance for API communication
 * @param baseURL - The base URL for the API
 * @param apiKey - Optional API key for authentication
 * @returns Configured Axios instance
 */
export const createApiClient = (baseURL: string, apiKey?: string): AxiosInstance => {
	const client = axios.create({
		baseURL,
		timeout: API_CONSTANTS.DEFAULT_CONFIG.TIMEOUT,
		headers: {
			'Content-Type': 'application/json',
			...(apiKey && { 'X-API-Key': apiKey })
		}
	});

	// Request interceptor to attach access token
	client.interceptors.request.use(
		(config: AxiosRequestConfig) => {
			const accessToken = TokenStorage.getAccessToken();
			if (accessToken && config.headers) {
				config.headers.Authorization = `Bearer ${accessToken}`;
			}
			return config;
		},
		(error) => {
			return Promise.reject(error);
		}
	);

	// Response interceptor to handle token refresh
	client.interceptors.response.use(
		(response: AxiosResponse) => response,
		async (error) => {
			const originalRequest = error.config;

			// If 401 and we haven't retried yet
			if (
				error.response?.status === API_CONSTANTS.STATUS_CODES.UNAUTHORIZED &&
				!originalRequest._retry
			) {
				originalRequest._retry = true;

				try {
					const refreshToken = TokenStorage.getRefreshToken();
					if (!refreshToken) {
						throw new Error(ERROR_MESSAGES.NO_REFRESH_TOKEN);
					}

					// Call refresh endpoint
					const refreshResponse = await client.post(API_CONSTANTS.ENDPOINTS.REFRESH, {
						refreshToken
					});

					const newTokens: LumoraAuthTokens = {
						accessToken: refreshResponse.data.accessToken,
						refreshToken: refreshResponse.data.refreshToken
					};

					// Update stored tokens
					TokenStorage.setTokens(newTokens.accessToken, newTokens.refreshToken);

					// Update authorization header and retry
					if (originalRequest.headers) {
						originalRequest.headers.Authorization = `Bearer ${newTokens.accessToken}`;
					}
					return client(originalRequest);
				} catch (refreshError) {
					// Refresh failed, clear tokens and redirect to login
					TokenStorage.clearTokens();
					window.location.href = '/login';
					return Promise.reject(refreshError);
				}
			}

			return Promise.reject(error);
		}
	);

	return client;
};

// Default API client instance (will be configured when authConfig is provided)
let apiClient: AxiosInstance | null = null;

/**
 * Get or create the API client instance
 * @param baseURL - The base URL for the API
 * @param apiKey - Optional API key for authentication
 * @returns The API client instance
 */
export const getApiClient = (baseURL?: string, apiKey?: string): AxiosInstance => {
	if (!apiClient && baseURL) {
		apiClient = createApiClient(baseURL, apiKey);
	}
	if (!apiClient) {
		throw new Error('API client not initialized. Please provide baseURL.');
	}
	return apiClient;
};

/**
 * Reset the API client instance (useful for testing or reconfiguration)
 */
export const resetApiClient = (): void => {
	apiClient = null;
};
