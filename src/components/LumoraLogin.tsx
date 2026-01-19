import React, { useState, useEffect } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { Box, Alert, Stack, Button } from '@mui/material';
import {
	LumoraLoginProps,
	LoginFormData,
	ForgetPasswordFormData,
	LoginState,
	ErrorState
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
import ForgetPasswordSuccess from './ForgetPasswordSuccess';
import LoginContainer from './LoginContainer';

/**
 * Lumora Login Component
 * Provides authentication UI with email/password and Google OAuth via Lumora API
 */
const LumoraLogin: React.FC<LumoraLoginProps> = ({
	authConfig,
	onLoginSuccess,
	onLoginError,
	enableRecaptcha = false,
	recaptchaSiteKey,
	enableGoogleSignIn = true,
	enableLocalSignIn = true,
	enableForgetPassword = true,
	branding
}) => {
	// Component state management
	const [loginState, setLoginState] = useState<LoginState>('idle');
	const [error, setError] = useState<ErrorState | null>(null);

	// Get merged branding configuration
	const brandConfig = getBrandingConfig(branding);

	// Initialize API client on mount
	useEffect(() => {
		try {
			getApiClient(authConfig.apiBaseUrl, authConfig.apiKey);
		} catch (error) {
			console.error('Failed to initialize API client:', error);
		}
	}, [authConfig.apiBaseUrl, authConfig.apiKey]);

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

	// Handle local email/password login
	const handleLocalLogin: SubmitHandler<LoginFormData> = async data => {
		setLoginState('loading');
		setError(null);

		try {
			// Verify reCAPTCHA if enabled
			if (enableRecaptcha) {
				await verifyRecaptcha();
			}

			// Call Lumora API for authentication
			const tokens = await authService.login(data.email, data.password);

			// Store tokens in localStorage
			TokenStorage.setTokens(tokens.accessToken, tokens.refreshToken);

			// Fetch user profile from API
			const user = await authService.getCurrentUser();

			// Set success state and call success callback
			setLoginState('success');
			onLoginSuccess({ user, tokens });
		} catch (err) {
			const error = err as Error;
			setError({ message: error.message, type: 'local' });
			setLoginState('error');
			onLoginError(error);
		}
	};

	// Handle Google OAuth login (redirect to Lumora API)
	const handleGoogleLogin = () => {
		try {
			// Set loading state before redirect
			setLoginState('google-loading');
			setError(null);

			// Auto-generate redirect URI
			const redirectUri = `${window.location.origin}/callback`;

			// Small delay to show loading state
			setTimeout(() => {
				// Initiate Google OAuth flow through Lumora API
				authService.initiateGoogleOAuth(
					redirectUri,
					authConfig.apiBaseUrl
				);
			}, 300);
		} catch (err) {
			const error = err as Error;
			setError({ message: error.message, type: 'google' });
			setLoginState('error');
			onLoginError(error);
		}
	};

	// Handle back to sign in navigation
	const handleBackToSignIn = () => {
		setError(null);
		setLoginState('idle');
	};

	// Handle forget password form submission
	const handleForgetPasswordSubmit: SubmitHandler<
		ForgetPasswordFormData
	> = async () => {
		setLoginState('forget-password-loading');
		setError(null);

		try {
			// Verify reCAPTCHA if enabled
			if (enableRecaptcha) {
				await verifyRecaptcha();
			}

			// Call forget password API endpoint
			// TODO: Implement forget password API in authService
			await new Promise(resolve => setTimeout(resolve, 1000));

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
	};

	// Handle back to login from forget password
	const handleBackToLogin = () => {
		setError(null);
		setLoginState('idle');
	};

	// Load reCAPTCHA script if enabled
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
					onSubmit={handleForgetPasswordSubmit}
					onBackToLogin={handleBackToLogin}
					onCloseError={() => setError(null)}
				/>
			</LoginContainer>
		);
	}

	// Render main login form
	return (
		<Box>
			<BrandingHeader
				brandConfig={brandConfig}
				title={
					brandConfig.companyName
						? brandConfig.companyName
						: 'Sign In'
				}
				subtitle={brandConfig.tagline}
			/>
			<LoginContainer brandConfig={brandConfig}>
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
								enableForgetPassword
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
			</LoginContainer>
		</Box>
	);
};

export default LumoraLogin;
