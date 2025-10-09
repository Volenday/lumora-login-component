import React from 'react';
import { Box } from '@mui/material';
import { BrandingConfig } from '../types';

interface LoginContainerProps {
	children: React.ReactNode;
	brandConfig: BrandingConfig;
}

const LoginContainer: React.FC<LoginContainerProps> = ({
	children,
	brandConfig
}) => {
	return (
		<Box
			sx={{
				// Mobile: full screen with proper centering
				width: { xs: '100%', sm: 'auto' },
				height: { xs: '100vh', sm: 'auto' },
				minHeight: { xs: '100vh', sm: 'auto' },
				margin: { xs: 0, sm: 'auto' },
				maxWidth: { xs: '100%', sm: '600px' },
				// Desktop: container with card styling
				mt: { xs: 0, sm: 4 },
				boxShadow: {
					xs: 'none',
					sm: '0 8px 32px rgba(0, 0, 0, 0.12)'
				},
				borderRadius: { xs: 0, sm: 2 },
				border: { xs: 'none', sm: '1px solid rgba(0, 0, 0, 0.08)' },
				background: brandConfig.backgroundColor,
				display: 'flex',
				flexDirection: 'column',
				// Prevent horizontal overflow
				overflowX: 'hidden',
				boxSizing: 'border-box'
			}}
		>
			<Box
				sx={{
					p: { xs: 3, sm: 4 },
					flex: 1,
					display: 'flex',
					flexDirection: 'column',
					// Ensure proper mobile centering and prevent overflow
					width: '100%',
					maxWidth: '100%',
					boxSizing: 'border-box'
				}}
			>
				{children}
			</Box>
		</Box>
	);
};

export default LoginContainer;
