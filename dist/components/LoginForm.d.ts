import { default as React } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { BrandingConfig, LoginFormData, LoginState } from '../types';
interface LoginFormProps {
    brandConfig: BrandingConfig;
    loginState: LoginState;
    onSubmit: SubmitHandler<LoginFormData>;
    onForgetPassword?: () => void;
    enableForgetPassword?: boolean;
}
declare const LoginForm: React.FC<LoginFormProps>;
export default LoginForm;
//# sourceMappingURL=LoginForm.d.ts.map