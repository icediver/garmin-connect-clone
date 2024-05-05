import Link from 'next/link';

export function AuthLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="">
			<nav className="absolute left-0 top-0 w-full bg-black p-4">
				<Link href="/" className="inline-block">
					<div className="auth-logo w-[150px]" />
				</Link>
			</nav>
			{children}
		</div>
	);
}
