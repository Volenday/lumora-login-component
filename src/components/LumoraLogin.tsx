import React, { useState, useEffect } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { Alert, Stack, Button } from '@mui/material';
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
import {
	LumoraLoginProps,
	LoginFormData,
	ForgetPasswordFormData,
	LoginState,
	ErrorState,
	GoogleOAuthResponse
} from '../types';
import { getBrandingConfig } from '../utils/branding';
import { TokenStorage } from '../lib/tokenStorage';
import { authService } from '../services/authService';
import { getApiClient } from '../lib/apiClient';

// Import sub-components
import BrandingHeader from './BrandingHeader';
import LoginForm from './LoginForm';
import GoogleSignInButton from './GoogleSignInButton';
import ForgetPasswordForm from './ForgetPasswordForm';
import OTPVerification from './OTPVerification';
import ForgetPasswordSuccess from './ForgetPasswordSuccess';
import LoginContainer from './LoginContainer';

// Component that handles Google OAuth functionality when enabled
const GoogleOAuthHandler: React.FC<{
	onGoogleLogin: (response: GoogleOAuthResponse) => void;
	onLoginError: (error: Error) => void;
	setLoginState: (state: LoginState) => void;
	setError: (error: ErrorState | null) => void;
	googleLoginRef: React.RefObject<(() => void) | null>;
}> = ({
	onGoogleLogin,
	onLoginError,
	setLoginState,
	setError,
	googleLoginRef
}) => {
	const googleLogin = useGoogleLogin({
		onSuccess: response => {
			setLoginState('google-loading');
			setError(null);
			try {
				// Convert the response to our expected format
				const googleResponse: GoogleOAuthResponse = {
					access_token: response.access_token,
					expires_in: response.expires_in,
					scope: response.scope,
					token_type: response.token_type
				};
				onGoogleLogin(googleResponse);
				// In a real implementation, this would be handled by the OAuth flow
				// For now, we'll simulate the 2FA requirement
				setTimeout(() => {
					setLoginState('otp-required');
				}, 1000);
			} catch (err) {
				const error = err as Error;
				setError({ message: error.message, type: 'google' });
				setLoginState('error');
				onLoginError(error);
			}
		},
		onError: error => {
			setError({
				message: error.error_description || 'Google sign-in failed',
				type: 'google'
			});
			setLoginState('error');
			onLoginError(
				new Error(error.error_description || 'Google sign-in failed')
			);
		}
	});

	// Store the googleLogin function in the ref
	React.useEffect(() => {
		googleLoginRef.current = googleLogin;
	}, [googleLogin, googleLoginRef]);

	return null; // This component doesn't render anything, just provides the hook
};

