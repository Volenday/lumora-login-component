import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import LumoraLogin from '../LumoraLogin';
import { LumoraLoginProps } from '../../types';

// Mock @react-oauth/google
jest.mock('@react-oauth/google', () => ({
	GoogleOAuthProvider: ({ children }: { children: React.ReactNode }) => (
		<>{children}</>
	),
	useGoogleLogin: (config: {
		onSuccess: (response: {
			access_token: string;
			expires_in: number;
			scope: string;
			token_type: string;
		}) => void;
		onError: (error: { error_description?: string }) => void;
	}) => {
		return () => {
			// Simulate successful Google OAuth response
			const mockResponse = {
				access_token: 'mock-google-access-token',
				expires_in: 3600,
				scope: 'openid profile email',
				token_type: 'Bearer'
			};
			config.onSuccess(mockResponse);
		};
	}
}));

// Create a test theme
const testTheme = createTheme();

// Mock props for testing
const createMockProps = (
	overrides: Partial<LumoraLoginProps> = {}
): LumoraLoginProps => ({
	onLocalLogin: jest.fn().mockResolvedValue({ success: true }),
	onGoogleLogin: jest.fn(),
	onLoginSuccess: jest.fn(),
	onLoginError: jest.fn(),
	onForgetPassword: jest.fn().mockResolvedValue({ success: true }),
	googleClientId: 'test-google-client-id',
	enableGoogleSignIn: true,
	enableLocalSignIn: true,
	enableForgetPassword: true,
	...overrides
});

// Helper function to render component with theme
const renderWithTheme = (props: LumoraLoginProps) => {
	return render(
		<ThemeProvider theme={testTheme}>
			<LumoraLogin {...props} />
		</ThemeProvider>
	);
};

// Helper function to create delayed promise for testing
const createDelayedPromise = (delay: number = 100) =>
	new Promise(resolve => setTimeout(resolve, delay));

// Helper function to get form elements
const getFormElements = () => ({
	emailInput: screen.getByLabelText('Email Address'),
	passwordInput: screen.getByLabelText('Password'),
	submitButton: screen.getByRole('button', { name: 'Sign In' })
});

