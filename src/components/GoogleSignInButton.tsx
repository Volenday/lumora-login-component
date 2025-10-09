import React from 'react';
import { Button, CircularProgress, Divider, Typography } from '@mui/material';
import { Google as GoogleIcon } from '@mui/icons-material';
import { BrandingConfig, LoginState } from '../types';

interface GoogleSignInButtonProps {
	brandConfig: BrandingConfig;
	loginState: LoginState;
	onClick: () => void;
	showDivider?: boolean;
}

const GoogleSignInButton: React.FC<GoogleSignInButtonProps> = ({
	brandConfig,
	loginState,
	onClick,
	showDivider = false
}) => {
	const isDisabled =
		loginState === 'loading' || loginState === 'google-loading';

	return (
		<>
			{showDivider && (
				<Divider sx={{ my: 1 }}>
					<Typography
						variant="body2"
						sx={{
							color: brandConfig.textColor,
							opacity: 0.6,
							px: 2,
							fontWeight: 500
						}}
					>
						OR
					</Typography>
				</Divider>
			)}

			<Button
				fullWidth
				variant="outlined"
				size="large"
				startIcon={
					loginState === 'google-loading' ? (
						<CircularProgress size={20} color="inherit" />
					) : (
						<GoogleIcon />
					)
				}
				onClick={onClick}
				disabled={isDisabled}
				sx={{
					py: 1.5,
					borderRadius: 1.4,
					textTransform: 'none',
					fontWeight: 500,
					fontSize: '1rem',
					borderColor: brandConfig.textColor + '30',
					color: brandConfig.textColor,
					'&:hover': {
						borderColor: brandConfig.primaryColor,
						backgroundColor: `${brandConfig.primaryColor}08`,
						color: brandConfig.textColor
					},
					'&:active': {
						borderColor: brandConfig.primaryColor,
						backgroundColor: `${brandConfig.primaryColor}12`,
						color: brandConfig.textColor
					},
					'&:disabled': {
						borderColor: brandConfig.textColor + '20',
						color: brandConfig.textColor + '60'
					},
					'&:focus': {
						borderColor: brandConfig.textColor + '30',
						color: brandConfig.textColor
					},
					'&.MuiButton-root': {
						borderColor: brandConfig.textColor + '30',
						color: brandConfig.textColor
					}
				}}
			>
				{loginState === 'google-loading'
					? 'Signing in...'
					: 'Continue with Google'}
			</Button>
		</>
	);
};

export default GoogleSignInButton;
