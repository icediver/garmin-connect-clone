'use client';
import clsx from 'clsx';
import Link from 'next/link';

import { HTMLAttributes, useState } from 'react';

export interface ITabsFilter {
	path: string;
	icon?: string;
	subType?: string[];
}

interface ITabsFilters extends HTMLAttributes<HTMLElement> {
	filters: ITabsFilter[];
}

export function TabsFilters({ filters, className }: ITabsFilters) {
	const [active, setActive] = useState('');
	return (
		<div
			className={clsx(
				'my-6 grid h-[36px] w-1/2 grid-cols-9 justify-center',
				className
			)}
		>
			{filters.map((filter, index) => (
				<Link
					key={index}
					// href={filter.path}
					href={'?activityType=' + filter.path}
					className={clsx(
						'border-r-0bg-opacity-0 h-full w-full border py-1 text-center text-[#6c6c6c]  first:rounded-l-md last:rounded-r-md last:border-r',
						{
							['border-2 border-[#1976d2]  bg-[#1976d2]  bg-opacity-100 !text-white']:
								active === filter.path,
						}
					)}
					onClick={() => setActive(filter.path)}
				>
					{filter.icon !== '' ? (
						<i className={`${filter.icon} text-lg`} />
					) : (
						'All'
					)}
				</Link>
			))}
		</div>
	);
}