describe('LumoraLogin Component', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	describe('Basic Rendering', () => {
		it('should render the login form with default branding', () => {
			const props = createMockProps();
			renderWithTheme(props);

			expect(
				screen.getByRole('heading', { name: 'Sign In' })
			).toBeInTheDocument();
			expect(screen.getByLabelText('Email Address')).toBeInTheDocument();
			expect(screen.getByLabelText('Password')).toBeInTheDocument();
			expect(
				screen.getByRole('button', { name: 'Sign In' })
			).toBeInTheDocument();
		});

		it('should render with custom company name and tagline', () => {
			const props = createMockProps({
				branding: {
					companyName: 'Test Company',
					tagline: 'Welcome to our platform'
				}
			});
			renderWithTheme(props);

			expect(
				screen.getByText('Welcome to Test Company')
			).toBeInTheDocument();
			expect(
				screen.getByText('Welcome to our platform')
			).toBeInTheDocument();
		});

		it('should render Google sign-in button when enabled', () => {
			const props = createMockProps({
				enableGoogleSignIn: true,
				googleClientId: 'test-client-id'
			});
			renderWithTheme(props);

			expect(
				screen.getByRole('button', { name: 'Continue with Google' })
			).toBeInTheDocument();
		});

		it('should not render Google sign-in button when disabled', () => {
			const props = createMockProps({
				enableGoogleSignIn: false
			});
			renderWithTheme(props);

			expect(
				screen.queryByRole('button', { name: 'Continue with Google' })
			).not.toBeInTheDocument();
		});

		it('should not render local sign-in form when disabled', () => {
			const props = createMockProps({
				enableLocalSignIn: false
			});
			renderWithTheme(props);

			expect(
				screen.queryByLabelText('Email Address')
			).not.toBeInTheDocument();
			expect(screen.queryByLabelText('Password')).not.toBeInTheDocument();
			expect(
				screen.queryByRole('button', { name: 'Sign In' })
			).not.toBeInTheDocument();
		});

		it('should throw error when both sign-in methods are disabled', () => {
			const props = createMockProps({
				enableLocalSignIn: false,
				enableGoogleSignIn: false
			});

			// Suppress console.error for this test
			const consoleSpy = jest
				.spyOn(console, 'error')
				.mockImplementation(() => {});

			expect(() => renderWithTheme(props)).toThrow(
				'At least one sign-in method must be enabled (enableLocalSignIn or enableGoogleSignIn)'
			);

			consoleSpy.mockRestore();
		});
	});

	describe('Form Validation', () => {
		it('should show validation errors for empty form submission', async () => {
			const user = userEvent.setup();
			const props = createMockProps();
			renderWithTheme(props);

			const submitButton = screen.getByRole('button', {
				name: 'Sign In'
			});
			await user.click(submitButton);

			await waitFor(() => {
				expect(
					screen.getByText('Email is required')
				).toBeInTheDocument();
			});
		});

		it('should show validation error for short password', async () => {
			const user = userEvent.setup();
			const props = createMockProps();
			renderWithTheme(props);

			const emailInput = screen.getByLabelText('Email Address');
			const passwordInput = screen.getByLabelText('Password');

			await user.type(emailInput, 'test@example.com');
			await user.type(passwordInput, '123');

			const submitButton = screen.getByRole('button', {
				name: 'Sign In'
			});
			await user.click(submitButton);

			await waitFor(() => {
				expect(
					screen.getByText('Password must be at least 6 characters')
				).toBeInTheDocument();
			});
		});

		it('should clear validation errors when user starts typing', async () => {
			const user = userEvent.setup();
			const props = createMockProps();
			renderWithTheme(props);

			// Submit empty form to trigger validation errors
			const submitButton = screen.getByRole('button', {
				name: 'Sign In'
			});
			await user.click(submitButton);

			await waitFor(() => {
				expect(
					screen.getByText('Email is required')
				).toBeInTheDocument();
			});

			// Start typing in email field
			const emailInput = screen.getByLabelText('Email Address');
			await user.type(emailInput, 'test@example.com');

			await waitFor(() => {
				expect(
					screen.queryByText('Email is required')
				).not.toBeInTheDocument();
			});
		});
	});

	describe('Local Login Flow', () => {
		it('should call onLocalLogin with correct credentials', async () => {
			const user = userEvent.setup();
			const mockOnLocalLogin = jest
				.fn()
				.mockResolvedValue({ success: true });
			const props = createMockProps({ onLocalLogin: mockOnLocalLogin });
			renderWithTheme(props);

			const emailInput = screen.getByLabelText('Email Address');
			const passwordInput = screen.getByLabelText('Password');
			const submitButton = screen.getByRole('button', {
				name: 'Sign In'
			});

			await user.type(emailInput, 'test@example.com');
			await user.type(passwordInput, 'password123');
			await user.click(submitButton);

			await waitFor(() => {
				expect(mockOnLocalLogin).toHaveBeenCalledWith(
					'test@example.com',
					'password123'
				);
			});
		});

		it('should show loading state during login', async () => {
			const user = userEvent.setup();
			const mockOnLocalLogin = jest
				.fn()
				.mockImplementation(() => createDelayedPromise(100));
			const props = createMockProps({ onLocalLogin: mockOnLocalLogin });
			renderWithTheme(props);

			const { emailInput, passwordInput, submitButton } =
				getFormElements();

			await user.type(emailInput, 'test@example.com');
			await user.type(passwordInput, 'password123');
			await user.click(submitButton);

			// Check for loading spinner immediately after click
			expect(screen.getByRole('progressbar')).toBeInTheDocument();
			expect(submitButton).toBeDisabled();
		});

		it('should handle login error and show error message', async () => {
			const user = userEvent.setup();
			const mockOnLocalLogin = jest
				.fn()
				.mockRejectedValue(new Error('Invalid credentials'));
			const mockOnLoginError = jest.fn();
			const props = createMockProps({
				onLocalLogin: mockOnLocalLogin,
				onLoginError: mockOnLoginError
			});
			renderWithTheme(props);

			const emailInput = screen.getByLabelText('Email Address');
			const passwordInput = screen.getByLabelText('Password');
			const submitButton = screen.getByRole('button', {
				name: 'Sign In'
			});

			await user.type(emailInput, 'test@example.com');
			await user.type(passwordInput, 'password123');
			await user.click(submitButton);

			await waitFor(() => {
				expect(
					screen.getByText('Invalid credentials')
				).toBeInTheDocument();
				expect(mockOnLoginError).toHaveBeenCalledWith(
					expect.any(Error)
				);
			});
		});
	});

	describe('Google Login Flow', () => {
		it('should call onGoogleLogin when Google button is clicked', async () => {
			const user = userEvent.setup();
			const mockOnGoogleLogin = jest.fn();
			const props = createMockProps({ onGoogleLogin: mockOnGoogleLogin });
			renderWithTheme(props);

			const googleButton = screen.getByRole('button', {
				name: 'Continue with Google'
			});
			await user.click(googleButton);

			await waitFor(() => {
				expect(mockOnGoogleLogin).toHaveBeenCalledWith({
					access_token: 'mock-google-access-token',
					expires_in: 3600,
					scope: 'openid profile email',
					token_type: 'Bearer'
				});
			});
		});

		it('should show loading state during Google login', async () => {
			const user = userEvent.setup();
			const mockOnGoogleLogin = jest.fn();
			const props = createMockProps({ onGoogleLogin: mockOnGoogleLogin });
			renderWithTheme(props);

			const googleButton = screen.getByRole('button', {
				name: 'Continue with Google'
			});
			await user.click(googleButton);

			await waitFor(() => {
				expect(screen.getByText('Signing in...')).toBeInTheDocument();
				expect(googleButton).toBeDisabled();
			});
		});

		it('should handle Google login error', async () => {
			const user = userEvent.setup();
			const mockOnGoogleLogin = jest.fn().mockImplementation(() => {
				throw new Error('Google login failed');
			});
			const mockOnLoginError = jest.fn();
			const props = createMockProps({
				onGoogleLogin: mockOnGoogleLogin,
				onLoginError: mockOnLoginError
			});
			renderWithTheme(props);

			const googleButton = screen.getByRole('button', {
				name: 'Continue with Google'
			});
			await user.click(googleButton);

			await waitFor(() => {
				expect(
					screen.getByText('Google login failed')
				).toBeInTheDocument();
				expect(mockOnLoginError).toHaveBeenCalledWith(
					expect.any(Error)
				);
			});
		});
	});

	describe('Password Visibility Toggle', () => {
		it('should toggle password visibility when show/hide button is clicked', async () => {
			const user = userEvent.setup();
			const props = createMockProps();
			renderWithTheme(props);

			const passwordInput = screen.getByLabelText('Password');
			const toggleButton = screen.getByRole('button', { name: 'Show' });

			// Initially password should be hidden
			expect(passwordInput).toHaveAttribute('type', 'password');

			// Click show button
			await user.click(toggleButton);
			expect(passwordInput).toHaveAttribute('type', 'text');
			expect(
				screen.getByRole('button', { name: 'Hide' })
			).toBeInTheDocument();

			// Click hide button
			await user.click(screen.getByRole('button', { name: 'Hide' }));
			expect(passwordInput).toHaveAttribute('type', 'password');
			expect(
				screen.getByRole('button', { name: 'Show' })
			).toBeInTheDocument();
		});
	});

	describe('Custom Branding', () => {
		it('should apply custom branding colors', () => {
			const props = createMockProps({
				branding: {
					primaryColor: '#ff0000',
					secondaryColor: '#00ff00',
					backgroundColor: '#f0f0f0',
					textColor: '#333333'
				}
			});
			renderWithTheme(props);

			// The component should render without errors with custom branding
			expect(
				screen.getByRole('heading', { name: 'Sign In' })
			).toBeInTheDocument();
		});

		it('should render custom logo when provided as string', () => {
			const props = createMockProps({
				branding: {
					logo: 'https://example.com/logo.png',
					logoHeight: 60
				}
			});
			renderWithTheme(props);

			const logoImage = screen.getByAltText('Company Logo');
			expect(logoImage).toBeInTheDocument();
			expect(logoImage).toHaveAttribute(
				'src',
				'https://example.com/logo.png'
			);
		});

		it('should render custom logo when provided as React node', () => {
			const customLogo = <div data-testid="custom-logo">Custom Logo</div>;
			const props = createMockProps({
				branding: {
					logo: customLogo
				}
			});
			renderWithTheme(props);

			expect(screen.getByTestId('custom-logo')).toBeInTheDocument();
		});
	});

	describe('Error Handling', () => {
		it('should close error alert when close button is clicked', async () => {
			const user = userEvent.setup();
			const mockOnLocalLogin = jest
				.fn()
				.mockRejectedValue(new Error('Login failed'));
			const props = createMockProps({ onLocalLogin: mockOnLocalLogin });
			renderWithTheme(props);

			// Trigger login error
			const emailInput = screen.getByLabelText('Email Address');
			const passwordInput = screen.getByLabelText('Password');
			const submitButton = screen.getByRole('button', {
				name: 'Sign In'
			});

			await user.type(emailInput, 'test@example.com');
			await user.type(passwordInput, 'password123');
			await user.click(submitButton);

			await waitFor(() => {
				expect(screen.getByText('Login failed')).toBeInTheDocument();
			});

			// Close the error alert
			const closeButton = screen.getByRole('button', { name: 'Close' });
			await user.click(closeButton);

			await waitFor(() => {
				expect(
					screen.queryByText('Login failed')
				).not.toBeInTheDocument();
			});
		});

		it('should show try again button when there is an error', async () => {
			const user = userEvent.setup();
			const mockOnLocalLogin = jest
				.fn()
				.mockRejectedValue(new Error('Login failed'));
			const props = createMockProps({ onLocalLogin: mockOnLocalLogin });
			renderWithTheme(props);

			// Trigger login error
			const emailInput = screen.getByLabelText('Email Address');
			const passwordInput = screen.getByLabelText('Password');
			const submitButton = screen.getByRole('button', {
				name: 'Sign In'
			});

			await user.type(emailInput, 'test@example.com');
			await user.type(passwordInput, 'password123');
			await user.click(submitButton);

			await waitFor(() => {
				expect(
					screen.getByRole('button', { name: 'Try Again' })
				).toBeInTheDocument();
			});
		});
	});

	describe('reCAPTCHA Integration', () => {
		beforeEach(() => {
			// Mock window.grecaptcha
			Object.defineProperty(window, 'grecaptcha', {
				value: {
					ready: jest.fn((callback: () => void) => callback()),
					execute: jest.fn().mockResolvedValue('test-recaptcha-token')
				},
				writable: true
			});
		});

		afterEach(() => {
			delete (window as unknown as { grecaptcha?: unknown }).grecaptcha;
		});

		it('should throw error when enableRecaptcha is true but no site key provided', () => {
			const props = createMockProps({
				enableRecaptcha: true,
				recaptchaSiteKey: undefined
			});

			// Suppress console.error for this test
			const consoleSpy = jest
				.spyOn(console, 'error')
				.mockImplementation(() => {});

			expect(() => renderWithTheme(props)).toThrow(
				'recaptchaSiteKey is required when enableRecaptcha is true'
			);

			consoleSpy.mockRestore();
		});

		it('should not load reCAPTCHA script when disabled', () => {
			const props = createMockProps({
				enableRecaptcha: false,
				recaptchaSiteKey: 'test-site-key'
			});
			renderWithTheme(props);

			// Check that no reCAPTCHA script is loaded
			const scripts = document.querySelectorAll(
				'script[src*="recaptcha"]'
			);
			expect(scripts).toHaveLength(0);
		});

		it('should load reCAPTCHA script when enabled with valid site key', () => {
			const props = createMockProps({
				enableRecaptcha: true,
				recaptchaSiteKey: 'test-site-key'
			});
			renderWithTheme(props);

			// Check that reCAPTCHA script is loaded
			const scripts = document.querySelectorAll(
				'script[src*="recaptcha"]'
			);
			expect(scripts).toHaveLength(1);
			expect(scripts[0]).toHaveAttribute(
				'src',
				'https://www.google.com/recaptcha/enterprise.js?render=test-site-key'
			);
		});

		it('should verify reCAPTCHA during form submission when enabled', async () => {
			const user = userEvent.setup();
			const mockOnLocalLogin = jest
				.fn()
				.mockResolvedValue({ success: true });
			const props = createMockProps({
				enableRecaptcha: true,
				recaptchaSiteKey: 'test-site-key',
				onLocalLogin: mockOnLocalLogin
			});
			renderWithTheme(props);

			const emailInput = screen.getByLabelText('Email Address');
			const passwordInput = screen.getByLabelText('Password');
			const submitButton = screen.getByRole('button', {
				name: 'Sign In'
			});

			await user.type(emailInput, 'test@example.com');
			await user.type(passwordInput, 'password123');
			await user.click(submitButton);

			await waitFor(() => {
				expect(window.grecaptcha.execute).toHaveBeenCalledWith(
					'test-site-key',
					{ action: 'login' }
				);
				expect(mockOnLocalLogin).toHaveBeenCalledWith(
					'test@example.com',
					'password123'
				);
			});
		});

		it('should handle reCAPTCHA verification failure', async () => {
			const user = userEvent.setup();
			const mockOnLocalLogin = jest
				.fn()
				.mockResolvedValue({ success: true });
			const mockOnLoginError = jest.fn();

			// Mock reCAPTCHA to reject
			(window.grecaptcha.execute as jest.Mock).mockRejectedValue(
				new Error('reCAPTCHA failed')
			);

			const props = createMockProps({
				enableRecaptcha: true,
				recaptchaSiteKey: 'test-site-key',
				onLocalLogin: mockOnLocalLogin,
				onLoginError: mockOnLoginError
			});
			renderWithTheme(props);

			const emailInput = screen.getByLabelText('Email Address');
			const passwordInput = screen.getByLabelText('Password');
			const submitButton = screen.getByRole('button', {
				name: 'Sign In'
			});

			await user.type(emailInput, 'test@example.com');
			await user.type(passwordInput, 'password123');
			await user.click(submitButton);

			await waitFor(() => {
				expect(
					screen.getByText('reCAPTCHA verification failed')
				).toBeInTheDocument();
				expect(mockOnLoginError).toHaveBeenCalledWith(
					expect.any(Error)
				);
			});
		});
	});

	describe('Accessibility', () => {
		it('should have proper form labels and accessibility attributes', () => {
			const props = createMockProps();
			renderWithTheme(props);

			const emailInput = screen.getByLabelText('Email Address');
			const passwordInput = screen.getByLabelText('Password');

			expect(emailInput).toHaveAttribute('type', 'email');
			expect(passwordInput).toHaveAttribute('type', 'password');
		});

		it('should disable form inputs during loading states', async () => {
			const user = userEvent.setup();
			const mockOnLocalLogin = jest
				.fn()
				.mockImplementation(() => createDelayedPromise(100));
			const props = createMockProps({ onLocalLogin: mockOnLocalLogin });
			renderWithTheme(props);

			const { emailInput, passwordInput, submitButton } =
				getFormElements();

			await user.type(emailInput, 'test@example.com');
			await user.type(passwordInput, 'password123');
			await user.click(submitButton);

			// Check that inputs are disabled during loading
			expect(emailInput).toBeDisabled();
			expect(passwordInput).toBeDisabled();
			expect(submitButton).toBeDisabled();
		});
	});

	describe('Forget Password Flow', () => {
		it('should show forget password link when enabled', () => {
			const props = createMockProps({
				enableForgetPassword: true,
				onForgetPassword: jest.fn()
			});
			renderWithTheme(props);

			expect(
				screen.getByRole('button', { name: 'Forgot Password?' })
			).toBeInTheDocument();
		});

		it('should not show forget password link when disabled', () => {
			const props = createMockProps({
				enableForgetPassword: false
			});
			renderWithTheme(props);

			expect(
				screen.queryByRole('button', { name: 'Forgot Password?' })
			).not.toBeInTheDocument();
		});

		it('should not show forget password link when onForgetPassword is not provided', () => {
			const props = createMockProps({
				enableForgetPassword: true,
				onForgetPassword: undefined
			});
			renderWithTheme(props);

			expect(
				screen.queryByRole('button', { name: 'Forgot Password?' })
			).not.toBeInTheDocument();
		});

		it('should navigate to forget password form when link is clicked', async () => {
			const user = userEvent.setup();
			const props = createMockProps({
				enableForgetPassword: true,
				onForgetPassword: jest.fn()
			});
			renderWithTheme(props);

			const forgetPasswordLink = screen.getByRole('button', {
				name: 'Forgot Password?'
			});
			await user.click(forgetPasswordLink);

			expect(
				screen.getByRole('heading', { name: 'Reset Password' })
			).toBeInTheDocument();
			expect(
				screen.getByText(
					'Enter your email address and we will send you a link to reset your password.'
				)
			).toBeInTheDocument();
		});

		it('should show forget password form with email input', async () => {
			const user = userEvent.setup();
			const props = createMockProps({
				enableForgetPassword: true,
				onForgetPassword: jest.fn()
			});
			renderWithTheme(props);

			const forgetPasswordLink = screen.getByRole('button', {
				name: 'Forgot Password?'
			});
			await user.click(forgetPasswordLink);

			expect(screen.getByLabelText('Email Address')).toBeInTheDocument();
			expect(
				screen.getByRole('button', { name: 'Send Reset Link' })
			).toBeInTheDocument();
			expect(
				screen.getByRole('button', { name: 'Back to Sign In' })
			).toBeInTheDocument();
		});

		it('should validate forget password form submission', async () => {
			const user = userEvent.setup();
			const props = createMockProps({
				enableForgetPassword: true,
				onForgetPassword: jest.fn()
			});
			renderWithTheme(props);

			// Navigate to forget password form
			const forgetPasswordLink = screen.getByRole('button', {
				name: 'Forgot Password?'
			});
			await user.click(forgetPasswordLink);

			// Submit empty form
			const submitButton = screen.getByRole('button', {
				name: 'Send Reset Link'
			});
			await user.click(submitButton);

			await waitFor(() => {
				expect(
					screen.getByText('Email is required')
				).toBeInTheDocument();
			});
		});

		it('should call onForgetPassword with correct email', async () => {
			const user = userEvent.setup();
			const mockOnForgetPassword = jest
				.fn()
				.mockResolvedValue({ success: true });
			const props = createMockProps({
				enableForgetPassword: true,
				onForgetPassword: mockOnForgetPassword
			});
			renderWithTheme(props);

			// Navigate to forget password form
			const forgetPasswordLink = screen.getByRole('button', {
				name: 'Forgot Password?'
			});
			await user.click(forgetPasswordLink);

			// Fill and submit form
			const emailInput = screen.getByLabelText('Email Address');
			const submitButton = screen.getByRole('button', {
				name: 'Send Reset Link'
			});

			await user.type(emailInput, 'test@example.com');
			await user.click(submitButton);

			await waitFor(() => {
				expect(mockOnForgetPassword).toHaveBeenCalledWith(
					'test@example.com'
				);
			});
		});

		it('should show loading state during forget password submission', async () => {
			const user = userEvent.setup();
			const mockOnForgetPassword = jest
				.fn()
				.mockImplementation(() => createDelayedPromise(100));
			const props = createMockProps({
				enableForgetPassword: true,
				onForgetPassword: mockOnForgetPassword
			});
			renderWithTheme(props);

			// Navigate to forget password form
			const forgetPasswordLink = screen.getByRole('button', {
				name: 'Forgot Password?'
			});
			await user.click(forgetPasswordLink);

			// Fill and submit form
			const emailInput = screen.getByLabelText('Email Address');
			const submitButton = screen.getByRole('button', {
				name: 'Send Reset Link'
			});

			await user.type(emailInput, 'test@example.com');
			await user.click(submitButton);

			// Check for loading state
			expect(screen.getByRole('progressbar')).toBeInTheDocument();
			expect(submitButton).toBeDisabled();
		});

		it('should show success message after successful forget password submission', async () => {
			const user = userEvent.setup();
			const mockOnForgetPassword = jest
				.fn()
				.mockResolvedValue({ success: true });
			const props = createMockProps({
				enableForgetPassword: true,
				onForgetPassword: mockOnForgetPassword
			});
			renderWithTheme(props);

			// Navigate to forget password form
			const forgetPasswordLink = screen.getByRole('button', {
				name: 'Forgot Password?'
			});
			await user.click(forgetPasswordLink);

			// Fill and submit form
			const emailInput = screen.getByLabelText('Email Address');
			const submitButton = screen.getByRole('button', {
				name: 'Send Reset Link'
			});

			await user.type(emailInput, 'test@example.com');
			await user.click(submitButton);

			await waitFor(() => {
				expect(
					screen.getByRole('heading', { name: 'Check Your Email' })
				).toBeInTheDocument();
				expect(
					screen.getByText(
						'We have sent you a password reset link. Please check your email and follow the instructions to reset your password.'
					)
				).toBeInTheDocument();
			});
		});

		it('should handle forget password error and show error message', async () => {
			const user = userEvent.setup();
			const mockOnForgetPassword = jest
				.fn()
				.mockRejectedValue(new Error('Email not found'));
			const mockOnLoginError = jest.fn();
			const props = createMockProps({
				enableForgetPassword: true,
				onForgetPassword: mockOnForgetPassword,
				onLoginError: mockOnLoginError
			});
			renderWithTheme(props);

			// Navigate to forget password form
			const forgetPasswordLink = screen.getByRole('button', {
				name: 'Forgot Password?'
			});
			await user.click(forgetPasswordLink);

			// Fill and submit form
			const emailInput = screen.getByLabelText('Email Address');
			const submitButton = screen.getByRole('button', {
				name: 'Send Reset Link'
			});

			await user.type(emailInput, 'test@example.com');
			await user.click(submitButton);

			await waitFor(() => {
				expect(screen.getByText('Email not found')).toBeInTheDocument();
				expect(mockOnLoginError).toHaveBeenCalledWith(
					expect.any(Error)
				);
			});
		});

		it('should navigate back to login from forget password form', async () => {
			const user = userEvent.setup();
			const props = createMockProps({
				enableForgetPassword: true,
				onForgetPassword: jest.fn()
			});
			renderWithTheme(props);

			// Navigate to forget password form
			const forgetPasswordLink = screen.getByRole('button', {
				name: 'Forgot Password?'
			});
			await user.click(forgetPasswordLink);

			// Click back to login
			const backButton = screen.getByRole('button', {
				name: 'Back to Sign In'
			});
			await user.click(backButton);

			expect(
				screen.getByRole('heading', { name: 'Sign In' })
			).toBeInTheDocument();
		});

		it('should navigate back to login from forget password success screen', async () => {
			const user = userEvent.setup();
			const mockOnForgetPassword = jest
				.fn()
				.mockResolvedValue({ success: true });
			const props = createMockProps({
				enableForgetPassword: true,
				onForgetPassword: mockOnForgetPassword
			});
			renderWithTheme(props);

			// Navigate to forget password form and submit
			const forgetPasswordLink = screen.getByRole('button', {
				name: 'Forgot Password?'
			});
			await user.click(forgetPasswordLink);

			const emailInput = screen.getByLabelText('Email Address');
			const submitButton = screen.getByRole('button', {
				name: 'Send Reset Link'
			});

			await user.type(emailInput, 'test@example.com');
			await user.click(submitButton);

			// Wait for success screen
			await waitFor(() => {
				expect(
					screen.getByRole('heading', { name: 'Check Your Email' })
				).toBeInTheDocument();
			});

			// Click back to login
			const backButton = screen.getByRole('button', {
				name: 'Back to Sign In'
			});
			await user.click(backButton);

			expect(
				screen.getByRole('heading', { name: 'Sign In' })
			).toBeInTheDocument();
		});

		it('should disable forget password link during loading states', async () => {
			const user = userEvent.setup();
			const mockOnLocalLogin = jest
				.fn()
				.mockImplementation(() => createDelayedPromise(100));
			const props = createMockProps({
				enableForgetPassword: true,
				onForgetPassword: jest.fn(),
				onLocalLogin: mockOnLocalLogin
			});
			renderWithTheme(props);

			// Start login process
			const emailInput = screen.getByLabelText('Email Address');
			const passwordInput = screen.getByLabelText('Password');
			const submitButton = screen.getByRole('button', {
				name: 'Sign In'
			});

			await user.type(emailInput, 'test@example.com');
			await user.type(passwordInput, 'password123');
			await user.click(submitButton);

			// Check that forget password link is disabled during loading
			const forgetPasswordLink = screen.getByRole('button', {
				name: 'Forgot Password?'
			});
			expect(forgetPasswordLink).toBeDisabled();
		});
	});
});
