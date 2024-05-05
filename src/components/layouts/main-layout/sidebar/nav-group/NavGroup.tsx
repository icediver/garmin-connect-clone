import clsx from 'clsx';
import { INavigationItem } from '../../data/sidebar.data';
import styles from './NavGroup.module.scss';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

interface Props {
	data: INavigationItem[];
	color: string;
	isSidebarOpen?: boolean;
}

export function NavGroup({ data, color, isSidebarOpen }: Props) {
	const path = usePathname();
	const [activeLink, setActiveLink] = useState(-1);
	function eventHandlerClick(index: number) {
		if (activeLink === index && !!data[index].subMenu?.length) {
			setActiveLink(-1);
			return;
		}
		setActiveLink(index);
	}
	useEffect(() => {
		if (!isSidebarOpen) setActiveLink(-1);
	}, [isSidebarOpen]);

	return (
		<ul
			className={clsx('mb-4 border-b border-black  pb-4 font-thin text-white')}
		>
			{data.map((item, index) => {
				const isItemWithSubmenu = !!item.subMenu?.length;

				return (
					<li
						key={item.name}
						className={clsx(styles['main-nav-item'], {
							[styles.active]: activeLink === index,
						})}
					>
						<Link
							href={item.path || ''}
							passHref={isItemWithSubmenu}
							className={clsx(styles['main-nav-link'], {
								// [styles.active]: activeLink === index,
								[styles.active]: path.includes(item.name.toLowerCase()),
							})}
							onClick={() => eventHandlerClick(index)}
						>
							<i
								className={clsx(styles['nav-icon'], item.icon)}
								style={{ color }}
							/>
							<span className={styles.text}>{item.name}</span>
							{isItemWithSubmenu && (
								<i
									className={clsx(
										'icon-arrow-down absolute left-60 cursor-pointer',
										styles['nav-toggle-icon'],
										{ ['rotate-180']: activeLink === index }
									)}
									onClick={() => setActiveLink(-1)}
								/>
							)}
						</Link>
						<ul
							className={clsx(
								'overflow-hidden text-sm text-white',
								styles.subMenu,
								{
									['brightness-25']: path.includes('main'),
									[styles.active]: activeLink === index,
								}
							)}
						>
							{item.subMenu?.map((subItem) => (
								<li
									key={subItem.name}
									className={clsx(styles['main-nav-item'], '', {
										['bg-neutral-700']: path === subItem.path,
									})}
								>
									<Link
										href={subItem.path}
										className={clsx(styles['main-nav-link'], '')}
									>
										<div className=" inline-block w-7"></div>
										{subItem.name}
									</Link>
								</li>
							))}
						</ul>
					</li>
				);
			})}
		</ul>
	);
}
