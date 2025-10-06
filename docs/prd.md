# PRD: Nova Login Component

## Objective

Create a standardized, reusable, private React login component for internal use, published to GitHub Packages. This component will handle user authentication via local email/password and Google OAuth, with a responsive design to ensure usability across devices.

## Core Requirements & Tech Stack

- **Component Name:** LumoraLogin
- **Package Type:** Private NPM Package for GitHub Packages
- **Language:** TypeScript
- **Framework:** ReactJS
- **UI Libraries:** MUI & MUI Joy UI
- **Form Library:** react-hook-form (Used for managing form state, input validation, and handling submissions across all input fields.)
- **2FA Integration:** @volenday/lumora-otp-component

## Feature Checklist

The component MUST support the following features:

- **Local Login:**
  - Email input field with validation (e.g., format check).
  - Password input field with show/hide toggle.
  - Submit button to trigger login.
- **Social Login:**
  - Google login button that integrates with Google OAuth (handling redirect or popup flow).
- **Two-Factor Authentication (2FA):**
  - After a successful initial login (onLocalLogin or onGoogleLogin success), the component should automatically render the Lumora OTP Component (@volenday/lumora-otp-component) for OTP verification.
  - OTP component is displayed in place of the login form.
  - Pass necessary props to Lumora OTP Component
  - On successful OTP verification, trigger the parent’s onLoginSuccess callback with the final user session or token.
  - On OTP failure, display an error message and allow retry.
- **Responsiveness:**
  - Fully responsive layout that adapts to mobile, tablet, and desktop screens (e.g., using MUI's responsive grid and breakpoints).
- **Additional UX:**
  - Loading indicator during authentication attempts.
  - Option to display a "Forgot Password?" link (configurable).
  - Support for redirecting to registration or other pages via configurable links.

## Component API (Props)

The component's behavior MUST be configured via the following props:

- **onLocalLogin:** (email: string, password: string) => Promise<any> - Callback function executed for local email/password login. Returns a promise to handle async authentication.
- **onGoogleLogin:** () => void - Callback function to initiate Google OAuth flow.
- **onLoginSuccess:** (response: any) => void - Callback executed on successful login (for either local or Google).
- **onLoginError:** (error: Error) => void - Callback executed on failed login.
- **showForgotPassword?:** boolean - If true, displays a "Forgot Password?" link. Defaults to true.
- **forgotPasswordLink?:** string - URL for the forgot password link.
- **showRegisterLink?:** boolean - If true, displays a "Register" link below the form. Defaults to false.
- **registerLink?:** string - URL for the registration link.
- **googleClientId?:** string - Google OAuth client ID for enabling the Google button. If not provided, the Google button is hidden.

## Component States & UX

The component MUST visually represent the following states.

- **Default State:** Form with email and password fields, submit button, and Google login button (if configured). Clear labels and placeholders (e.g., "Enter your email"). Responsive stacking on mobile.
- **Loading State:** Disable inputs and buttons, show a circular progress indicator (e.g., "Logging in...").
- **Success State:** Handled via onLoginSuccess callback; component may briefly show a success message before parent handles redirect.
- **Error State:** Display a clear, concise error message (e.g., "Invalid credentials" or "Network error"). Allow dismissal and retry. Use MUI Alert for errors.
