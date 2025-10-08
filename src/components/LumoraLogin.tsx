import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
	Box,
	TextField,
	Button,
	Typography,
	Alert,
	CircularProgress,
	Divider,
	Stack
} from '@mui/material';
import { Google as GoogleIcon } from '@mui/icons-material';
// Import the OTP component from the private package
// Note: This requires proper GitHub Packages authentication
// To set up authentication:
// 1. Create a GitHub Personal Access Token with 'read:packages' permission
// 2. Set the GITHUB_TOKEN environment variable: export GITHUB_TOKEN=your_token_here
// 3. Run: npm install
import { LumoraOTP } from '@volenday/lumora-otp-component';
import {
	LumoraLoginProps,
	LoginFormData,
	LoginState,
	ErrorState,
	BrandingConfig
} from '../types';

// Validation schema for login form
const validationSchema = yup.object({
	email: yup
		.string()
		.email('Please enter a valid email address')
		.required('Email is required'),
	password: yup
		.string()
		.min(6, 'Password must be at least 6 characters')
		.required('Password is required')
});

// Default branding configuration
const getDefaultBranding = (): BrandingConfig => ({
	primaryColor: '#1976d2',
	secondaryColor: '#42a5f5',
	backgroundColor: '#ffffff',
	textColor: '#333333',
	logoHeight: 48,
	logo: 'https://via.placeholder.com/200x80/1976d2/ffffff?text=Lumora'
});

// Merge custom branding with defaults
const getBrandingConfig = (
	customBranding?: BrandingConfig
): BrandingConfig => ({
	...getDefaultBranding(),
	...customBranding
});

