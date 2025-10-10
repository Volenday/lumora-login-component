import { default as React } from 'react';
import { BrandingConfig, LoginState } from '../types';
interface OTPVerificationProps {
    brandConfig: BrandingConfig;
    loginState: LoginState;
    onVerify: (otp: string) => Promise<{
        success: boolean;
        token: string;
    }>;
    onVerifySuccess: (response: unknown) => void;
    onVerifyError: (error: Error) => void;
    onResend: () => void;
    onBackToSignIn: () => void;
}
declare const OTPVerification: React.FC<OTPVerificationProps>;
export default OTPVerification;
//# sourceMappingURL=OTPVerification.d.ts.map