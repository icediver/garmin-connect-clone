'use client';
import clsx from 'clsx';
import { useState } from 'react';
import styles from './sidebar/Sidebar.module.scss';
import Link from 'next/link';
import { Sidebar } from './sidebar/Sidebar';

export function MainLayout({ children }: { children: React.ReactNode }) {
	const [isNavbarOpen, setIsNavbarOpen] = useState(true);
	return (
		<div className="flex">
			<div
				className={clsx(
					'',
					styles.transitionWidth,
					isNavbarOpen ? 'w-[273px]' : 'w-14'
				)}
			>
				<Sidebar
					isNavbarOpen={isNavbarOpen}
					setIsNavbarOpen={setIsNavbarOpen}
				/>
			</div>
			<div className="grow">
				<header className="h-15 mb-4 flex items-center justify-between border-b border-[#e5e5e5] bg-white pr-6">
					<div
						className={clsx('text-xs', styles['main-nav-toggle'])}
						onClick={() => setIsNavbarOpen(!isNavbarOpen)}
					>
						<i
							className={clsx('icon-arrow-left', styles['icon-arrow-left'], {
								[styles.mirror]: !isNavbarOpen,
							})}
						></i>
					</div>
					<div className="flex gap-4 text-2xl">
						<Link href="/" className="icon-activity-upload"></Link>
						<Link href="/" className="icon-inbox"></Link>
						<Link href="/" className="icon-devices"></Link>
						<div className="h-9 w-9 rounded-full bg-neutral-700"></div>
					</div>
				</header>
				<div className="p-6">{children}</div>
			</div>
		</div>
	);
}
