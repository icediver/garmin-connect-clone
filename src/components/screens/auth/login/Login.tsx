import Field from '@/components/ui/form/field/Field';
import { validEmail } from '@/utils/regex';
import clsx from 'clsx';
import Link from 'next/link';
import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import Cookies from 'js-cookie';
import { initialGarminClient } from '@/services/garmin.service';
import { useRouter } from 'next/navigation';

export type LoginType = {
	username: string;
	password: string;
};

export function Login() {
	const { push } = useRouter();
	const recaptchaRef = useRef<ReCAPTCHA>(null);
	const [isReCaptureSolved, setIsReCaptureSolved] = useState(false);
	const [reCaptchaError, setReCaptchaError] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginType>();

	async function onSubmit(
		// event: React.FormEvent<HTMLFormElement>
		data: LoginType
	) {
		// event.preventDefault();

		const captchaValue = recaptchaRef.current?.getValue();
		if (captchaValue) {
			fetch('/api/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
				body: JSON.stringify(data),
			}).then((response) => {
				push('/');
			});
		} else {
			setReCaptchaError(true);
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="">
			<h1 className="mb-10 border-b pb-4 text-3xl font-normal">Sign in</h1>

			<Field
				label="Email Address"
				{...register('username', {
					required: 'Email is required',
					pattern: {
						value: validEmail,
						message: 'Please enter a valid email address',
					},
				})}
				placeholder="email"
				error={errors.username?.message?.toString()}
				isRequired
			/>
			<Field
				label="Password"
				{...register('password', {
					required: 'Password is required!',
					minLength: {
						value: 6,
						message: 'Min length should more than 6 symbols!',
					},
				})}
				error={errors['password']?.message?.toString()}
				type="password"
				isRequired
			/>

			<div className="my-4 h-20">
				<ReCAPTCHA
					sitekey={String(process.env.REACT_APP_SITE_KEY)}
					ref={recaptchaRef}
					onChange={() => setIsReCaptureSolved(!isReCaptureSolved)}
				/>
			</div>
			<div className="h-4 text-end">
				{!isReCaptureSolved && reCaptchaError && (
					<span className="text-end text-red-500">Captcha is required</span>
				)}
			</div>
			<button
				type="submit"
				className={clsx(
					isReCaptureSolved
						? 'bg-[var(--login-button)]'
						: 'bg-[var(--login-button-disabled)]',
					'my-2 h-10 w-full rounded py-2 text-center text-white'
				)}
				disabled={!isReCaptureSolved}
			>
				Sign in
			</button>
			<span>
				Don&apos;t have an account?{' '}
				<Link href="/signup" className="underline">
					Create One
				</Link>
			</span>
		</form>
	);
}
