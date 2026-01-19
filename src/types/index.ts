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
	apiBaseUrl: string;
	apiKey?: string;
}

export interface LumoraAuthTokens {
	accessToken: string;
	refreshToken: string;
}

export interface LumoraUser {
	id: string;
	email: string;
	name?: string;
	profilePicture?: string;
	role?: string;
	// Add other user fields based on API response
}

export interface GoogleOAuthResponse {
	access_token: string;
	expires_in: number;
	scope: string;
	token_type: string;
}

export interface LumoraLoginProps {
	// Required API configuration
	authConfig: LumoraAuthConfig;
	
	// Success/Error callbacks
	onLoginSuccess: (response: { user: LumoraUser; tokens: LumoraAuthTokens }) => void;
	onLoginError: (error: Error) => void;
	
	// Feature toggles
	enableRecaptcha?: boolean;
	recaptchaSiteKey?: string;
	enableGoogleSignIn?: boolean;
	enableLocalSignIn?: boolean;
	enableForgetPassword?: boolean;
	enableOtp?: boolean;
	
	// Styling
	branding?: BrandingConfig;
}

export interface LoginFormData {
	email: string;
	password: string;
}

export interface ForgetPasswordFormData {
	email: string;
}

export type LoginState =
	| 'idle'
	| 'loading'
	| 'google-loading'
	| 'success'
	| 'error'
	| 'otp-required'
	| 'otp-error'
	| 'forget-password'
	| 'forget-password-loading'
	| 'forget-password-success';

export interface ErrorState {
	message: string;
	type:
		| 'local'
		| 'google'
		| 'otp'
		| 'network'
		| 'recaptcha'
		| 'forget-password';
}

// Global reCAPTCHA types
declare global {
	interface Window {
		grecaptcha: {
			ready: (callback: () => void) => void;
			execute: (
				siteKey: string,
				options: { action: string }
			) => Promise<string>;
		};
	}
}
