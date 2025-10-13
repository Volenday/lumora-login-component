# LumoraLogin Component v1.1.0

A reusable React TypeScript login component with local and Google OAuth authentication, 2FA support, forget password functionality, API integration, and responsive design.

## Features

-   **Dual Mode Architecture**: Supports both API-integrated and callback-based authentication
-   **Lumora API Integration**: Direct integration with Lumora API for authentication
-   **Local Login**: Email/password authentication with validation
-   **Google OAuth**: Integration with Google Sign-In (both popup and redirect flows)
-   **Forget Password**: Built-in password reset functionality with email verification
-   **Two-Factor Authentication**: Built-in 2FA support using @volenday/lumora-otp-component
-   **Token Management**: Automatic token refresh and localStorage-based session management
-   **Responsive Design**: Mobile-first design using MUI breakpoints
-   **Form Validation**: Powered by react-hook-form and Yup
-   **TypeScript Support**: Full TypeScript definitions included
-   **Customizable**: Configurable links, error handling, and styling
-   **Flexible Sign-in Methods**: Enable or disable local and Google sign-in independently
-   **Backward Compatibility**: Maintains full compatibility with existing callback-based implementations

## Installation

### Prerequisites

This package requires the following peer dependencies to be installed in your project:

```bash
npm install @mui/material @emotion/react @emotion/styled react react-dom react-hook-form @hookform/resolvers yup @mui/icons-material @react-oauth/google axios
```

### Install from GitHub

This is a private repository. You can install the package directly from GitHub using npm or yarn.

#### Install from Main Branch

```bash
npm install git+https://github.com/Volenday/lumora-login-component.git
```

or with yarn:

```bash
yarn add git+https://github.com/Volenday/lumora-login-component.git
```

#### Install from Specific Branch

```bash
npm install git+https://github.com/Volenday/lumora-login-component.git#branch-name
```

#### Install from Specific Commit

```bash
npm install git+https://github.com/Volenday/lumora-login-component.git#commit-hash
```

### GitHub Authentication

Since this is a private repository, you'll need to authenticate with GitHub:

#### Option 1: Personal Access Token (Recommended)

