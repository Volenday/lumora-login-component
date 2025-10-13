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
export declare const useAuthCallback: (config?: UseAuthCallbackConfig) => {
    loading: boolean;
    error: Error | null;
};
//# sourceMappingURL=useAuthCallback.d.ts.map