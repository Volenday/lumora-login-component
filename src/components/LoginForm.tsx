import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
	Box,
	TextField,
	Button,
	Stack,
	CircularProgress,
	FormControl,
	FormLabel
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { BrandingConfig, LoginFormData, LoginState } from '../types';

const validationSchema = yup.object({
	email: yup
		.string()
		.email('Please enter a valid email address')
		.required('Email is required'),
	password: yup
		.string()
		.min(6, 'Password must be at least 6 characters')
		.required('Password is required')
});

interface LoginFormProps {
	brandConfig: BrandingConfig;
	loginState: LoginState;
	onSubmit: SubmitHandler<LoginFormData>;
	onForgetPassword?: () => void;
	enableForgetPassword?: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({
	brandConfig,
	loginState,
	onSubmit,
	onForgetPassword,
	enableForgetPassword = true
}) => {
	const theme = useTheme();

	const [showPassword, setShowPassword] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<LoginFormData>({
		resolver: yupResolver(validationSchema)
	});

	const isDisabled =
		loginState === 'loading' || loginState === 'google-loading';

	// Align input visuals with the provided design (light gray filled fields
	// with rounded corners and subtle borders). This style object is reused
	// for both the email and password inputs to ensure visual consistency.
	const inputSx = {
		'& .MuiInputLabel-root': {
			color: '#5f676d',
			fontWeight: 600
		},
		'& .MuiInputLabel-root.Mui-focused': {
			color: '#5f676d'
		},
		'& .MuiOutlinedInput-root': {
			borderRadius: 1.4,
			backgroundColor: '#f3f4f6',
			'& fieldset': {
				borderColor: '#e5e7eb'
			},
			'&:hover fieldset': {
				borderColor: brandConfig.primaryColor
			},
			'&.Mui-focused fieldset': {
				borderColor: brandConfig.primaryColor
			},
			'&.Mui-disabled': {
				backgroundColor: '#f3f4f6'
			}
		},
		'& .MuiInputBase-input::placeholder': {
			color: '#6b7280',
			opacity: 1
		}
	};

	return (
		<Box component="form" onSubmit={handleSubmit(onSubmit)}>
			<Stack spacing={3}>
				<FormControl fullWidth>
					<FormLabel
						htmlFor="lumora-email"
						sx={{ color: '#5f676d', fontWeight: 700, mb: 0.5 }}
					>
						Email Address
					</FormLabel>
					<TextField
						{...register('email')}
						fullWidth
						id="lumora-email"
						type="email"
						placeholder="Enter your email"
						error={!!errors.email}
						helperText={errors.email?.message}
						disabled={isDisabled}
						sx={inputSx}
					/>
				</FormControl>

				<FormControl fullWidth>
					<FormLabel
						htmlFor="lumora-password"
						sx={{ color: '#5f676d', fontWeight: 700, mb: 0.5 }}
					>
						Password
					</FormLabel>
					<TextField
						{...register('password')}
						fullWidth
						id="lumora-password"
						type={showPassword ? 'text' : 'password'}
						placeholder="Enter your password"
						error={!!errors.password}
						helperText={errors.password?.message}
						disabled={isDisabled}
						sx={inputSx}
						slotProps={{
							input: {
								endAdornment: (
									<Button
										size="small"
										onClick={() =>
											setShowPassword(!showPassword)
										}
										disabled={isDisabled}
										sx={{
											color: brandConfig.primaryColor,
											textTransform: 'none',
											fontWeight: 500,
											'&:hover': {
												backgroundColor: `${brandConfig.primaryColor}10`
											}
										}}
									>
										{showPassword ? 'Hide' : 'Show'}
									</Button>
								)
							}
						}}
					/>
				</FormControl>

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
						fontSize: theme.typography.pxToRem(18),
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
					{loginState === 'loading' ? (
						<CircularProgress size={24} color="inherit" />
					) : (
						'Sign In'
					)}
				</Button>

				{enableForgetPassword && onForgetPassword && (
					<Box textAlign="center" sx={{ mt: 1 }}>
						<Button
							variant="text"
							onClick={onForgetPassword}
							disabled={isDisabled}
							sx={{
								textTransform: 'none',
								color: brandConfig.primaryColor,
								fontWeight: 500,
								fontSize: theme.typography.pxToRem(18),
								'&:hover': {
									backgroundColor: `${brandConfig.primaryColor}08`
								}
							}}
						>
							Forgot Password?
						</Button>
					</Box>
				)}
			</Stack>
		</Box>
	);
};

export default LoginForm;
