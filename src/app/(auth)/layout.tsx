import type { Metadata } from 'next';
import { Inter, Open_Sans } from 'next/font/google';
import '../../assets/styles/globals.scss';
import { AuthLayout } from '@/components/layouts/auth-layout/AuthLayout';

const openSans = Open_Sans({ subsets: ['latin'] });

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="normal">
			<body className={openSans.className}>
				<AuthLayout>{children}</AuthLayout>
			</body>
		</html>
	);
}