1. Create a Personal Access Token at [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
2. Select the `repo` scope for full repository access
3. Use the token in your installation command:

```bash
npm install git+https://YOUR_TOKEN@github.com/Volenday/lumora-login-component.git
```

#### Option 2: SSH Key Authentication

If you have SSH keys set up with GitHub:

```bash
npm install git+ssh://git@github.com/Volenday/lumora-login-component.git
```

#### Option 3: Configure Git Credentials

You can also configure Git to use your credentials:

```bash
git config --global credential.helper store
```

Then when prompted during installation, enter your GitHub username and Personal Access Token.

> **Note**: For private repositories, you must have access to the repository. Contact the repository administrators if you need access.

> **Note for Developers**: Make sure to run `npm run build` before pushing changes to ensure the latest compiled code is available for installation.

### Package Information

-   **Package Name**: `@volenday/lumora-login-component`
-   **Version**: 1.0.4
-   **License**: MIT
-   **Repository**: [GitHub Repository](https://github.com/Volenday/lumora-login-component)

### CDN Usage

You can also use the component via CDN:

```html
<!-- UMD build -->
<script src="https://unpkg.com/@volenday/lumora-login-component@1.0.2/dist/lumora-login.umd.js"></script>

<!-- ES Module build -->
<script type="module">
	import { LumoraLogin } from 'https://unpkg.com/@volenday/lumora-login-component@1.0.2/dist/lumora-login.mjs';
</script>
```

## Usage

```tsx
import React from 'react';
import {
	LumoraLogin,
	GoogleOAuthResponse
} from '@volenday/lumora-login-component';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme();

const App = () => {
	const handleLocalLogin = async (email: string, password: string) => {
		// Your authentication logic here
		const response = await fetch('/api/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email, password })
		});

		if (!response.ok) {
			throw new Error('Invalid credentials');
		}

		return response.json();
	};

	const handleGoogleLogin = async (response: GoogleOAuthResponse) => {
		// Your Google OAuth logic here
		console.log('Google OAuth response:', response);

		try {
			// Send the access token to your backend for verification
			const backendResponse = await fetch('/api/auth/google', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ access_token: response.access_token })
			});

			if (!backendResponse.ok) {
				throw new Error('Google authentication failed');
			}

			return await backendResponse.json();
		} catch (error) {
			throw new Error('Failed to verify Google token');
		}
	};

	const handleLoginSuccess = (response: any) => {
		// Handle successful login
		console.log('User logged in:', response);
		// Redirect or update app state
	};

	const handleLoginError = (error: Error) => {
		// Handle login errors
		console.error('Login failed:', error);
	};

	const handleForgetPassword = async (email: string) => {
		// Your forget password logic here
		const response = await fetch('/api/forget-password', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email })
		});

		if (!response.ok) {
			throw new Error('Failed to send reset email');
		}

		return response.json();
	};

	return (
		<ThemeProvider theme={theme}>
			<LumoraLogin
				onLocalLogin={handleLocalLogin}
				onGoogleLogin={handleGoogleLogin}
				onLoginSuccess={handleLoginSuccess}
				onLoginError={handleLoginError}
				onForgetPassword={handleForgetPassword}
				googleClientId="your-google-client-id"
				enableLocalSignIn={true}
				enableGoogleSignIn={true}
				enableForgetPassword={true}
			/>
		</ThemeProvider>
	);
};

export default App;
```

## API Integration Mode (New in v1.1.0)

The component now supports direct integration with the Lumora API, eliminating the need for callback-based authentication. This mode provides automatic token management, session persistence, and seamless Google OAuth redirect flow.

### Basic API Integration Setup

```tsx
import React from 'react';
import {
	LumoraLogin,
	useAuthCallback,
	useLogout
} from '@volenday/lumora-login-component';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme();

// In your login page component
const LoginPage = () => {
	return (
		<ThemeProvider theme={theme}>
			<LumoraLogin
				authConfig={{
					apiBaseUrl: 'https://dev.api.lumora.capital',
					apiKey: 'your-api-key',
					googleRedirectUri: 'http://localhost:3000/auth/callback',
					useApiIntegration: true
				}}
				onLoginSuccess={response => {
					console.log('User logged in:', response);
					// Redirect to dashboard
					window.location.href = '/dashboard';
				}}
				onLoginError={error => {
					console.error('Login failed:', error);
				}}
				enableGoogleSignIn={true}
				enableLocalSignIn={true}
				enableOtp={false}
			/>
		</ThemeProvider>
	);
};

// In your OAuth callback page (e.g., /auth/callback)
const AuthCallbackPage = () => {
	useAuthCallback({
		onSuccess: (tokens, user) => {
			console.log('OAuth successful:', user);
			window.location.href = '/dashboard';
		},
		onError: error => {
			console.error('OAuth failed:', error);
			window.location.href = '/login';
		}
	});

	return <div>Processing authentication...</div>;
};

// In your dashboard or header component
const Header = () => {
	const { logout } = useLogout({
		apiBaseUrl: 'https://dev.api.lumora.capital',
		useApiIntegration: true
	});

	return <button onClick={logout}>Logout</button>;
};
```

### Google OAuth Redirect Flow

The API integration mode uses a redirect-based OAuth flow instead of popups:

1. **Configure redirect URI** in your Lumora API dashboard
2. **Create a callback route** in your app (e.g., `/auth/callback`)
3. **Use the `useAuthCallback` hook** on that route to handle token extraction
4. **Tokens are automatically stored** in localStorage and user profile is fetched

### Environment Configuration

Create a `.env` file with your API configuration:

```bash
# .env
VITE_LUMORA_API_BASE_URL=https://dev.api.lumora.capital
VITE_LUMORA_API_KEY=your-api-key-here
VITE_GOOGLE_REDIRECT_URI=http://localhost:3000/auth/callback

# Alternative environment variable names (also supported)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CALLBACK_URL=http://localhost:3000/auth/google/callback
FRONTEND_URL=http://localhost:3001
API_KEY=your_api_key_here
```

**Environment Variable Priority:**

1. Props passed to component (highest priority)
2. `VITE_*` prefixed environment variables
3. Non-prefixed environment variables (lowest priority)

**Automatic Configuration:**
The component automatically detects and uses environment variables when available, so you can use it without passing any props:

```tsx
// This will work if environment variables are set
<LumoraLogin
  onLoginSuccess={handleLoginSuccess}
  onLoginError={handleLoginError}
  enableGoogleSignIn={true}
  enableLocalSignIn={true}
/>

// For API mode, just set useApiIntegration to true
<LumoraLogin
  authConfig={{
    useApiIntegration: true
    // API_KEY, GOOGLE_CALLBACK_URL, and FRONTEND_URL will be read from .env
  }}
  onLoginSuccess={handleLoginSuccess}
  onLoginError={handleLoginError}
  enableGoogleSignIn={true}
  enableLocalSignIn={true}
/>
```

### API Integration vs Legacy Mode

| Feature                 | API Integration Mode   | Legacy Callback Mode |
| ----------------------- | ---------------------- | -------------------- |
| **Authentication**      | Direct API calls       | Callback functions   |
| **Token Management**    | Automatic with refresh | Manual handling      |
| **Google OAuth**        | Redirect flow          | Popup flow           |
| **Session Persistence** | Automatic              | Manual               |
| **Configuration**       | `authConfig` prop      | Callback props       |
| **Dependencies**        | Requires axios         | No additional deps   |

## Sign-in Method Configuration

The component supports flexible configuration of sign-in methods through the `enableLocalSignIn` and `enableGoogleSignIn` props:

### Both Methods Enabled (Default)

```tsx
<LumoraLogin
	enableLocalSignIn={true}
	enableGoogleSignIn={true}
	// ... other props
/>
```

### Local Sign-in Only

```tsx
<LumoraLogin
	enableLocalSignIn={true}
	enableGoogleSignIn={false}
	// ... other props
/>
```

### Google Sign-in Only

```tsx
<LumoraLogin
	enableLocalSignIn={false}
	enableGoogleSignIn={true}
	googleClientId="your-google-client-id"
	// ... other props
/>
```

**Note**: At least one sign-in method must be enabled. The component will throw an error if both are disabled.

## Forget Password Functionality

The component includes built-in forget password functionality that allows users to request a password reset via email.

### Basic Forget Password Setup

```tsx
<LumoraLogin
	onForgetPassword={handleForgetPassword}
	enableForgetPassword={true}
	// ... other props
/>
```

### Forget Password Configuration

-   **`onForgetPassword`**: Callback function that handles the password reset request
-   **`enableForgetPassword`**: Enable/disable the forget password functionality (default: `true`)
-   The forget password link only appears when both `enableForgetPassword` is `true` and `onForgetPassword` is provided
-   Users can navigate between login and forget password screens seamlessly

### Forget Password Flow

1. **User clicks "Forgot Password?" link** on the login form
2. **Forget password form appears** with email input field
3. **User enters email and submits** the form
4. **Loading state shows** while processing the request
5. **Success screen displays** confirmation that reset email was sent
6. **User can return to login** using the "Back to Sign In" button

### Example Implementation

```tsx
const handleForgetPassword = async (email: string) => {
	try {
		const response = await fetch('/api/forget-password', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email })
		});

		if (!response.ok) {
			const error = await response.json();
			throw new Error(error.message || 'Failed to send reset email');
		}

		return await response.json();
	} catch (error) {
		throw new Error('Network error. Please try again.');
	}
};
```

### Disabling Forget Password

```tsx
<LumoraLogin
	enableForgetPassword={false}
	// ... other props
/>
```

## reCAPTCHA Integration

The component supports Google reCAPTCHA v3 integration for enhanced security:

### Basic reCAPTCHA Setup

```tsx
<LumoraLogin
	enableRecaptcha={true}
	recaptchaSiteKey="your-recaptcha-site-key"
	onLocalLogin={handleLocalLogin}
	onGoogleLogin={handleGoogleLogin}
	onLoginSuccess={handleLoginSuccess}
	onLoginError={handleLoginError}
	// ... other props
/>
```

### reCAPTCHA Configuration

-   **`enableRecaptcha`**: Set to `true` to enable reCAPTCHA verification
-   **`recaptchaSiteKey`**: Your reCAPTCHA site key from Google reCAPTCHA Admin Console
-   When `enableRecaptcha` is `true`, `recaptchaSiteKey` is required
-   reCAPTCHA verification happens automatically before form submission
-   The component loads the reCAPTCHA script only when enabled

### Getting a reCAPTCHA Site Key

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Create a new site or select an existing one
3. Choose reCAPTCHA v3
4. Add your domain(s)
5. Copy the Site Key and use it in the `recaptchaSiteKey` prop

## Props

| Prop                           | Type                                                | Required | Default | Description                                                                                        |
| ------------------------------ | --------------------------------------------------- | -------- | ------- | -------------------------------------------------------------------------------------------------- |
| **API Integration Props**      |                                                     |          |         |                                                                                                    |
| `authConfig`                   | `LumoraAuthConfig`                                  | ❌       | -       | Configuration object for API-integrated mode                                                       |
| `authConfig.apiBaseUrl`        | `string`                                            | ❌       | -       | Base URL for Lumora API (e.g., https://dev.api.lumora.capital)                                     |
| `authConfig.apiKey`            | `string`                                            | ❌       | -       | API key for authentication                                                                         |
| `authConfig.googleRedirectUri` | `string`                                            | ❌       | -       | Full URL where Lumora API redirects after Google OAuth (e.g., http://localhost:3000/auth/callback) |
| `authConfig.useApiIntegration` | `boolean`                                           | ❌       | `false` | Enable API integration mode (true) or use legacy callbacks (false)                                 |
| **Legacy Callback Props**      |                                                     |          |         |                                                                                                    |
| `onLocalLogin`                 | `(email: string, password: string) => Promise<any>` | ❌       | -       | Callback for local email/password login (legacy mode)                                              |
| `onGoogleLogin`                | `(response: GoogleOAuthResponse) => void`           | ❌       | -       | Callback for Google OAuth login with response object (legacy mode)                                 |
| **Common Props**               |                                                     |          |         |                                                                                                    |
| `onLoginSuccess`               | `(response: any) => void`                           | ✅       | -       | Callback for successful login                                                                      |
| `onLoginError`                 | `(error: Error) => void`                            | ✅       | -       | Callback for login errors                                                                          |
| `onForgetPassword`             | `(email: string) => Promise<any>`                   | ❌       | -       | Callback for forget password functionality                                                         |
| **Configuration Props**        |                                                     |          |         |                                                                                                    |
| `enableRecaptcha`              | `boolean`                                           | ❌       | `false` | Enable/disable reCAPTCHA verification                                                              |
| `recaptchaSiteKey`             | `string`                                            | ❌       | -       | reCAPTCHA site key (required when enableRecaptcha is true)                                         |
| `googleClientId`               | `string`                                            | ❌       | -       | Google OAuth client ID (required for legacy mode)                                                  |
| `enableLocalSignIn`            | `boolean`                                           | ❌       | `true`  | Enable/disable local email/password sign-in                                                        |
| `enableGoogleSignIn`           | `boolean`                                           | ❌       | `true`  | Enable/disable Google OAuth sign-in                                                                |
| `enableForgetPassword`         | `boolean`                                           | ❌       | `true`  | Enable/disable forget password functionality                                                       |
| `enableOtp`                    | `boolean`                                           | ❌       | `true`  | Enable/disable OTP 2FA verification feature                                                        |
| `branding`                     | `BrandingConfig`                                    | ❌       | -       | Custom branding configuration for the component                                                    |

## TypeScript Interfaces

### LumoraAuthConfig

Configuration object for API integration mode:

```typescript
interface LumoraAuthConfig {
	apiBaseUrl?: string; // Base URL for Lumora API
	apiKey?: string; // API key for authentication
	googleRedirectUri?: string; // Redirect URI for Google OAuth callback
	useApiIntegration?: boolean; // Enable API integration mode
}
```

### LumoraAuthTokens

Authentication tokens returned by the Lumora API:

```typescript
interface LumoraAuthTokens {
	accessToken: string; // Access token for API requests
	refreshToken: string; // Refresh token for token renewal
}
```

### LumoraUser

User profile object returned by the API:

```typescript
interface LumoraUser {
	id: string; // User ID
	email: string; // User email address
	name?: string; // User display name (optional)
}
```

### GoogleOAuthResponse

The Google OAuth response object (legacy mode only):

```typescript
interface GoogleOAuthResponse {
	access_token: string; // Google access token
	expires_in: number; // Token expiration time in seconds
	scope: string; // OAuth scope
	token_type: string; // Token type (usually "Bearer")
}
```

### ErrorState

Error states are categorized by type for better error handling:

```typescript
interface ErrorState {
	message: string;
	type:
		| 'local'
		| 'google'
		| 'otp'
		| 'network'
		| 'recaptcha'
		| 'forget-password';
}
```

#### Error Types

-   **`local`**: Errors related to email/password authentication
-   **`google`**: Errors related to Google OAuth authentication
-   **`otp`**: Errors related to 2FA/OTP verification
-   **`network`**: Network connectivity or server errors
-   **`recaptcha`**: reCAPTCHA verification errors
-   **`forget-password`**: Errors related to password reset functionality

### LoginState

The component manages different states during the authentication flow:

```typescript
type LoginState =
	| 'idle' // Default form state
	| 'loading' // Local authentication in progress
	| 'google-loading' // Google OAuth in progress
	| 'success' // Authentication successful
	| 'error' // Authentication failed
	| 'otp-required' // 2FA verification needed
	| 'otp-error' // 2FA verification failed
	| 'forget-password' // Forget password form displayed
	| 'forget-password-loading' // Forget password request in progress
	| 'forget-password-success'; // Forget password email sent successfully
```

## Branding Configuration

The `branding` prop allows you to customize the visual appearance of the component:

```tsx
interface BrandingConfig {
	logo?: string | React.ReactNode; // Company logo (URL or React component)
	logoHeight?: number; // Logo height in pixels (default: 48)
	primaryColor?: string; // Primary color for buttons and accents
	secondaryColor?: string; // Secondary color for hover states
	backgroundColor?: string; // Background color of the component
	textColor?: string; // Text color throughout the component
	companyName?: string; // Company name displayed in header
	tagline?: string; // Optional tagline below company name
}
```

### Example with Custom Branding

```tsx
<LumoraLogin
	onLocalLogin={handleLocalLogin}
	onGoogleLogin={handleGoogleLogin}
	onLoginSuccess={handleLoginSuccess}
	onLoginError={handleLoginError}
	branding={{
		companyName: 'My Company',
		tagline: 'Welcome to our platform',
		logo: 'https://example.com/logo.png',
		logoHeight: 60,
		primaryColor: '#ff6b35',
		secondaryColor: '#f7931e',
		backgroundColor: '#f8f9fa',
		textColor: '#2c3e50'
	}}
/>
```

### Using React Components as Logo

```tsx
const CustomLogo = () => (
	<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
		<Box
			sx={{
				width: 40,
				height: 40,
				bgcolor: 'primary.main',
				borderRadius: 1
			}}
		/>
		<Typography variant="h6" color="primary">
			MyApp
		</Typography>
	</Box>
);

<LumoraLogin
	// ... other props
	branding={{
		companyName: 'My Company',
		logo: <CustomLogo />,
		logoHeight: 48,
		primaryColor: '#1976d2'
	}}
/>;
```

### Dynamic Branding Based on Theme

```tsx
const App = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const branding: BrandingConfig = {
		companyName: 'My Company',
		primaryColor: isDarkMode ? '#90caf9' : '#1976d2',
		secondaryColor: isDarkMode ? '#bbdefb' : '#42a5f5',
		backgroundColor: isDarkMode ? '#121212' : '#ffffff',
		textColor: isDarkMode ? '#ffffff' : '#333333'
	};

	return (
		<LumoraLogin
			// ... other props
			branding={branding}
		/>
	);
};
```

## Component States

The component handles the following states internally:

-   **Idle**: Default form state with input fields
-   **Loading**: Shows loading spinner during local authentication
-   **Google-loading**: Shows loading spinner during Google OAuth
-   **OTP Required**: Displays 2FA component after successful initial login
-   **OTP Error**: Shows error state in OTP verification
-   **Error**: Shows error message with retry option
-   **Success**: Triggers onLoginSuccess callback

### State Flow

```
Idle → Loading/Google-loading → OTP Required → Success
  ↓           ↓                    ↓
Error ←───────┴────────────────────┘
```

## Advanced Usage Examples

### Custom Error Handling

```tsx
const handleLoginError = (error: Error) => {
	// Handle different types of errors
	if (error.message.includes('network')) {
		// Show network error message
		showNotification('Please check your internet connection', 'error');
	} else if (error.message.includes('credentials')) {
		// Show credentials error
		showNotification('Invalid email or password', 'error');
	} else {
		// Generic error handling
		showNotification('Login failed. Please try again.', 'error');
	}

	// Log error for debugging
	console.error('Login error:', error);
};
```

### Conditional Rendering Based on User State

```tsx
const App = () => {
	const [user, setUser] = useState(null);
	const [showLogin, setShowLogin] = useState(true);

	const handleLoginSuccess = (response: any) => {
		setUser(response.user);
		setShowLogin(false);
	};

	if (!showLogin && user) {
		return <Dashboard user={user} onLogout={() => setShowLogin(true)} />;
	}

	return (
		<LumoraLogin
			onLocalLogin={handleLocalLogin}
			onGoogleLogin={handleGoogleLogin}
			onLoginSuccess={handleLoginSuccess}
			onLoginError={handleLoginError}
			// ... other props
		/>
	);
};
```

### Integration with State Management

```tsx
import { useDispatch } from 'react-redux';
import { loginSuccess, loginError } from './store/authSlice';

const App = () => {
	const dispatch = useDispatch();

	const handleLoginSuccess = (response: any) => {
		dispatch(loginSuccess(response));
		// Redirect to dashboard
		window.location.href = '/dashboard';
	};

	const handleLoginError = (error: Error) => {
		dispatch(loginError(error.message));
	};

	// ... rest of component
};
```

## Two-Factor Authentication (2FA)

The component includes built-in 2FA support using the `@volenday/lumora-otp-component`. After successful initial login (local or Google), the component automatically transitions to the OTP verification screen.

### OTP Features

-   **6-digit code input**: Clean, user-friendly input interface
-   **Resend functionality**: Users can request a new code with cooldown timer
-   **Expiration timer**: Visual countdown showing code expiration
-   **Error handling**: Clear error messages for invalid codes
-   **Back navigation**: Users can return to the login form if needed

### OTP Configuration

The OTP component is pre-configured with sensible defaults but can be customized by modifying the component's internal OTP props:

```tsx
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
```

## Styling

The component uses Material-UI (MUI) for styling and is fully responsive. You can customize the appearance by:

1. Wrapping with a custom MUI theme
2. Using CSS-in-JS overrides
3. Modifying the component's internal styles

## Dependencies

### Peer Dependencies

-   React ^18.2.0
-   React DOM ^18.2.0
-   @emotion/react >=11.0.0
-   @emotion/styled >=11.0.0
-   @mui/material >=5.0.0
-   react-hook-form >=7.0.0

### Required Dependencies

-   @hookform/resolvers ^5.2.2
-   @mui/icons-material ^7.3.4
-   @react-oauth/google ^0.12.2
-   @volenday/lumora-otp-component ^1.0.3 (for 2FA)
-   yup ^1.7.1

## Interactive Demo

The component includes a comprehensive interactive demo that allows you to test all features and configurations in real-time. The demo provides:

-   **Live Configuration**: Toggle sign-in methods, configure Google OAuth, and adjust branding settings
-   **Real-time Preview**: See changes instantly as you modify the configuration
-   **Error Simulation**: Test error handling and recovery flows
-   **Responsive Testing**: View the component on different screen sizes
-   **Branding Customization**: Adjust colors, logos, and text in real-time

### Running the Demo

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Volenday/lumora-login-component.git
    cd lumora-login-component
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the development server:**

    ```bash
    npm run dev
    ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` to see the interactive demo

### Demo Features

The demo includes configuration controls for:

-   **Mode Toggle**: Switch between Legacy Callback Mode and API Integration Mode
-   **API Configuration**: Configure API settings when in API mode
-   **Sign-in Methods**: Enable/disable local and Google sign-in
-   **Google OAuth**: Configure client ID and test OAuth flow (Legacy mode) or redirect flow (API mode)
-   **OTP 2FA**: Enable/disable OTP verification feature
-   **Branding**: Customize company name, logo, colors, and styling
-   **reCAPTCHA**: Test reCAPTCHA integration (uses test key)
-   **Error Handling**: Simulate various error scenarios
-   **Responsive Design**: Test mobile and desktop layouts
-   **Real-time Testing**: Test both authentication modes with visual feedback

### OAuth Callback Demo

For testing the Google OAuth redirect flow in API mode, you can use the included callback page:

```bash
# Open in browser
open demo-callback.html
```

This demonstrates how the `useAuthCallback` hook would work in a real application.

## Development

### Environment Setup

1. **Create environment file:**

    ```bash
    # Copy the example environment file
    cp .env.example .env
    ```

2. **Configure reCAPTCHA (optional):**

    ```bash
    # Edit .env file and add your reCAPTCHA site key
    VITE_RECAPTCHA_SITE_KEY=your-recaptcha-site-key-here
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Start development server:**

    ```bash
    npm run dev
    ```

5. **Build for production:**

    ```bash
    npm run build
    ```

6. **Type checking:**
    ```bash
    npm run type-check
    ```

### Environment Variables

The demo application supports the following environment variables:

-   `VITE_RECAPTCHA_SITE_KEY`: Your Google reCAPTCHA site key for the demo app
    -   Get your key from [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
    -   If not provided, the demo will use a test key for development purposes

## Troubleshooting

### Common Issues

#### 1. Google OAuth Not Working

**Problem**: Google sign-in button doesn't appear or doesn't work.

**Solutions**:

-   Ensure `googleClientId` is provided and valid
-   Check that your Google OAuth client is configured correctly
-   Verify the domain is added to your Google OAuth client settings
-   Make sure `enableGoogleSignIn` is set to `true`

#### 2. reCAPTCHA Errors

**Problem**: reCAPTCHA verification fails.

**Solutions**:

-   Verify your reCAPTCHA site key is correct
-   Check that the domain is registered in Google reCAPTCHA console
-   Ensure `enableRecaptcha` is `true` when using reCAPTCHA
-   Test with a valid reCAPTCHA site key

#### 3. OTP Component Not Loading

**Problem**: 2FA component doesn't appear after login.

**Solutions**:

-   Ensure `@volenday/lumora-otp-component` is properly installed
-   Check GitHub Packages authentication
-   Verify the OTP component is imported correctly

#### 4. Styling Issues

**Problem**: Component doesn't match your design system.

**Solutions**:

-   Use the `branding` prop to customize colors and styling
-   Wrap with a custom MUI theme
-   Override styles using CSS-in-JS or CSS modules

#### 5. TypeScript Errors

**Problem**: TypeScript compilation errors.

**Solutions**:

-   Ensure all peer dependencies are installed
-   Check that you're using the correct TypeScript version (^5.0.0)
-   Import types from the component: `import { GoogleOAuthResponse, BrandingConfig } from '@volenday/lumora-login-component'`

### Getting Help

If you encounter issues not covered here:

1. Check the [GitHub Issues](https://github.com/Volenday/lumora-login-component/issues)
2. Review the [interactive demo](#interactive-demo) for working examples
3. Create a new issue with:
    - Component version
    - React version
    - Error messages
    - Steps to reproduce

## Migration Guide

### Migrating from v1.0.x to v1.1.0

The v1.1.0 release introduces API integration mode while maintaining full backward compatibility with existing implementations. You can migrate gradually or continue using the legacy callback approach.

#### Option 1: Keep Using Legacy Mode (No Changes Required)

Your existing code will continue to work without any changes:

```tsx
// This still works exactly as before
<LumoraLogin
	onLocalLogin={handleLocalLogin}
	onGoogleLogin={handleGoogleLogin}
	onLoginSuccess={handleLoginSuccess}
	onLoginError={handleLoginError}
	googleClientId="your-google-client-id"
	enableLocalSignIn={true}
	enableGoogleSignIn={true}
/>
```

#### Option 2: Migrate to API Integration Mode

To use the new API integration features:

1. **Install the latest version:**

    ```bash
    npm install git+https://github.com/Volenday/lumora-login-component.git
    ```

2. **Add axios dependency:**

    ```bash
    npm install axios
    ```

3. **Update your component:**

    ```tsx
    // Before (Legacy Mode)
    <LumoraLogin
      onLocalLogin={handleLocalLogin}
      onGoogleLogin={handleGoogleLogin}
      onLoginSuccess={handleLoginSuccess}
      onLoginError={handleLoginError}
      googleClientId="your-google-client-id"
    />

    // After (API Integration Mode)
    <LumoraLogin
      authConfig={{
        apiBaseUrl: 'https://dev.api.lumora.capital',
        apiKey: 'your-api-key',
        googleRedirectUri: 'http://localhost:3000/auth/callback',
        useApiIntegration: true
      }}
      onLoginSuccess={handleLoginSuccess}
      onLoginError={handleLoginError}
    />
    ```

4. **Create OAuth callback page:**

    ```tsx
    // pages/auth/callback.tsx
    import { useAuthCallback } from '@volenday/lumora-login-component';

    const AuthCallbackPage = () => {
    	useAuthCallback({
    		onSuccess: (tokens, user) => {
    			// Handle successful OAuth
    			window.location.href = '/dashboard';
    		},
    		onError: error => {
    			// Handle OAuth error
    			window.location.href = '/login';
    		}
    	});

    	return <div>Processing authentication...</div>;
    };
    ```

5. **Update logout functionality:**

    ```tsx
    // components/Header.tsx
    import { useLogout } from '@volenday/lumora-login-component';

    const Header = () => {
    	const { logout } = useLogout({
    		apiBaseUrl: 'https://dev.api.lumora.capital',
    		useApiIntegration: true
    	});

    	return <button onClick={logout}>Logout</button>;
    };
    ```

#### Benefits of API Integration Mode

-   **Automatic token management**: No need to handle token storage/refresh manually
-   **Session persistence**: Users stay logged in across page refreshes
-   **Simplified Google OAuth**: No need for Google Client ID or popup handling
-   **Better error handling**: Automatic retry logic and token refresh
-   **Reduced boilerplate**: Less code required for authentication

## Changelog

### v1.1.0

-   **NEW**: API integration mode with direct Lumora API support
-   **NEW**: Google OAuth redirect flow using Lumora's /auth/google endpoint
-   **NEW**: Automatic token refresh with Axios interceptors
-   **NEW**: localStorage-based token management
-   **NEW**: useAuthCallback hook for OAuth callback handling
-   **NEW**: useLogout hook for programmatic logout with API integration
-   **NEW**: authConfig prop for comprehensive API configuration
-   **NEW**: enableOtp prop to control OTP feature
-   **IMPROVED**: Backward compatibility maintained with legacy callback props
-   **IMPROVED**: Dual-mode architecture (API vs Legacy)
-   **IMPROVED**: Enhanced documentation with API integration examples
-   **IMPROVED**: Better error handling and user feedback

### v1.0.3

-   **NEW**: Added forget password functionality with email verification
-   **NEW**: Added forget password form with validation and success screens
-   **NEW**: Added `onForgetPassword` callback prop for handling password reset requests
-   **NEW**: Added `enableForgetPassword` prop to control forget password feature
-   **NEW**: Added comprehensive forget password tests
-   **NEW**: Updated demo app to showcase forget password functionality
-   **IMPROVED**: Enhanced error handling with forget password error types
-   **IMPROVED**: Updated TypeScript interfaces to include forget password types
-   **IMPROVED**: Enhanced documentation with forget password usage examples

### v1.0.2

-   Enhanced Google OAuth integration with proper response handling
-   Added comprehensive TypeScript interfaces
-   Improved error handling and state management
-   Added interactive demo with live configuration
-   Enhanced branding customization options
-   Updated dependencies to latest versions

### v1.0.1

-   Initial release with basic authentication features
-   Google OAuth integration
-   2FA support with OTP component
-   Responsive design implementation

## License

MIT
