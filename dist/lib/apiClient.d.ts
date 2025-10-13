import { AxiosInstance } from 'axios';
/**
 * Create a configured Axios instance for API communication
 * @param baseURL - The base URL for the API
 * @param apiKey - Optional API key for authentication
 * @returns Configured Axios instance
 */
export declare const createApiClient: (baseURL: string, apiKey?: string) => AxiosInstance;
/**
 * Get or create the API client instance
 * @param baseURL - The base URL for the API
 * @param apiKey - Optional API key for authentication
 * @returns The API client instance
 */
export declare const getApiClient: (baseURL?: string, apiKey?: string) => AxiosInstance;
/**
 * Reset the API client instance (useful for testing or reconfiguration)
 */
export declare const resetApiClient: () => void;
//# sourceMappingURL=apiClient.d.ts.map