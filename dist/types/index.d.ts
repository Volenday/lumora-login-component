export interface LumoraLoginProps {
    onLocalLogin: (email: string, password: string) => Promise<any>;
    onGoogleLogin: () => void;
    onLoginSuccess: (response: any) => void;
    onLoginError: (error: Error) => void;
    showForgotPassword?: boolean;
    forgotPasswordLink?: string;
    showRegisterLink?: boolean;
    registerLink?: string;
    googleClientId?: string;
}
export interface LoginFormData {
    email: string;
    password: string;
}
export type LoginState = 'idle' | 'loading' | 'success' | 'error' | 'otp-required';
export interface ErrorState {
    message: string;
    type: 'local' | 'google' | 'otp' | 'network';
}
//# sourceMappingURL=index.d.ts.map