import clsx from 'clsx';
import {
	dashboardNavData,
	infoNavData,
	mainNavData,
	otherNavData,
	socialNavData,
} from '../data/sidebar.data';
import { NavGroup } from './nav-group/NavGroup';
import Link from 'next/link';
import styles from './Sidebar.module.scss';
import { Dispatch, SetStateAction } from 'react';
interface Props {
	isNavbarOpen: boolean;
	setIsNavbarOpen: Dispatch<SetStateAction<boolean>>;
}
export function Sidebar({ isNavbarOpen, setIsNavbarOpen }: Props) {
	return (
		<nav className={clsx('relative', isNavbarOpen ? 'w-[273px]' : 'w-14')}>
			<div
				className={clsx(
					'fixed  h-screen overflow-x-hidden',
					styles['main-nav-list'],
					styles.transitionWidth,
					isNavbarOpen ? 'w-[273px]' : 'w-14',
					styles.mainNav
				)}
			>
				<div>
					<Link href="/">
						<div
							className={clsx(
								styles.logo,
								isNavbarOpen ? 'w-[150px]' : 'w-[20px]'
							)}
						></div>
					</Link>
				</div>
				<div className="h-4 " />

				<NavGroup data={dashboardNavData} color={'#aaa'} />
				<NavGroup
					data={mainNavData}
					color={'#11a9ed'}
					isNavbarOpen={isNavbarOpen}
				/>
				<NavGroup data={socialNavData} color={'#ed7e00'} />
				<NavGroup data={otherNavData} color={'#50b012'} />
				<NavGroup data={infoNavData} color={'#a6a6a6'} />
			</div>
		</nav>
	);
}
