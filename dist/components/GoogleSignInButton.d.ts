import { default as React } from 'react';
import { BrandingConfig, LoginState } from '../types';
interface GoogleSignInButtonProps {
    brandConfig: BrandingConfig;
    loginState: LoginState;
    onClick: () => void;
    showDivider?: boolean;
}
declare const GoogleSignInButton: React.FC<GoogleSignInButtonProps>;
export default GoogleSignInButton;
//# sourceMappingURL=GoogleSignInButton.d.ts.map