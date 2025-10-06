# LumoraLogin Component

A reusable React TypeScript login component with local and Google OAuth authentication, 2FA support, and responsive design.

## Features

- **Local Login**: Email/password authentication with validation
- **Google OAuth**: Integration with Google Sign-In
- **Two-Factor Authentication**: Built-in 2FA support using @volenday/lumora-otp-component
- **Responsive Design**: Mobile-first design using MUI breakpoints
- **Form Validation**: Powered by react-hook-form and Yup
- **TypeScript Support**: Full TypeScript definitions included
- **Customizable**: Configurable links, error handling, and styling
- **Flexible Sign-in Methods**: Enable or disable local and Google sign-in independently

## Installation

```bash
npm install @volenday/lumora-login-component
```

### Private Package Authentication

This component depends on `@volenday/lumora-otp-component`, which is a private package hosted on GitHub Packages. To install it, you need to authenticate with GitHub:

1. **Create a GitHub Personal Access Token:**

   - Go to GitHub Settings → Developer settings → Personal access tokens
   - Generate a new token with `read:packages` permission
   - Copy the token

2. **Configure npm authentication:**

   ```bash
   # Set the GitHub token as an environment variable
   export GITHUB_TOKEN=your_token_here

   # Or add it to your .npmrc file
   echo "@volenday:registry=https://npm.pkg.github.com" >> .npmrc
   echo "//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}" >> .npmrc
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

## Usage

```tsx
import React from "react";
import { LumoraLogin } from "@volenday/lumora-login-component";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme();

const App = () => {
  const handleLocalLogin = async (email: string, password: string) => {
    // Your authentication logic here
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Invalid credentials");
    }

    return response.json();
  };

  const handleGoogleLogin = () => {
    // Your Google OAuth logic here
    window.location.href = "/api/auth/google";
  };

  const handleLoginSuccess = (response: any) => {
    // Handle successful login
    console.log("User logged in:", response);
    // Redirect or update app state
  };

  const handleLoginError = (error: Error) => {
    // Handle login errors
    console.error("Login failed:", error);
  };

  return (
    <ThemeProvider theme={theme}>
      <LumoraLogin
        onLocalLogin={handleLocalLogin}
        onGoogleLogin={handleGoogleLogin}
        onLoginSuccess={handleLoginSuccess}
        onLoginError={handleLoginError}
        googleClientId="your-google-client-id"
        enableLocalSignIn={true}
        enableGoogleSignIn={true}
      />
    </ThemeProvider>
  );
};

export default App;
```

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

## Props

| Prop                 | Type                                                | Required | Default | Description                                                  |
| -------------------- | --------------------------------------------------- | -------- | ------- | ------------------------------------------------------------ |
| `onLocalLogin`       | `(email: string, password: string) => Promise<any>` | ✅       | -       | Callback for local email/password login                      |
| `onGoogleLogin`      | `() => void`                                        | ✅       | -       | Callback for Google OAuth login                              |
| `onLoginSuccess`     | `(response: any) => void`                           | ✅       | -       | Callback for successful login                                |
| `onLoginError`       | `(error: Error) => void`                            | ✅       | -       | Callback for login errors                                    |
| `googleClientId`     | `string`                                            | ❌       | -       | Google OAuth client ID (hides Google button if not provided) |
| `enableLocalSignIn`  | `boolean`                                           | ❌       | `true`  | Enable/disable local email/password sign-in                  |
| `enableGoogleSignIn` | `boolean`                                           | ❌       | `true`  | Enable/disable Google OAuth sign-in                          |

## Component States

The component handles the following states internally:

- **Idle**: Default form state with input fields
- **Loading**: Shows loading spinner during authentication
- **OTP Required**: Displays 2FA component after successful initial login
- **Error**: Shows error message with retry option
- **Success**: Triggers onLoginSuccess callback

## Styling

The component uses Material-UI (MUI) for styling and is fully responsive. You can customize the appearance by:

1. Wrapping with a custom MUI theme
2. Using CSS-in-JS overrides
3. Modifying the component's internal styles

## Dependencies

- React 16.8+
- Material-UI 5.0+
- react-hook-form 7.0+
- @volenday/lumora-otp-component (for 2FA)

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Type checking
npm run type-check
```

## License

MIT
