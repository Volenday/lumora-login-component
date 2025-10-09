import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
	Box,
	TextField,
	Button,
	Stack,
	CircularProgress,
	Alert,
	Typography
} from '@mui/material';
import {
	BrandingConfig,
	ForgetPasswordFormData,
	LoginState,
	ErrorState
} from '../types';

const validationSchema = yup.object({
	email: yup
		.string()
		.email('Please enter a valid email address')
		.required('Email is required')
});

interface ForgetPasswordFormProps {
	brandConfig: BrandingConfig;
	loginState: LoginState;
	error: ErrorState | null;
	onSubmit: SubmitHandler<ForgetPasswordFormData>;
	onBackToLogin: () => void;
	onCloseError: () => void;
}

const ForgetPasswordForm: React.FC<ForgetPasswordFormProps> = ({
	brandConfig,
	loginState,
	error,
	onSubmit,
	onBackToLogin,
	onCloseError
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<ForgetPasswordFormData>({
		resolver: yupResolver(validationSchema)
	});

	const isDisabled = loginState === 'forget-password-loading';

	return (
		<>
			{error && (
				<Alert severity="error" sx={{ mb: 3 }} onClose={onCloseError}>
					{error.message}
				</Alert>
			)}

			{/* Title and Description Section */}
			<Box sx={{ textAlign: 'center', mb: 3 }}>
				<Typography
					variant="h5"
					component="h1"
					sx={{
						color: brandConfig.textColor,
						fontWeight: 600,
						fontSize: { xs: '1.5rem', sm: '1.75rem' },
						mb: 2
					}}
				>
					{brandConfig.forgetPasswordTitle || 'Reset Password'}
				</Typography>

				<Typography
					variant="body1"
					sx={{
						color: brandConfig.textColor,
						opacity: 0.8,
						mb: 3,
						lineHeight: 1.6
					}}
				>
					{brandConfig.forgetPasswordDescription ||
						'Enter your email address and we will send you a link to reset your password.'}
				</Typography>
			</Box>

			<Box component="form" onSubmit={handleSubmit(onSubmit)}>
				<Stack spacing={3}>
					<TextField
						{...register('email')}
						fullWidth
						label="Email Address"
						type="email"
						placeholder="Enter your email"
						error={!!errors.email}
						helperText={errors.email?.message}
						disabled={isDisabled}
						sx={{
							'& .MuiOutlinedInput-root': {
								borderRadius: 1.4,
								'&:hover fieldset': {
									borderColor: brandConfig.primaryColor
								},
								'&.Mui-focused fieldset': {
									borderColor: brandConfig.primaryColor
								}
							},
							'& .MuiInputLabel-root.Mui-focused': {
								color: brandConfig.primaryColor
							}
						}}
					/>

					<Button
						type="submit"
						fullWidth
						variant="contained"
						size="large"
						disabled={isDisabled}
						sx={{
							py: 1.5,
							backgroundColor: brandConfig.primaryColor,
							borderRadius: 1.4,
							textTransform: 'none',
							fontWeight: 600,
							fontSize: '1rem',
							boxShadow: `0 4px 12px ${brandConfig.primaryColor}30`,
							'&:hover': {
								backgroundColor: brandConfig.secondaryColor,
								boxShadow: `0 6px 16px ${brandConfig.primaryColor}40`
							},
							'&:disabled': {
								backgroundColor: `${brandConfig.primaryColor}60`
							}
						}}
					>
						{isDisabled ? (
							<CircularProgress size={24} color="inherit" />
						) : (
							'Send Reset Link'
						)}
					</Button>

					<Button
						fullWidth
						variant="text"
						onClick={onBackToLogin}
						disabled={isDisabled}
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
				</Stack>
			</Box>
		</>
	);
};

export default ForgetPasswordForm;