// Main LumoraLogin component
const LumoraLogin: React.FC<LumoraLoginProps> = ({
	onLocalLogin,
	onGoogleLogin,
	onLoginSuccess,
	onLoginError,
	googleClientId,
	enableGoogleSignIn = true,
	enableLocalSignIn = true,
	branding
}) => {
	// Component state management
	const [loginState, setLoginState] = useState<LoginState>('idle');
	const [error, setError] = useState<ErrorState | null>(null);
	const [showPassword, setShowPassword] = useState(false);

	// Get merged branding configuration
	const brandConfig = getBrandingConfig(branding);

	// Validate that at least one sign-in method is enabled
	if (!enableLocalSignIn && !enableGoogleSignIn) {
		throw new Error(
			'At least one sign-in method must be enabled (enableLocalSignIn or enableGoogleSignIn)'
		);
	}

	// Form setup with validation
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<LoginFormData>({
		resolver: yupResolver(validationSchema)
	});

	// Handle local login form submission
	const handleLocalLogin: SubmitHandler<LoginFormData> = async data => {
		setLoginState('loading');
		setError(null);

		try {
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
		setLoginState('google-loading');
		setError(null);

		try {
			onGoogleLogin();
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
	const handleOTPSuccess = (response: any) => {
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

	// Load Google OAuth script if clientId is provided
	useEffect(() => {
		if (googleClientId && typeof window !== 'undefined') {
			const script = document.createElement('script');
			script.src = 'https://accounts.google.com/gsi/client';
			script.async = true;
			script.defer = true;
			document.head.appendChild(script);
		}
	}, [googleClientId]);

	// Render OTP verification screen
	if (loginState === 'otp-required' || loginState === 'otp-error') {
		return (
			<Box
				sx={{
					// Mobile: full screen with proper centering
					width: { xs: '100%', sm: 'auto' },
					height: { xs: '100vh', sm: 'auto' },
					minHeight: { xs: '100vh', sm: 'auto' },
					margin: { xs: 0, sm: 'auto' },
					maxWidth: { xs: '100%', sm: '600px' },
					// Desktop: container with card styling
					mt: { xs: 0, sm: 4 },
					boxShadow: {
						xs: 'none',
						sm: '0 8px 32px rgba(0, 0, 0, 0.12)'
					},
					borderRadius: { xs: 0, sm: 2 },
					border: { xs: 'none', sm: '1px solid rgba(0, 0, 0, 0.08)' },
					background: brandConfig.backgroundColor,
					display: 'flex',
					flexDirection: 'column',
					// Prevent horizontal overflow
					overflowX: 'hidden',
					boxSizing: 'border-box'
				}}
			>
				<Box
					sx={{
						p: { xs: 3, sm: 4 },
						flex: 1,
						display: 'flex',
						flexDirection: 'column',
						// Ensure proper mobile centering and prevent overflow
						width: '100%',
						maxWidth: '100%',
						boxSizing: 'border-box'
					}}
				>
					{/* Logo and Branding Section for OTP */}
					<Box sx={{ textAlign: 'center', mb: 3 }}>
						{brandConfig.logo && (
							<Box sx={{ mb: 2 }}>
								{typeof brandConfig.logo === 'string' ? (
									<img
										src={brandConfig.logo}
										alt={
											brandConfig.companyName ||
											'Company Logo'
										}
										style={{
											height: brandConfig.logoHeight,
											maxWidth: '100%',
											objectFit: 'contain'
										}}
									/>
								) : (
									brandConfig.logo
								)}
							</Box>
						)}

						<Typography
							variant="h5"
							component="h1"
							sx={{
								color: brandConfig.textColor,
								fontWeight: 600,
								fontSize: { xs: '1.5rem', sm: '1.75rem' }
							}}
						>
							Verify Your Identity
						</Typography>
					</Box>

					<LumoraOTP
						onVerify={handleOTPVerify}
						onVerifySuccess={handleOTPSuccess}
						onVerifyError={handleOTPError}
						onResend={handleOTPResend}
						instructionText="Please enter the 6-digit code sent to your email"
						showResend={true}
						resendCooldown={60}
						expirationTime={300}
						showExpirationTimer={true}
					/>

					{loginState === 'otp-error' && (
						<Box textAlign="center" sx={{ mt: 3 }}>
							<Button
								variant="text"
								onClick={handleBackToSignIn}
								sx={{
									textTransform: 'none',
									color: brandConfig.primaryColor,
									fontWeight: 500,
									'&:hover': {
										backgroundColor: `${brandConfig.primaryColor}08`
									}
								}}
							>
								Back to Sign In
							</Button>
						</Box>
					)}
				</Box>
			</Box>
		);
	}

	// Render main login form
	return (
		<Box
			sx={{
				// Mobile: full screen with proper centering
				width: { xs: '100%', sm: 'auto' },
				height: { xs: '100vh', sm: 'auto' },
				minHeight: { xs: '100vh', sm: 'auto' },
				margin: { xs: 0, sm: 'auto' },
				maxWidth: { xs: '100%', sm: '600px' },
				// Desktop: container with card styling
				mt: { xs: 0, sm: 4 },
				boxShadow: { xs: 'none', sm: '0 8px 32px rgba(0, 0, 0, 0.12)' },
				borderRadius: { xs: 0, sm: 2 },
				border: { xs: 'none', sm: '1px solid rgba(0, 0, 0, 0.08)' },
				background: brandConfig.backgroundColor,
				display: 'flex',
				flexDirection: 'column',
				// Prevent horizontal overflow
				overflowX: 'hidden',
				boxSizing: 'border-box'
			}}
		>
			<Box
				sx={{
					p: { xs: 3, sm: 4 },
					flex: 1,
					display: 'flex',
					flexDirection: 'column',
					// Ensure proper mobile centering and prevent overflow
					width: '100%',
					maxWidth: '100%',
					boxSizing: 'border-box'
				}}
			>
				{/* Logo and Branding Section */}
				<Box sx={{ textAlign: 'center', mb: 4 }}>
					{brandConfig.logo && (
						<Box sx={{ mb: 2 }}>
							{typeof brandConfig.logo === 'string' ? (
								<img
									src={brandConfig.logo}
									alt={
										brandConfig.companyName ||
										'Company Logo'
									}
									style={{
										height: brandConfig.logoHeight,
										maxWidth: '100%',
										objectFit: 'contain'
									}}
								/>
							) : (
								brandConfig.logo
							)}
						</Box>
					)}

					<Typography
						variant="h4"
						component="h1"
						sx={{
							mb: 1,
							color: brandConfig.textColor,
							fontWeight: 600,
							fontSize: { xs: '1.75rem', sm: '2rem' }
						}}
					>
						{brandConfig.companyName
							? `Welcome to ${brandConfig.companyName}`
							: 'Sign In'}
					</Typography>

					{brandConfig.tagline && (
						<Typography
							variant="body1"
							sx={{
								color: brandConfig.textColor,
								opacity: 0.7,
								fontSize: '0.95rem'
							}}
						>
							{brandConfig.tagline}
						</Typography>
					)}
				</Box>

				{error && (
					<Alert
						severity="error"
						sx={{ mb: 3 }}
						onClose={() => setError(null)}
					>
						{error.message}
					</Alert>
				)}

				<Box
					component="form"
					onSubmit={
						enableLocalSignIn
							? handleSubmit(handleLocalLogin)
							: undefined
					}
				>
					<Stack spacing={3}>
						{enableLocalSignIn && (
							<>
								<TextField
									{...register('email')}
									fullWidth
									label="Email Address"
									type="email"
									placeholder="Enter your email"
									error={!!errors.email}
									helperText={errors.email?.message}
									disabled={
										loginState === 'loading' ||
										loginState === 'google-loading'
									}
									sx={{
										'& .MuiOutlinedInput-root': {
											borderRadius: 1.4,
											'&:hover fieldset': {
												borderColor:
													brandConfig.primaryColor
											},
											'&.Mui-focused fieldset': {
												borderColor:
													brandConfig.primaryColor
											}
										},
										'& .MuiInputLabel-root.Mui-focused': {
											color: brandConfig.primaryColor
										}
									}}
								/>

								<TextField
									{...register('password')}
									fullWidth
									label="Password"
									type={showPassword ? 'text' : 'password'}
									placeholder="Enter your password"
									error={!!errors.password}
									helperText={errors.password?.message}
									disabled={
										loginState === 'loading' ||
										loginState === 'google-loading'
									}
									sx={{
										'& .MuiOutlinedInput-root': {
											borderRadius: 1.4,
											'&:hover fieldset': {
												borderColor:
													brandConfig.primaryColor
											},
											'&.Mui-focused fieldset': {
												borderColor:
													brandConfig.primaryColor
											}
										},
										'& .MuiInputLabel-root.Mui-focused': {
											color: brandConfig.primaryColor
										}
									}}
									slotProps={{
										input: {
											endAdornment: (
												<Button
													size="small"
													onClick={() =>
														setShowPassword(
															!showPassword
														)
													}
													disabled={
														loginState ===
															'loading' ||
														loginState ===
															'google-loading'
													}
													sx={{
														color: brandConfig.primaryColor,
														textTransform: 'none',
														fontWeight: 500,
														'&:hover': {
															backgroundColor: `${brandConfig.primaryColor}10`
														}
													}}
												>
													{showPassword
														? 'Hide'
														: 'Show'}
												</Button>
											)
										}
									}}
								/>

								<Button
									type="submit"
									fullWidth
									variant="contained"
									size="large"
									disabled={
										loginState === 'loading' ||
										loginState === 'google-loading'
									}
									sx={{
										py: 1.5,
										backgroundColor:
											brandConfig.primaryColor,
										borderRadius: 1.4,
										textTransform: 'none',
										fontWeight: 600,
										fontSize: '1rem',
										boxShadow: `0 4px 12px ${brandConfig.primaryColor}30`,
										'&:hover': {
											backgroundColor:
												brandConfig.secondaryColor,
											boxShadow: `0 6px 16px ${brandConfig.primaryColor}40`
										},
										'&:disabled': {
											backgroundColor: `${brandConfig.primaryColor}60`
										}
									}}
								>
									{loginState === 'loading' ? (
										<CircularProgress
											size={24}
											color="inherit"
										/>
									) : (
										'Sign In'
									)}
								</Button>
							</>
						)}

						{enableGoogleSignIn && googleClientId && (
							<>
								{enableLocalSignIn && (
									<Divider sx={{ my: 1 }}>
										<Typography
											variant="body2"
											sx={{
												color: brandConfig.textColor,
												opacity: 0.6,
												px: 2,
												fontWeight: 500
											}}
										>
											OR
										</Typography>
									</Divider>
								)}

								<Button
									fullWidth
									variant="outlined"
									size="large"
									startIcon={
										loginState === 'google-loading' ? (
											<CircularProgress
												size={20}
												color="inherit"
											/>
										) : (
											<GoogleIcon />
										)
									}
									onClick={handleGoogleLogin}
									disabled={
										loginState === 'loading' ||
										loginState === 'google-loading'
									}
									sx={{
										py: 1.5,
										borderRadius: 1.4,
										textTransform: 'none',
										fontWeight: 500,
										fontSize: '1rem',
										borderColor:
											brandConfig.textColor + '30',
										color: brandConfig.textColor,
										'&:hover': {
											borderColor:
												brandConfig.primaryColor,
											backgroundColor: `${brandConfig.primaryColor}08`,
											color: brandConfig.textColor // Ensure text color stays consistent
										},
										'&:active': {
											borderColor:
												brandConfig.primaryColor,
											backgroundColor: `${brandConfig.primaryColor}12`,
											color: brandConfig.textColor // Ensure text color stays consistent on click
										},
										'&:disabled': {
											borderColor:
												brandConfig.textColor + '20',
											color: brandConfig.textColor + '60'
										},
										// Prevent color changes on focus
										'&:focus': {
											borderColor:
												brandConfig.textColor + '30',
											color: brandConfig.textColor
										},
										// Ensure consistent styling across all states
										'&.MuiButton-root': {
											borderColor:
												brandConfig.textColor + '30',
											color: brandConfig.textColor
										}
									}}
								>
									{loginState === 'google-loading'
										? 'Signing in...'
										: 'Continue with Google'}
								</Button>
							</>
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
				</Box>
			</Box>
		</Box>
	);
};

export default LumoraLogin;
