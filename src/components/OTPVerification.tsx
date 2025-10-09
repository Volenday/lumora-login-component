import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { LumoraOTP } from '@volenday/lumora-otp-component';
import { BrandingConfig, LoginState } from '../types';

interface OTPVerificationProps {
	brandConfig: BrandingConfig;
	loginState: LoginState;
	onVerify: (otp: string) => Promise<{ success: boolean; token: string }>;
	onVerifySuccess: (response: unknown) => void;
	onVerifyError: (error: Error) => void;
	onResend: () => void;
	onBackToSignIn: () => void;
}

const OTPVerification: React.FC<OTPVerificationProps> = ({
	brandConfig,
	loginState,
	onVerify,
	onVerifySuccess,
	onVerifyError,
	onResend,
	onBackToSignIn
}) => {
	return (
		<>
			{/* Logo and Branding Section for OTP */}
			<Box sx={{ textAlign: 'center', mb: 3 }}>
				{brandConfig.logo && (
					<Box sx={{ mb: 2 }}>
						{typeof brandConfig.logo === 'string' ? (
							<img
								src={brandConfig.logo}
								alt={brandConfig.companyName || 'Company Logo'}
								style={{
									height: brandConfig.logoHeight,
									maxWidth: '100%',
									objectFit: 'contain'
								}}
							/>
						) : (
							brandConfig.logo
						)}
					</Box>
				)}

				<Typography
					variant="h5"
					component="h1"
					sx={{
						color: brandConfig.textColor,
						fontWeight: 600,
						fontSize: { xs: '1.5rem', sm: '1.75rem' }
					}}
				>
					Verify Your Identity
				</Typography>
			</Box>

			<LumoraOTP
				onVerify={onVerify}
				onVerifySuccess={onVerifySuccess}
				onVerifyError={onVerifyError}
				onResend={onResend}
				instructionText="Please enter the 6-digit code sent to your email"
				showResend={true}
				resendCooldown={60}
				expirationTime={300}
				showExpirationTimer={true}
			/>

			{loginState === 'otp-error' && (
				<Box textAlign="center" sx={{ mt: 3 }}>
					<Button
						variant="text"
						onClick={onBackToSignIn}
						sx={{
							textTransform: 'none',
							color: brandConfig.primaryColor,
							fontWeight: 500,
							'&:hover': {
								backgroundColor: `${brandConfig.primaryColor}08`
							}
						}}
					>
						Back to Sign In
					</Button>
				</Box>
			)}
		</>
	);
};

export default OTPVerification;
