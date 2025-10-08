export const LumoraOTP = ({
	onVerify,
	onVerifySuccess,
	onVerifyError,
	onResend,
	instructionText
}: any) => (
	<div data-testid="lumora-otp">
		<p>{instructionText}</p>
		<button
			onClick={() =>
				onVerify('123456').then((result: any) => {
					if (result && result.success) {
						onVerifySuccess(result);
					}
				})
			}
			data-testid="verify-otp"
		>
			Verify OTP
		</button>
		<button
			onClick={() =>
				onVerify('invalid').catch((error: any) => onVerifyError(error))
			}
			data-testid="verify-invalid-otp"
		>
			Verify Invalid OTP
		</button>
		<button onClick={onResend} data-testid="resend-otp">
			Resend OTP
		</button>
	</div>
);
