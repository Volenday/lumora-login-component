import { BrandingConfig } from '../types';

/**
 * Default branding configuration for LumoraLogin component
 * Provides sensible defaults for all branding properties
 */
export const getDefaultBranding = (): BrandingConfig => ({
	// Company branding
	companyName: 'Lumora',
	tagline: 'Secure authentication made simple',

	// Visual styling
	primaryColor: '#1976d2',
	secondaryColor: '#42a5f5',
	backgroundColor: '#ffffff',
	textColor: '#333333',

	// Logo configuration
	logoHeight: 48,
	logo: 'https://via.placeholder.com/200x80/1976d2/ffffff?text=Lumora',

	// Forget password messaging
	forgetPasswordTitle: 'Reset Your Password',
	forgetPasswordDescription:
		'Enter your email address and we will send you a secure link to reset your password.',
	forgetPasswordSuccessTitle: 'Check Your Inbox',
	forgetPasswordSuccessDescription:
		'We have sent you a password reset link. Please check your email and follow the instructions to reset your password.'
});

/**
 * Merges custom branding configuration with default values
 * @param customBranding - Custom branding configuration to merge
 * @returns Complete branding configuration with defaults applied
 */
export const getBrandingConfig = (
	customBranding?: BrandingConfig
): BrandingConfig => ({
	...getDefaultBranding(),
	...customBranding
});
