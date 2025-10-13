import { LumoraAuthConfig } from '../types';
/**
 * Hook for handling user logout
 * Provides a logout function that calls the API and clears local tokens
 *
 * @param authConfig - Authentication configuration for API integration
 * @returns Object with logout function
 */
export declare const useLogout: (authConfig?: LumoraAuthConfig) => {
    logout: () => Promise<void>;
};
//# sourceMappingURL=useLogout.d.ts.map