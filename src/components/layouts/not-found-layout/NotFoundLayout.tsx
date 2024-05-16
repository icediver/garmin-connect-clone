import clsx from 'clsx';
import Link from 'next/link';

interface ILink {
	title: string;
	href: string;
}

const navLinks: ILink[] = [
	{
		title: 'Start work',
		href: '/start',
	},
	{
		title: 'Support',
		href: '/support',
	},
	{
		title: 'Exit',
		href: '/exit',
	},
	{
		title: 'Dashboard',
		href: '/',
	},
];

const footerLinks: ILink[] = [
	{
		title: 'Support',
		href: '/support',
	},
	{
		title: 'Status',
		href: '/status',
	},
	{
		title: 'Terms of use',
		href: '/terms-of-use',
	},
	{
		title: 'Privacy policy',
		href: '/privacy-policy',
	},
	{
		title: 'Security',
		href: '/security',
	},
];

export function NotFoundLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			{' '}
			<header className="">
				<nav className="absolute left-0 top-0 flex w-full items-center justify-between bg-black px-[15%]">
					<Link href="/" className="inline-block">
						<div className="auth-logo w-[150px]" />
					</Link>
					<ul>
						{navLinks.map(({ title, href }) => (
							<li key={title} className="mr-6 inline-block">
								<Link
									href={href}
									className={clsx('font-light text-white', {
										['btn-primary']: title === 'Dashboard',
									})}
								>
									{title}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</header>
			{children}
			<footer className="bg-[#EFEFEF] py-[60px]">
				<nav className="flex w-full items-center justify-between px-[15%] text-[#6C6C6C]">
					<ul>
						{footerLinks.map(({ title, href }) => (
							<li key={title} className="mr-6 inline-block">
								<Link href={href} className="text- font-light">
									{title}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</footer>
		</>
	);
}