// Internal component that uses the Google OAuth hook
const LumoraLoginInternal: React.FC<LumoraLoginProps> = ({
	authConfig,
	onLocalLogin,
	onGoogleLogin,
	onLoginSuccess,
	onLoginError,
	onForgetPassword,
	enableRecaptcha = false,
	recaptchaSiteKey,
	googleClientId,
	enableGoogleSignIn = true,
	enableLocalSignIn = true,
	enableForgetPassword = true,
	enableOtp = true,
	branding
}) => {
	// Component state management
	const [loginState, setLoginState] = useState<LoginState>('idle');
	const [error, setError] = useState<ErrorState | null>(null);

	// Ref to store the Google login function
	const googleLoginRef = React.useRef<(() => void) | null>(null);

	// Get merged branding configuration
	const brandConfig = getBrandingConfig(branding);

	// Determine if using API integration or legacy callbacks
	const isApiMode = authConfig?.useApiIntegration && authConfig?.apiBaseUrl;
	
	// Get configuration from environment variables
	const envGoogleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || import.meta.env.GOOGLE_CLIENT_ID;
	const envGoogleCallbackUrl = import.meta.env.VITE_GOOGLE_CALLBACK_URL || import.meta.env.GOOGLE_CALLBACK_URL;
	const envApiBaseUrl = import.meta.env.VITE_LUMORA_API_BASE_URL || import.meta.env.FRONTEND_URL;
	const envApiKey = import.meta.env.VITE_API_KEY || import.meta.env.API_KEY;
	
	// Debug logging (remove in production)
	// console.log('LumoraLogin mode detection:', { 
	// 	authConfig, 
	// 	isApiMode, 
	// 	enableGoogleSignIn,
	// 	envGoogleClientId,
	// 	envGoogleCallbackUrl,
	// 	envApiBaseUrl,
	// 	envApiKey
	// });

	// Initialize API client if in API mode
	React.useEffect(() => {
		if (isApiMode) {
			try {
				// Use environment variables if available, otherwise fall back to authConfig
				const apiBaseUrl = authConfig?.apiBaseUrl || envApiBaseUrl;
				const apiKey = authConfig?.apiKey || envApiKey;
				
				if (apiBaseUrl) {
					getApiClient(apiBaseUrl, apiKey);
				}
			} catch (error) {
				console.error('Failed to initialize API client:', error);
			}
		}
	}, [isApiMode, authConfig?.apiBaseUrl, authConfig?.apiKey, envApiBaseUrl, envApiKey]);

	// Validate that at least one sign-in method is enabled
	if (!enableLocalSignIn && !enableGoogleSignIn) {
		throw new Error(
			'At least one sign-in method must be enabled (enableLocalSignIn or enableGoogleSignIn)'
		);
	}

	// Validate reCAPTCHA configuration
	if (enableRecaptcha && !recaptchaSiteKey) {
		throw new Error(
			'recaptchaSiteKey is required when enableRecaptcha is true'
		);
	}

	// Form reset functions for sub-components
	const reset = () => {
		// Reset will be handled by sub-components
	};

	const resetForgetPassword = () => {
		// Reset will be handled by sub-components
	};

	// Handle reCAPTCHA execution
	const executeRecaptcha = (): Promise<string> => {
		return window.grecaptcha
			.execute(recaptchaSiteKey!, { action: 'login' })
			.catch(() => {
				throw new Error('reCAPTCHA verification failed');
			});
	};

	// Handle reCAPTCHA verification
	const verifyRecaptcha = async (): Promise<string> => {
		if (!enableRecaptcha || !recaptchaSiteKey) {
			return '';
		}

		if (typeof window === 'undefined' || !window.grecaptcha) {
			throw new Error('reCAPTCHA is not loaded');
		}

		return new Promise((resolve, reject) => {
			const handleRecaptchaReady = () => {
				executeRecaptcha().then(resolve).catch(reject);
			};

			window.grecaptcha.ready(handleRecaptchaReady);
		});
	};

	// API-based local login handler
	const handleApiLocalLogin: SubmitHandler<LoginFormData> = async data => {
		setLoginState('loading');
		setError(null);

		try {
			// Verify reCAPTCHA if enabled
			if (enableRecaptcha) {
				await verifyRecaptcha();
			}

			// Ensure API client is initialized with the correct API key
			const apiBaseUrl = authConfig?.apiBaseUrl || envApiBaseUrl;
			const apiKey = authConfig?.apiKey || envApiKey;
			
			if (apiBaseUrl && apiKey) {
				getApiClient(apiBaseUrl, apiKey);
			}

			// Call API directly
			const tokens = await authService.login(data.email, data.password);

			// Store tokens in localStorage
			TokenStorage.setTokens(tokens.accessToken, tokens.refreshToken);

			// Fetch user profile
			const user = await authService.getCurrentUser();

			// Check if OTP is enabled
			if (enableOtp) {
				setLoginState('otp-required');
			} else {
				setLoginState('success');
				onLoginSuccess({ user, tokens });
			}
		} catch (err) {
			const error = err as Error;
			setError({ message: error.message, type: 'local' });
			setLoginState('error');
			onLoginError(error);
		}
	};

	// Legacy callback-based local login handler
	const handleLegacyLocalLogin: SubmitHandler<LoginFormData> = async data => {
		setLoginState('loading');
		setError(null);

		try {
			// Verify reCAPTCHA if enabled
			if (enableRecaptcha) {
				await verifyRecaptcha();
			}

			await onLocalLogin!(data.email, data.password);

			// Simulate 2FA requirement - in real implementation, this would come from the API response
			setLoginState('otp-required');
		} catch (err) {
			const error = err as Error;
			setError({ message: error.message, type: 'local' });
			setLoginState('error');
			onLoginError(error);
		}
	};

	// Use appropriate login handler based on mode
	const handleLocalLogin = isApiMode ? handleApiLocalLogin : handleLegacyLocalLogin;

	// API-based Google OAuth login (redirect flow)
	const handleApiGoogleLogin = () => {
		// console.log('API Google login clicked', { authConfig, isApiMode });
		
		// Use environment variables if available, otherwise fall back to authConfig
		const apiBaseUrl = authConfig?.apiBaseUrl || envApiBaseUrl;
		const googleRedirectUri = authConfig?.googleRedirectUri || envGoogleCallbackUrl;
		const apiKey = authConfig?.apiKey || envApiKey;
		
		if (apiBaseUrl && googleRedirectUri) {
			// Ensure API client is initialized with the correct API key
			if (apiKey) {
				try {
					getApiClient(apiBaseUrl, apiKey);
				} catch (error) {
					console.error('Failed to initialize API client for Google OAuth:', error);
				}
			}
			authService.initiateGoogleOAuth(googleRedirectUri, apiBaseUrl);
		} else {
			onLoginError(new Error('Google OAuth configuration is incomplete. Please set GOOGLE_CALLBACK_URL and FRONTEND_URL environment variables or provide authConfig.'));
		}
	};

	// Legacy callback-based Google OAuth login (popup flow)
	const handleLegacyGoogleLogin = () => {
		if (googleLoginRef.current) {
			googleLoginRef.current();
		} else {
			onLoginError(new Error('Google OAuth is not properly configured for legacy mode. Please set GOOGLE_CLIENT_ID environment variable or provide googleClientId prop.'));
		}
	};

	// Use appropriate Google login handler based on mode
	const handleGoogleLogin = isApiMode ? handleApiGoogleLogin : handleLegacyGoogleLogin;

	// Handle OTP verification
	const handleOTPVerify = async (otp: string) => {
		// Simulate OTP verification - in real implementation, this would call your API
		await new Promise(resolve => setTimeout(resolve, 1000));

		// Simulate successful verification
		if (otp === '123456') {
			return { success: true, token: 'verified-token' };
		} else {
			throw new Error('Invalid OTP code');
		}
	};

	// Handle successful OTP verification
	const handleOTPSuccess = (response: unknown) => {
		setLoginState('success');
		onLoginSuccess(response);
	};

	// Handle OTP verification error
	const handleOTPError = (error: Error) => {
		setError({ message: error.message, type: 'otp' });
		setLoginState('otp-error');
	};

	// Handle OTP resend request
	const handleOTPResend = () => {
		// Simulate resending OTP
		console.log('Resending OTP...');
		// Clear any existing OTP errors when resending
		if (error && error.type === 'otp') {
			setError(null);
		}
	};

	// Handle back to sign in navigation
	const handleBackToSignIn = () => {
		setError(null);
		setLoginState('idle');
		reset();
	};

	// Handle forget password form submission
	const handleForgetPassword: SubmitHandler<
		ForgetPasswordFormData
	> = async data => {
		if (!onForgetPassword) {
			setError({
				message: 'Forget password functionality is not available',
				type: 'forget-password'
			});
			return;
		}

		setLoginState('forget-password-loading');
		setError(null);

		try {
			// Verify reCAPTCHA if enabled
			if (enableRecaptcha) {
				await verifyRecaptcha();
			}

			await onForgetPassword(data.email);
			setLoginState('forget-password-success');
		} catch (err) {
			const error = err as Error;
			setError({ message: error.message, type: 'forget-password' });
			setLoginState('forget-password');
			onLoginError(error);
		}
	};

	// Handle navigate to forget password
	const handleNavigateToForgetPassword = () => {
		setError(null);
		setLoginState('forget-password');
		resetForgetPassword();
	};

	// Handle back to login from forget password
	const handleBackToLogin = () => {
		setError(null);
		setLoginState('idle');
		reset();
		resetForgetPassword();
	};

	// Load reCAPTCHA script if enabled and site key is provided
	useEffect(() => {
		if (
			enableRecaptcha &&
			recaptchaSiteKey &&
			typeof window !== 'undefined'
		) {
			const script = document.createElement('script');
			script.src = `https://www.google.com/recaptcha/enterprise.js?render=${recaptchaSiteKey}`;
			script.async = true;
			script.defer = true;
			document.head.appendChild(script);
		}
	}, [enableRecaptcha, recaptchaSiteKey]);

	// Render OTP verification screen
	if (loginState === 'otp-required' || loginState === 'otp-error') {
		return (
			<LoginContainer brandConfig={brandConfig}>
				<OTPVerification
					brandConfig={brandConfig}
					loginState={loginState}
					onVerify={handleOTPVerify}
					onVerifySuccess={handleOTPSuccess}
					onVerifyError={handleOTPError}
					onResend={handleOTPResend}
					onBackToSignIn={handleBackToSignIn}
				/>
			</LoginContainer>
		);
	}

	// Render forget password success screen
	if (loginState === 'forget-password-success') {
		return (
			<LoginContainer brandConfig={brandConfig}>
				<ForgetPasswordSuccess
					brandConfig={brandConfig}
					onBackToLogin={handleBackToLogin}
				/>
			</LoginContainer>
		);
	}

	// Render forget password form
	if (
		loginState === 'forget-password' ||
		loginState === 'forget-password-loading'
	) {
		return (
			<LoginContainer brandConfig={brandConfig}>
				<BrandingHeader brandConfig={brandConfig} />
				<ForgetPasswordForm
					brandConfig={brandConfig}
					loginState={loginState}
					error={error}
					onSubmit={handleForgetPassword}
					onBackToLogin={handleBackToLogin}
					onCloseError={() => setError(null)}
				/>
			</LoginContainer>
		);
	}

	// Render main login form
	return (
		<LoginContainer brandConfig={brandConfig}>
			<BrandingHeader
				brandConfig={brandConfig}
				title={
					brandConfig.companyName
						? `Welcome to ${brandConfig.companyName}`
						: 'Sign In'
				}
				subtitle={brandConfig.tagline}
			/>

			{error && (
				<Alert
					severity="error"
					sx={{ mb: 3 }}
					onClose={() => setError(null)}
				>
					{error.message}
				</Alert>
			)}

			<Stack spacing={3}>
				{enableLocalSignIn && (
					<LoginForm
						brandConfig={brandConfig}
						loginState={loginState}
						onSubmit={handleLocalLogin}
						onForgetPassword={
							onForgetPassword
								? handleNavigateToForgetPassword
								: undefined
						}
						enableForgetPassword={enableForgetPassword}
					/>
				)}

				{enableGoogleSignIn && (
					<GoogleSignInButton
						brandConfig={brandConfig}
						loginState={loginState}
						onClick={handleGoogleLogin}
						showDivider={enableLocalSignIn}
					/>
				)}

				{loginState === 'error' && (
					<Button
						fullWidth
						variant="text"
						onClick={handleBackToSignIn}
						sx={{
							mt: 1,
							color: brandConfig.primaryColor,
							textTransform: 'none',
							fontWeight: 500,
							'&:hover': {
								backgroundColor: `${brandConfig.primaryColor}08`
							}
						}}
					>
						Try Again
					</Button>
				)}
			</Stack>

			{/* Google OAuth Handler - only render in legacy mode */}
			{/* In API mode, we use redirect-based OAuth through Lumora API instead */}
			{!isApiMode && enableGoogleSignIn && (googleClientId || envGoogleClientId) && (
				<GoogleOAuthHandler
					onGoogleLogin={onGoogleLogin!}
					onLoginError={onLoginError}
					setLoginState={setLoginState}
					setError={setError}
					googleLoginRef={googleLoginRef}
				/>
			)}
		</LoginContainer>
	);
};

// Main LumoraLogin component with conditional GoogleOAuthProvider wrapper
const LumoraLogin: React.FC<LumoraLoginProps> = props => {
	const { googleClientId, enableGoogleSignIn, authConfig } = props;
	
	// Get Google Client ID from environment variables if not provided as prop
	const envGoogleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || import.meta.env.GOOGLE_CLIENT_ID;
	const effectiveGoogleClientId = googleClientId || envGoogleClientId;
	
	// Determine if we're in API mode
	const isApiMode = authConfig?.useApiIntegration && authConfig?.apiBaseUrl;
	
	// If Google Sign-In is enabled in LEGACY mode, wrap with GoogleOAuthProvider
	// In API mode, we don't need the provider since we use Lumora API redirect flow
	if (!isApiMode && enableGoogleSignIn && effectiveGoogleClientId) {
		return (
			<GoogleOAuthProvider clientId={effectiveGoogleClientId}>
				<LumoraLoginInternal {...props} />
			</GoogleOAuthProvider>
		);
	}
	
	// Otherwise, render internal component directly (API mode or local login only)
	return <LumoraLoginInternal {...props} />;
};

export default LumoraLogin;
