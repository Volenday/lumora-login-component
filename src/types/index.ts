export interface BrandingConfig {
	logo?: string | React.ReactNode;
	logoHeight?: number;
	primaryColor?: string;
	secondaryColor?: string;
	backgroundColor?: string;
	textColor?: string;
	companyName?: string;
	tagline?: string;
}

export interface LumoraLoginProps {
	onLocalLogin: (email: string, password: string) => Promise<any>;
	onGoogleLogin: () => void;
	onLoginSuccess: (response: any) => void;
	onLoginError: (error: Error) => void;
	googleClientId?: string;
	enableGoogleSignIn?: boolean;
	enableLocalSignIn?: boolean;
	branding?: BrandingConfig;
}

export interface LoginFormData {
	email: string;
	password: string;
}

export type LoginState =
	| 'idle'
	| 'loading'
	| 'google-loading'
	| 'success'
	| 'error'
	| 'otp-required'
	| 'otp-error';

export interface ErrorState {
	message: string;
	type: 'local' | 'google' | 'otp' | 'network';
}
