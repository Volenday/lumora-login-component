/**
 * API constants and configuration
 * Centralized place for API-related constants and default values
 */
export declare const API_CONSTANTS: {
    readonly ENDPOINTS: {
        readonly LOGIN: "/auth/login";
        readonly LOGOUT: "/auth/logout";
        readonly REFRESH: "/auth/refresh";
        readonly GOOGLE_AUTH: "/auth/google";
        readonly GOOGLE_CALLBACK: "/auth/google/callback";
        readonly USER_ME: "/users/me";
    };
    readonly STORAGE_KEYS: {
        readonly ACCESS_TOKEN: "lumora_access_token";
        readonly REFRESH_TOKEN: "lumora_refresh_token";
    };
    readonly DEFAULT_CONFIG: {
        readonly API_BASE_URL: "https://dev.api.lumora.capital";
        readonly TIMEOUT: 10000;
        readonly RETRY_ATTEMPTS: 1;
    };
    readonly STATUS_CODES: {
        readonly UNAUTHORIZED: 401;
        readonly FORBIDDEN: 403;
        readonly NOT_FOUND: 404;
        readonly INTERNAL_SERVER_ERROR: 500;
    };
};
export declare const ERROR_MESSAGES: {
    readonly NO_ACCESS_TOKEN: "No access token available";
    readonly NO_REFRESH_TOKEN: "No refresh token available";
    readonly TOKEN_REFRESH_FAILED: "Token refresh failed";
    readonly API_REQUEST_FAILED: "API request failed";
    readonly NETWORK_ERROR: "Network error occurred";
    readonly INVALID_CREDENTIALS: "Invalid credentials";
    readonly UNAUTHORIZED: "Unauthorized access";
    readonly FORBIDDEN: "Access forbidden";
    readonly NOT_FOUND: "Resource not found";
    readonly INTERNAL_ERROR: "Internal server error";
};
//# sourceMappingURL=constants.d.ts.map