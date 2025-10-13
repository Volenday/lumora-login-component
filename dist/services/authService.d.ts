import { LumoraAuthTokens, LumoraUser } from '../types';
/**
 * Authentication service for interacting with the Lumora API
 * Provides methods for login, logout, token refresh, and user management
 */
export declare const authService: {
    /**
     * Authenticate user with email and password
     * @param email - User's email address
     * @param password - User's password
     * @returns Promise resolving to authentication tokens
     */
    login: (email: string, password: string) => Promise<LumoraAuthTokens>;
    /**
     * Logout user and invalidate refresh token
     * @param refreshToken - The refresh token to invalidate
     * @returns Promise resolving when logout is complete
     */
    logout: (refreshToken: string) => Promise<void>;
    /**
     * Refresh access token using refresh token
     * @param refreshToken - The refresh token
     * @returns Promise resolving to new authentication tokens
     */
    refresh: (refreshToken: string) => Promise<LumoraAuthTokens>;
    /**
     * Get current user profile
     * @returns Promise resolving to user profile
     */
    getCurrentUser: () => Promise<LumoraUser>;
    /**
     * Initiate Google OAuth flow by redirecting to Lumora API
     * @param redirectUri - The URI to redirect to after OAuth completion
     * @param apiBaseUrl - The base URL of the Lumora API
     */
    initiateGoogleOAuth: (redirectUri: string, apiBaseUrl: string) => void;
};
//# sourceMappingURL=authService.d.ts.map