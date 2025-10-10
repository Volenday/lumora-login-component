/**
 * Token storage utilities for managing authentication tokens in localStorage
 * Provides a centralized interface for storing and retrieving access and refresh tokens
 */
export declare const TokenStorage: {
    /**
     * Get the access token from localStorage
     * @returns The access token or null if not found
     */
    getAccessToken: () => string | null;
    /**
     * Get the refresh token from localStorage
     * @returns The refresh token or null if not found
     */
    getRefreshToken: () => string | null;
    /**
     * Store both access and refresh tokens in localStorage
     * @param accessToken - The access token to store
     * @param refreshToken - The refresh token to store
     */
    setTokens: (accessToken: string, refreshToken: string) => void;
    /**
     * Clear all authentication tokens from localStorage
     */
    clearTokens: () => void;
    /**
     * Check if both tokens are present in localStorage
     * @returns True if both tokens exist, false otherwise
     */
    hasTokens: () => boolean;
};
//# sourceMappingURL=tokenStorage.d.ts.map