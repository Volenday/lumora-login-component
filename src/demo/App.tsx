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
	Slider
} from '@mui/material';
import { LumoraLogin, BrandingConfig, GoogleOAuthResponse } from '../index';

// Create Material-UI theme for the demo
const theme = createTheme({
	palette: {
		mode: 'light'
	}
});

// Main demo application component
const App: React.FC = () => {
	// State for all LumoraLogin props
	const [enableLocalSignIn, setEnableLocalSignIn] = useState(true);
	const [enableGoogleSignIn, setEnableGoogleSignIn] = useState(true);
	const [googleClientId, setGoogleClientId] = useState(
		'1077414399410-1k1hg3liscujlq0rlnkgjguh4iblt7f7.apps.googleusercontent.com'
	);

	// State for branding configuration
	const [branding, setBranding] = useState<BrandingConfig>({
		companyName: 'Lumora',
		tagline: 'Secure authentication made simple',
		primaryColor: '#1976d2',
		secondaryColor: '#42a5f5',
		backgroundColor: '#ffffff',
		textColor: '#333333',
		logoHeight: 48,
		logo: 'https://lumora.capital/_next/image?url=%2Fimages%2Flumora-logo.png&w=256&q=75'
	});

	// State for demo feedback
	const [lastAction, setLastAction] = useState<string>('');
	const [loginAttempts, setLoginAttempts] = useState(0);

	// Handle local login simulation
	const handleLocalLogin = async (email: string, password: string) => {
		setLastAction(`Local login attempt with email: ${email}`);
		setLoginAttempts(prev => prev + 1);

		// Simulate API call
		console.log('Local login attempt:', { email, password });

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

	// Handle Google login simulation
	const handleGoogleLogin = (response: GoogleOAuthResponse) => {
		setLastAction(
			`Google login successful! Access token: ${response.access_token.substring(
				0,
				20
			)}...`
		);
		setLoginAttempts(prev => prev + 1);
		console.log('Google login response:', response);
		// In a real implementation, you would send the access token to your backend for verification
	};

	// Handle successful login
	const handleLoginSuccess = (response: unknown) => {
		const responseData = response as { token?: string };
		setLastAction(
			`Login successful! Token: ${responseData.token || 'N/A'}`
		);
		console.log('Login successful:', response);
	};

	// Handle login errors
	const handleLoginError = (error: Error) => {
		setLastAction(`Login failed: ${error.message}`);
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

	// Render configuration controls
	const renderControls = () => (
		<Paper sx={{ p: 3, mb: 3 }}>
			<Typography variant="h6" gutterBottom>
				LumoraLogin Configuration
			</Typography>

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
				</Box>

				{/* Google Configuration */}
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
						helperText="Enter your Google OAuth client ID"
					/>
				</Box>
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
							onLocalLogin={handleLocalLogin}
							onGoogleLogin={handleGoogleLogin}
							onLoginSuccess={handleLoginSuccess}
							onLoginError={handleLoginError}
							googleClientId={googleClientId || undefined}
							enableLocalSignIn={enableLocalSignIn}
							enableGoogleSignIn={enableGoogleSignIn}
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
