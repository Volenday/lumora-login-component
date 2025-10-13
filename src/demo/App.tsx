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
	Alert,
	Card,
	CardContent
} from '@mui/material';
import { LumoraLogin, BrandingConfig, LumoraAuthConfig } from '../index';
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
	const isCallbackRoute =
		window.location.pathname === '/auth/callback' ||
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

	// State for all LumoraLogin props
	const [enableLocalSignIn, setEnableLocalSignIn] = useState(true);
	const [enableGoogleSignIn, setEnableGoogleSignIn] = useState(true);
	const [enableForgetPassword, setEnableForgetPassword] = useState(true);
	const [enableOtp, setEnableOtp] = useState(true);

	// State for API configuration
	const [authConfig, setAuthConfig] = useState<LumoraAuthConfig>({
		apiBaseUrl: 'https://dev.api.lumora.capital',
		apiKey: 'demo-api-key',
		googleRedirectUri: 'http://localhost:3000/auth/callback'
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

	// Handle successful login
	const handleLoginSuccess = (response: unknown) => {
		const responseData = response as {
			user?: { email?: string; name?: string };
			tokens?: { accessToken: string };
		};
		setLastAction(
			`✅ Login successful! User: ${responseData.user?.name || responseData.user?.email || 'N/A'}`
		);
		setLoginAttempts(prev => prev + 1);
		console.log('Login successful:', response);
	};

	// Handle login errors
	const handleLoginError = (error: Error) => {
		setLastAction(`❌ Login failed: ${error.message}`);
		console.error('Login error:', error);
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

	// Render the demo
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Box
				sx={{
					minHeight: '100vh',
					backgroundColor: '#f5f5f5',
					padding: 3
				}}
			>
				<Box
					sx={{
						maxWidth: '1400px',
						margin: '0 auto',
						display: 'grid',
						gridTemplateColumns: {
							xs: '1fr',
							md: 'minmax(400px, 600px) 1fr'
						},
						gap: 3,
						alignItems: 'start'
					}}
				>
					{/* Left Column: Login Component */}
					<Box>
						<LumoraLogin
							authConfig={authConfig}
							onLoginSuccess={handleLoginSuccess}
							onLoginError={handleLoginError}
							enableGoogleSignIn={enableGoogleSignIn}
							enableLocalSignIn={enableLocalSignIn}
							enableForgetPassword={enableForgetPassword}
							enableOtp={enableOtp}
							branding={branding}
						/>
					</Box>

					{/* Right Column: Configuration & Info */}
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							gap: 3
						}}
					>
						{/* Demo Info */}
						<Paper sx={{ padding: 3 }}>
							<Typography
								variant="h5"
								gutterBottom
								sx={{ fontWeight: 600 }}
							>
								Lumora Login Component Demo
							</Typography>
							<Typography variant="body2" color="text.secondary">
								This demo showcases the Lumora Login Component using
								the Lumora Capital API for authentication. Configure
								the settings below to test different features.
							</Typography>

							{lastAction && (
								<Alert
									severity={
										lastAction.includes('successful') ||
										lastAction.includes('✅')
											? 'success'
											: 'error'
									}
									sx={{ mt: 2 }}
									onClose={resetDemo}
								>
									{lastAction}
								</Alert>
							)}

							<Box sx={{ mt: 2 }}>
								<Typography variant="caption" color="text.secondary">
									Login Attempts: {loginAttempts}
								</Typography>
							</Box>
						</Paper>

						{/* API Configuration */}
						<Paper sx={{ padding: 3 }}>
							<Typography
								variant="h6"
								gutterBottom
								sx={{ fontWeight: 600 }}
							>
								API Configuration
							</Typography>

							<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
								<TextField
									label="API Base URL"
									value={authConfig.apiBaseUrl}
									onChange={e =>
										setAuthConfig(prev => ({
											...prev,
											apiBaseUrl: e.target.value
										}))
									}
									fullWidth
									size="small"
								/>

								<TextField
									label="API Key (Optional)"
									value={authConfig.apiKey || ''}
									onChange={e =>
										setAuthConfig(prev => ({
											...prev,
											apiKey: e.target.value
										}))
									}
									fullWidth
									size="small"
								/>

								<TextField
									label="Google Redirect URI"
									value={authConfig.googleRedirectUri}
									onChange={e =>
										setAuthConfig(prev => ({
											...prev,
											googleRedirectUri: e.target.value
										}))
									}
									fullWidth
									size="small"
									helperText="URL where users are redirected after Google OAuth"
								/>
							</Box>
						</Paper>

						{/* Feature Toggles */}
						<Paper sx={{ padding: 3 }}>
							<Typography
								variant="h6"
								gutterBottom
								sx={{ fontWeight: 600 }}
							>
								Feature Toggles
							</Typography>

							<Box sx={{ display: 'flex', flexDirection: 'column' }}>
								<FormControlLabel
									control={
										<Switch
											checked={enableLocalSignIn}
											onChange={e =>
												setEnableLocalSignIn(e.target.checked)
											}
										/>
									}
									label="Enable Email/Password Sign In"
								/>

								<FormControlLabel
									control={
										<Switch
											checked={enableGoogleSignIn}
											onChange={e =>
												setEnableGoogleSignIn(e.target.checked)
											}
										/>
									}
									label="Enable Google Sign In"
								/>

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

								<FormControlLabel
									control={
										<Switch
											checked={enableOtp}
											onChange={e => setEnableOtp(e.target.checked)}
										/>
									}
									label="Enable OTP Verification"
								/>
							</Box>
						</Paper>

						{/* Branding Configuration */}
						<Paper sx={{ padding: 3 }}>
							<Typography
								variant="h6"
								gutterBottom
								sx={{ fontWeight: 600 }}
							>
								Branding Configuration
							</Typography>

							<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
								<TextField
									label="Company Name"
									value={branding.companyName}
									onChange={e =>
										updateBranding({ companyName: e.target.value })
									}
									fullWidth
									size="small"
								/>

								<TextField
									label="Tagline"
									value={branding.tagline}
									onChange={e =>
										updateBranding({ tagline: e.target.value })
									}
									fullWidth
									size="small"
								/>

								<TextField
									label="Primary Color"
									type="color"
									value={branding.primaryColor}
									onChange={e =>
										updateBranding({ primaryColor: e.target.value })
									}
									fullWidth
									size="small"
								/>

								<TextField
									label="Secondary Color"
									type="color"
									value={branding.secondaryColor}
									onChange={e =>
										updateBranding({ secondaryColor: e.target.value })
									}
									fullWidth
									size="small"
								/>

								<TextField
									label="Logo URL"
									value={branding.logo as string}
									onChange={e =>
										updateBranding({ logo: e.target.value })
									}
									fullWidth
									size="small"
								/>

								<Button
									variant="outlined"
									onClick={() => {
										setBranding({
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
									}}
								>
									Reset to Defaults
								</Button>
							</Box>
						</Paper>

						{/* Usage Example */}
						<Card variant="outlined">
							<CardContent>
								<Typography
									variant="h6"
									gutterBottom
									sx={{ fontWeight: 600 }}
								>
									Usage Example
								</Typography>

								<Box
									component="pre"
									sx={{
										backgroundColor: '#f5f5f5',
										padding: 2,
										borderRadius: 1,
										overflow: 'auto',
										fontSize: '0.875rem'
									}}
								>
									{`import { LumoraLogin } from '@volenday/lumora-login-component';

<LumoraLogin
  authConfig={{
    apiBaseUrl: 'https://dev.api.lumora.capital',
    googleRedirectUri: 'https://yourapp.com/callback'
  }}
  onLoginSuccess={(response) => {
    console.log('User:', response.user);
    console.log('Tokens:', response.tokens);
  }}
  onLoginError={(error) => {
    console.error('Login failed:', error);
  }}
  enableGoogleSignIn={true}
  enableLocalSignIn={true}
  enableOtp={true}
/>`}
								</Box>
							</CardContent>
						</Card>
					</Box>
				</Box>
			</Box>
		</ThemeProvider>
	);
};

export default App;
