'use client';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import styles from './sidebar/Sidebar.module.scss';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { Sidebar } from './sidebar/Sidebar';
import { ISocialProfile } from 'garmin-connect/dist/garmin/types';
import Image from 'next/image';

export function MainLayout({ children }: { children: React.ReactNode }) {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);
	const [profile, setProfile] = useState<ISocialProfile | null>(null);

	useEffect(() => {
		setProfile(
			Cookies.get('profile') && JSON.parse(Cookies.get('profile') as string)
		);
	}, []);

	return (
		<div className="flex">
			<div
				className={clsx(
					'',
					styles.transitionWidth,
					isSidebarOpen ? 'w-[273px]' : 'w-14'
				)}
			>
				<Sidebar
					isSidebarOpen={isSidebarOpen}
					setIsSidebarOpen={setIsSidebarOpen}
				/>
			</div>
			<div className="grow">
				<header className="h-15 mb-4 flex items-center justify-between border-b border-[#e5e5e5] bg-white pr-6">
					<div
						className={clsx('text-xs', styles['main-nav-toggle'])}
						onClick={() => setIsSidebarOpen(!isSidebarOpen)}
					>
						<i
							className={clsx('icon-arrow-left', styles['icon-arrow-left'], {
								[styles.mirror]: !isSidebarOpen,
							})}
						></i>
					</div>
					<div className="flex gap-4 text-2xl">
						<Link href="/" className="icon-activity-upload"></Link>
						<Link href="/" className="icon-inbox"></Link>
						<Link href="/" className="icon-devices"></Link>
						<div
							className="h-9 w-9 rounded-full bg-gray-200"
							style={{
								backgroundImage: `url(${profile?.profileImageUrlSmall || ''})`,
								backgroundSize: 'cover',
							}}
						>
							{/*<Image
                src={profile?.profileImageUrlSmall || ''}
                alt="avatar"
                width={36}
                height={36}
              /> */}
						</div>
					</div>
				</header>
				<div className="p-6">{children}</div>
			</div>
		</div>
	);
}
