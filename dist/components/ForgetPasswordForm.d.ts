import { default as React } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { BrandingConfig, ForgetPasswordFormData, LoginState, ErrorState } from '../types';
interface ForgetPasswordFormProps {
    brandConfig: BrandingConfig;
    loginState: LoginState;
    error: ErrorState | null;
    onSubmit: SubmitHandler<ForgetPasswordFormData>;
    onBackToLogin: () => void;
    onCloseError: () => void;
}
declare const ForgetPasswordForm: React.FC<ForgetPasswordFormProps>;
export default ForgetPasswordForm;
//# sourceMappingURL=ForgetPasswordForm.d.ts.map