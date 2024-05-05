'use client';
import { useState } from 'react';
import { Login } from './login/Login';
export function Auth({ pictureNumber = 1 }: { pictureNumber: number }) {
	const [isLogin, setIsLogin] = useState(true);

	return (
		<div
			className="h-screen w-screen"
			style={{
				backgroundImage: `url(/images/login/desktop/signin-hero-${pictureNumber}.jpg)`,
				backgroundSize: 'cover',
			}}
		>
			<div className="absolute left-1/2 top-1/2  w-1/5 -translate-x-1/2 -translate-y-1/2 bg-white p-12">
				<Login />
			</div>
		</div>
	);
}
