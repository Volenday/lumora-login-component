import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Box, TextField, Button, Stack, CircularProgress } from '@mui/material';
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

	return (
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

				<TextField
					{...register('password')}
					fullWidth
					label="Password"
					type={showPassword ? 'text' : 'password'}
					placeholder="Enter your password"
					error={!!errors.password}
					helperText={errors.password?.message}
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
					{loginState === 'loading' ? (
						<CircularProgress size={24} color="inherit" />
					) : (
						'Sign In'
					)}
				</Button>

				{enableForgetPassword && onForgetPassword && (
					<Box textAlign="right" sx={{ mt: 1 }}>
						<Button
							variant="text"
							onClick={onForgetPassword}
							disabled={isDisabled}
							sx={{
								textTransform: 'none',
								color: brandConfig.primaryColor,
								fontWeight: 500,
								fontSize: '0.9rem',
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
