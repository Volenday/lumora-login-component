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
	branding
}) => {
	// Component state management
	const [loginState, setLoginState] = useState<LoginState>('idle');
	const [error, setError] = useState<ErrorState | null>(null);

	// Ref to store the Google login function
	const googleLoginRef = React.useRef<(() => void) | null>(null);

	// Get merged branding configuration
	const brandConfig = getBrandingConfig(branding);

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

	// Handle local login form submission
	const handleLocalLogin: SubmitHandler<LoginFormData> = async data => {
		setLoginState('loading');
		setError(null);

		try {
			// Verify reCAPTCHA if enabled
			if (enableRecaptcha) {
				await verifyRecaptcha();
			}

			await onLocalLogin(data.email, data.password);

			// Simulate 2FA requirement - in real implementation, this would come from the API response
			setLoginState('otp-required');
		} catch (err) {
			const error = err as Error;
			setError({ message: error.message, type: 'local' });
			setLoginState('error');
			onLoginError(error);
		}
	};

	// Handle Google OAuth login
	const handleGoogleLogin = () => {
		if (googleLoginRef.current) {
			googleLoginRef.current();
		}
	};

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

				{enableGoogleSignIn && googleClientId && (
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

			{/* Google OAuth Handler - only render when Google sign-in is enabled */}
			{enableGoogleSignIn && googleClientId && (
				<GoogleOAuthHandler
					onGoogleLogin={onGoogleLogin}
					onLoginError={onLoginError}
					setLoginState={setLoginState}
					setError={setError}
					googleLoginRef={googleLoginRef}
				/>
			)}
		</LoginContainer>
	);
};

// Main LumoraLogin component with GoogleOAuthProvider wrapper
const LumoraLogin: React.FC<LumoraLoginProps> = props => {
	const { googleClientId, enableGoogleSignIn } = props;

	// If Google Sign-In is enabled and clientId is provided, wrap with GoogleOAuthProvider
	if (enableGoogleSignIn && googleClientId) {
		return (
			<GoogleOAuthProvider clientId={googleClientId}>
				<LumoraLoginInternal {...props} />
			</GoogleOAuthProvider>
		);
	}

	// Otherwise, render the internal component directly
	return <LumoraLoginInternal {...props} />;
};

export default LumoraLogin;
