import React, { useState } from 'react';
import {
	CssBaseline,
	ThemeProvider,
	createTheme,
	Box,
	Typography,
	FormControlLabel,
	Switch,
	Paper,
	TextField,
	Button,
	Divider,
	Alert,
	Slider,
	Card,
	CardContent,
	ToggleButton,
	ToggleButtonGroup
} from '@mui/material';
import { LumoraLogin, BrandingConfig, GoogleOAuthResponse, LumoraAuthConfig } from '../index';
import CallbackPage from './CallbackPage';

// Create Material-UI theme for the demo
const theme = createTheme({
	palette: {
		mode: 'light'
	}
});

// Main demo application component
const App: React.FC = () => {
	// Check if on callback route
	const isCallbackRoute = window.location.pathname === '/auth/callback' || 
	                        window.location.pathname === '/callback';
	
	// If on callback route, show the callback page
	if (isCallbackRoute) {
		return (
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<CallbackPage />
			</ThemeProvider>
		);
	}
	
	// State for mode selection
	const [mode, setMode] = useState<'legacy' | 'api'>('legacy');
	
	// State for all LumoraLogin props
	const [enableLocalSignIn, setEnableLocalSignIn] = useState(true);
	const [enableGoogleSignIn, setEnableGoogleSignIn] = useState(true);
	const [enableForgetPassword, setEnableForgetPassword] = useState(true);
	const [enableOtp, setEnableOtp] = useState(true);
	const [googleClientId, setGoogleClientId] = useState(
		'1077414399410-1k1hg3liscujlq0rlnkgjguh4iblt7f7.apps.googleusercontent.com'
	);
	
	// State for API configuration
	const [authConfig, setAuthConfig] = useState<LumoraAuthConfig>({
		apiBaseUrl: 'https://dev.api.lumora.capital',
		apiKey: 'demo-api-key',
		googleRedirectUri: 'http://localhost:3000/auth/callback',
		useApiIntegration: false
	});

	// State for branding configuration
	const [branding, setBranding] = useState<BrandingConfig>({
		companyName: 'Lumora',
		tagline: 'Secure authentication made simple',
		primaryColor: '#1976d2',
		secondaryColor: '#42a5f5',
		backgroundColor: '#ffffff',
		textColor: '#333333',
		logoHeight: 48,
		logo: 'https://lumora.capital/_next/image?url=%2Fimages%2Flumora-logo.png&w=256&q=75',
		forgetPasswordTitle: 'Reset Your Password',
		forgetPasswordDescription:
			'Enter your email address and we will send you a secure link to reset your password.',
		forgetPasswordSuccessTitle: 'Check Your Inbox',
		forgetPasswordSuccessDescription:
			'We have sent you a password reset link. Please check your email and follow the instructions to reset your password.'
	});

	// State for demo feedback
	const [lastAction, setLastAction] = useState<string>('');
	const [loginAttempts, setLoginAttempts] = useState(0);

	// Handle local login simulation (Legacy mode)
	const handleLocalLogin = async (email: string, password: string) => {
		setLastAction(`[LEGACY] Local login attempt with email: ${email}`);
		setLoginAttempts(prev => prev + 1);

		// Simulate API call
		console.log('Legacy local login attempt:', { email, password });

		// Simulate network delay
		await new Promise(resolve => setTimeout(resolve, 1000));

		// Simulate successful login
		return {
			token: 'mock-jwt-token',
			user: {
				id: 1,
				email,
				name: 'John Doe'
			}
		};
	};

	// Handle Google login simulation (Legacy mode)
	const handleGoogleLogin = (response: GoogleOAuthResponse) => {
		setLastAction(
			`[LEGACY] Google login successful! Access token: ${response.access_token.substring(
				0,
				20
			)}...`
		);
		setLoginAttempts(prev => prev + 1);
		console.log('Legacy Google login response:', response);
		// In a real implementation, you would send the access token to your backend for verification
	};

	// Handle successful login
	const handleLoginSuccess = (response: unknown) => {
		const responseData = response as { token?: string; user?: any; tokens?: any };
		const modeLabel = mode === 'api' ? '[API]' : '[LEGACY]';
		setLastAction(
			`${modeLabel} Login successful! Token: ${responseData.token || responseData.tokens?.accessToken || 'N/A'}`
		);
		console.log(`${modeLabel} Login successful:`, response);
	};

	// Handle login errors
	const handleLoginError = (error: Error) => {
		const modeLabel = mode === 'api' ? '[API]' : '[LEGACY]';
		setLastAction(`${modeLabel} Login failed: ${error.message}`);
		console.error(`${modeLabel} Login error:`, error);
	};

	// Handle forget password simulation (Legacy mode)
	const handleForgetPassword = async (email: string) => {
		const modeLabel = mode === 'api' ? '[API]' : '[LEGACY]';
		setLastAction(`${modeLabel} Forget password request for email: ${email}`);
		setLoginAttempts(prev => prev + 1);

		// Simulate API call
		console.log(`${modeLabel} Forget password request:`, { email });

		// Simulate network delay
		await new Promise(resolve => setTimeout(resolve, 1000));

		// Simulate successful password reset email sent
		return {
			success: true,
			message: 'Password reset email sent successfully'
		};
	};

	// Reset demo state
	const resetDemo = () => {
		setLastAction('');
		setLoginAttempts(0);
	};

	// Update branding configuration
	const updateBranding = (updates: Partial<BrandingConfig>) => {
		setBranding((prev: BrandingConfig) => ({ ...prev, ...updates }));
	};

	// Handle mode change
	const handleModeChange = (newMode: 'legacy' | 'api') => {
		setMode(newMode);
		setAuthConfig(prev => ({
			...prev,
			useApiIntegration: newMode === 'api'
		}));
		resetDemo();
	};

	// Render configuration controls
	const renderControls = () => (
		<Paper sx={{ p: 3, mb: 3 }}>
			<Typography variant="h6" gutterBottom>
				LumoraLogin Configuration
			</Typography>

			{/* Mode Selection */}
			<Box sx={{ mb: 3 }}>
				<Typography variant="subtitle1" gutterBottom>
					Authentication Mode
				</Typography>
				<ToggleButtonGroup
					value={mode}
					exclusive
					onChange={(_, value) => value && handleModeChange(value)}
					aria-label="authentication mode"
				>
					<ToggleButton value="legacy" aria-label="legacy mode">
						Legacy Callback Mode
					</ToggleButton>
					<ToggleButton value="api" aria-label="api mode">
						API Integration Mode
					</ToggleButton>
				</ToggleButtonGroup>
				<Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
					{mode === 'legacy' 
						? 'Uses callback functions for authentication (backward compatible). Can use GOOGLE_CLIENT_ID from environment variables.'
						: 'Uses direct API integration with Lumora API (new in v1.1.0). Can use GOOGLE_CALLBACK_URL and FRONTEND_URL from environment variables.'
					}
				</Typography>
			</Box>

			<Divider sx={{ mb: 3 }} />

			{/* API Configuration (only show in API mode) */}
			{mode === 'api' && (
				<Box sx={{ mb: 3 }}>
					<Typography variant="subtitle1" gutterBottom>
						API Configuration
					</Typography>
					<Box
						sx={{
							display: 'flex',
							flexDirection: { xs: 'column', md: 'row' },
							gap: 2
						}}
					>
						<TextField
							fullWidth
							label="API Base URL"
							value={authConfig.apiBaseUrl || ''}
							onChange={e =>
								setAuthConfig(prev => ({
									...prev,
									apiBaseUrl: e.target.value
								}))
							}
							size="small"
							helperText="Base URL for Lumora API"
						/>
						<TextField
							fullWidth
							label="API Key"
							value={authConfig.apiKey || ''}
							onChange={e =>
								setAuthConfig(prev => ({
									...prev,
									apiKey: e.target.value
								}))
							}
							size="small"
							helperText="API key for authentication"
						/>
						<TextField
							fullWidth
							label="Google Redirect URI"
							value={authConfig.googleRedirectUri || ''}
							onChange={e =>
								setAuthConfig(prev => ({
									...prev,
									googleRedirectUri: e.target.value
								}))
							}
							size="small"
							helperText="OAuth callback URL"
						/>
					</Box>
					<Alert severity="info" sx={{ mt: 2 }}>
						<strong>API Mode Note:</strong> In API mode, the component will make direct calls to the Lumora API. 
						For Google OAuth, it will redirect to the API's /auth/google endpoint instead of using popup-based authentication.
						The component will automatically use API_KEY, GOOGLE_CALLBACK_URL, and FRONTEND_URL from your .env file.
					</Alert>
				</Box>
			)}

			<Box
				sx={{
					display: 'flex',
					flexDirection: { xs: 'column', md: 'row' },
					gap: 3
				}}
			>
				{/* Sign-in Methods */}
				<Box sx={{ flex: 1 }}>
					<Typography variant="subtitle1" gutterBottom>
						Sign-in Methods
					</Typography>
					<FormControlLabel
						control={
							<Switch
								checked={enableLocalSignIn}
								onChange={e =>
									setEnableLocalSignIn(e.target.checked)
								}
								disabled={!enableGoogleSignIn}
							/>
						}
						label="Enable Local Sign-in"
					/>
					<br />
					<FormControlLabel
						control={
							<Switch
								checked={enableGoogleSignIn}
								onChange={e =>
									setEnableGoogleSignIn(e.target.checked)
								}
								disabled={!enableLocalSignIn}
							/>
						}
						label="Enable Google Sign-in"
					/>
					<br />
					<FormControlLabel
						control={
							<Switch
								checked={enableForgetPassword}
								onChange={e =>
									setEnableForgetPassword(e.target.checked)
								}
							/>
						}
						label="Enable Forget Password"
					/>
					<br />
					<FormControlLabel
						control={
							<Switch
								checked={enableOtp}
								onChange={e => setEnableOtp(e.target.checked)}
							/>
						}
						label="Enable OTP 2FA"
					/>
				</Box>

				{/* Google Configuration (only show in legacy mode) */}
				{mode === 'legacy' && (
					<Box sx={{ flex: 1 }}>
						<Typography variant="subtitle1" gutterBottom>
							Google Configuration
						</Typography>
						<TextField
							fullWidth
							label="Google Client ID"
							value={googleClientId}
							onChange={e => setGoogleClientId(e.target.value)}
							size="small"
							helperText="Enter your Google OAuth client ID (Legacy mode only)"
						/>
					</Box>
				)}
			</Box>

			<Divider sx={{ my: 3 }} />

			{/* Branding Configuration */}
			<Typography variant="h6" gutterBottom>
				Branding Configuration
			</Typography>

			<Box
				sx={{
					display: 'flex',
					flexDirection: { xs: 'column', md: 'row' },
					gap: 3
				}}
			>
				<Box sx={{ flex: 1 }}>
					<TextField
						fullWidth
						label="Company Name"
						value={branding.companyName || ''}
						onChange={e =>
							updateBranding({ companyName: e.target.value })
						}
						size="small"
						sx={{ mb: 2 }}
					/>
					<TextField
						fullWidth
						label="Tagline"
						value={branding.tagline || ''}
						onChange={e =>
							updateBranding({ tagline: e.target.value })
						}
						size="small"
						sx={{ mb: 2 }}
					/>
					<TextField
						fullWidth
						label="Logo URL"
						value={branding.logo || ''}
						onChange={e => updateBranding({ logo: e.target.value })}
						size="small"
						helperText="URL to your company logo image"
					/>
					<TextField
						fullWidth
						label="Forget Password Title"
						value={branding.forgetPasswordTitle || ''}
						onChange={e =>
							updateBranding({
								forgetPasswordTitle: e.target.value
							})
						}
						size="small"
						sx={{ mt: 2 }}
						helperText="Title shown on forget password form"
					/>
					<TextField
						fullWidth
						label="Forget Password Description"
						value={branding.forgetPasswordDescription || ''}
						onChange={e =>
							updateBranding({
								forgetPasswordDescription: e.target.value
							})
						}
						size="small"
						sx={{ mt: 2 }}
						helperText="Description shown on forget password form"
					/>
					<TextField
						fullWidth
						label="Forget Password Success Title"
						value={branding.forgetPasswordSuccessTitle || ''}
						onChange={e =>
							updateBranding({
								forgetPasswordSuccessTitle: e.target.value
							})
						}
						size="small"
						sx={{ mt: 2 }}
						helperText="Title shown on forget password success screen"
					/>
					<TextField
						fullWidth
						label="Forget Password Success Description"
						value={branding.forgetPasswordSuccessDescription || ''}
						onChange={e =>
							updateBranding({
								forgetPasswordSuccessDescription: e.target.value
							})
						}
						size="small"
						sx={{ mt: 2 }}
						helperText="Description shown on forget password success screen"
					/>
				</Box>

				<Box sx={{ flex: 1 }}>
					<TextField
						fullWidth
						label="Primary Color"
						type="color"
						value={branding.primaryColor || '#1976d2'}
						onChange={e =>
							updateBranding({ primaryColor: e.target.value })
						}
						size="small"
						sx={{ mb: 2 }}
					/>
					<TextField
						fullWidth
						label="Secondary Color"
						type="color"
						value={branding.secondaryColor || '#42a5f5'}
						onChange={e =>
							updateBranding({ secondaryColor: e.target.value })
						}
						size="small"
						sx={{ mb: 2 }}
					/>
					<TextField
						fullWidth
						label="Background Color"
						type="color"
						value={branding.backgroundColor || '#ffffff'}
						onChange={e =>
							updateBranding({ backgroundColor: e.target.value })
						}
						size="small"
						sx={{ mb: 2 }}
					/>
					<TextField
						fullWidth
						label="Text Color"
						type="color"
						value={branding.textColor || '#333333'}
						onChange={e =>
							updateBranding({ textColor: e.target.value })
						}
						size="small"
						sx={{ mb: 2 }}
					/>
					<Typography variant="body2" gutterBottom>
						Logo Height: {branding.logoHeight || 48}px
					</Typography>
					<Slider
						value={branding.logoHeight || 48}
						onChange={(_, value) =>
							updateBranding({
								logoHeight: Array.isArray(value)
									? value[0]
									: value
							})
						}
						min={24}
						max={80}
						step={4}
						marks={[
							{ value: 24, label: '24px' },
							{ value: 48, label: '48px' },
							{ value: 80, label: '80px' }
						]}
					/>
				</Box>
			</Box>

			<Divider sx={{ my: 2 }} />

			<Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
				<Button variant="outlined" onClick={resetDemo}>
					Reset Demo
				</Button>
				<Typography variant="body2" color="text.secondary">
					Login attempts: {loginAttempts}
				</Typography>
			</Box>

			{lastAction && (
				<Alert severity="info" sx={{ mt: 2 }}>
					{lastAction}
				</Alert>
			)}

			{/* Mode Status */}
			<Card sx={{ mt: 2 }}>
				<CardContent>
					<Typography variant="h6" gutterBottom>
						Current Mode: {mode === 'api' ? 'API Integration' : 'Legacy Callback'}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{mode === 'api' ? (
							<>
								<strong>API Integration Mode:</strong> The component will make direct calls to the Lumora API. 
								Google OAuth will use redirect flow via the API's /auth/google endpoint. 
								Tokens will be automatically managed and stored in localStorage.
							</>
						) : (
							<>
								<strong>Legacy Callback Mode:</strong> The component uses callback functions for authentication. 
								Google OAuth uses popup-based flow with @react-oauth/google. 
								You handle token management in your callback functions.
							</>
						)}
					</Typography>
				</CardContent>
			</Card>
		</Paper>
	);

	// Main component render
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Box sx={{ p: { xs: 0, sm: 3 } }}>
				<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
					<Typography
						variant="h4"
						component="h1"
						gutterBottom
						align="center"
					>
						LumoraLogin Interactive Demo
					</Typography>
					<Typography
						variant="subtitle1"
						gutterBottom
						align="center"
						color="text.secondary"
					>
						Configure and test all LumoraLogin props in real-time
					</Typography>
				</Box>

				<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
					{renderControls()}
				</Box>

				<Box sx={{ display: 'flex', justifyContent: 'center' }}>
					<Box
						sx={{
							maxWidth: { xs: '100%', sm: 500 },
							width: '100%'
						}}
					>
						<LumoraLogin
							// Mode-specific props
							authConfig={mode === 'api' ? authConfig : undefined}
							onLocalLogin={mode === 'legacy' ? handleLocalLogin : undefined}
							onGoogleLogin={mode === 'legacy' ? handleGoogleLogin : undefined}
							onForgetPassword={mode === 'legacy' ? handleForgetPassword : undefined}
							
							// Common props
							onLoginSuccess={handleLoginSuccess}
							onLoginError={handleLoginError}
							googleClientId={mode === 'legacy' ? googleClientId || undefined : undefined}
							enableLocalSignIn={enableLocalSignIn}
							enableGoogleSignIn={enableGoogleSignIn}
							enableForgetPassword={enableForgetPassword}
							enableOtp={enableOtp}
							enableRecaptcha={true}
							recaptchaSiteKey="6Le2YeMrAAAAAGRMlDzqrI0aTtFeVMmNp7QpAREf"
							branding={branding}
						/>
					</Box>
				</Box>
			</Box>
		</ThemeProvider>
	);
};

export default App;
