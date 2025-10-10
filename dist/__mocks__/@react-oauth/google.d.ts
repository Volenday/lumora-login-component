import { default as React } from 'react';
export declare const GoogleOAuthProvider: React.FC<{
    children: React.ReactNode;
    clientId: string;
}>;
export declare const useGoogleLogin: (config: {
    onSuccess: (response: {
        access_token: string;
        expires_in: number;
        scope: string;
        token_type: string;
    }) => void;
    onError: (error: {
        error_description?: string;
    }) => void;
}) => () => void;
//# sourceMappingURL=google.d.ts.map