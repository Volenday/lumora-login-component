import React from 'react';
import { Box, Typography } from '@mui/material';
import { BrandingConfig } from '../types';

interface BrandingHeaderProps {
	brandConfig: BrandingConfig;
	title?: string;
	subtitle?: string;
}

const BrandingHeader: React.FC<BrandingHeaderProps> = ({
	brandConfig,
	title,
	subtitle
}) => {
	return (
		<Box sx={{ textAlign: 'center', mb: 4 }}>
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

			{title && (
				<Typography
					variant="h4"
					component="h1"
					sx={{
						mb: 1,
						color: brandConfig.textColor,
						fontWeight: 600,
						fontSize: { xs: '1.75rem', sm: '2rem' }
					}}
				>
					{title}
				</Typography>
			)}

			{subtitle && (
				<Typography
					variant="body1"
					sx={{
						color: brandConfig.textColor,
						opacity: 0.7,
						fontSize: '0.95rem'
					}}
				>
					{subtitle}
				</Typography>
			)}
		</Box>
	);
};

export default BrandingHeader;
