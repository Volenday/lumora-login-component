export interface BrandingConfig {
    logo?: string | React.ReactNode;
    logoHeight?: number;
    primaryColor?: string;
    secondaryColor?: string;
    backgroundColor?: string;
    textColor?: string;
    companyName?: string;
    tagline?: string;
    forgetPasswordTitle?: string;
    forgetPasswordDescription?: string;
    forgetPasswordSuccessTitle?: string;
    forgetPasswordSuccessDescription?: string;
}
export interface LumoraAuthConfig {
    apiBaseUrl?: string;
    apiKey?: string;
    googleRedirectUri?: string;
    useApiIntegration?: boolean;
}
export interface LumoraAuthTokens {
    accessToken: string;
    refreshToken: string;
}
export interface LumoraUser {
    id: string;
    email: string;
    name?: string;
}
export interface GoogleOAuthResponse {
    access_token: string;
    expires_in: number;
    scope: string;
    token_type: string;
}
export interface LumoraLoginProps {
    authConfig?: LumoraAuthConfig;
    onLocalLogin?: (email: string, password: string) => Promise<unknown>;
    onGoogleLogin?: (response: GoogleOAuthResponse) => void;
    onLoginSuccess: (response: unknown) => void;
    onLoginError: (error: Error) => void;
    onForgetPassword?: (email: string) => Promise<unknown>;
    enableRecaptcha?: boolean;
    recaptchaSiteKey?: string;
    googleClientId?: string;
    enableGoogleSignIn?: boolean;
    enableLocalSignIn?: boolean;
    enableForgetPassword?: boolean;
    enableOtp?: boolean;
    branding?: BrandingConfig;
}
export interface LoginFormData {
    email: string;
    password: string;
}
export interface ForgetPasswordFormData {
    email: string;
}
export type LoginState = 'idle' | 'loading' | 'google-loading' | 'success' | 'error' | 'otp-required' | 'otp-error' | 'forget-password' | 'forget-password-loading' | 'forget-password-success';
export interface ErrorState {
    message: string;
    type: 'local' | 'google' | 'otp' | 'network' | 'recaptcha' | 'forget-password';
}
declare global {
    interface Window {
        grecaptcha: {
            ready: (callback: () => void) => void;
            execute: (siteKey: string, options: {
                action: string;
            }) => Promise<string>;
        };
    }
}
//# sourceMappingURL=index.d.ts.map