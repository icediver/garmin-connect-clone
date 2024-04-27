import clsx from 'clsx';
import Link from 'next/link';
import { HTMLAttributes } from 'react';

export interface IItemColumn extends HTMLAttributes<HTMLElement> {
	value?: string | number;
	label?: string;
	children?: React.ReactNode;
	isFavorite?: boolean;
	isName?: boolean;
	activityId?: number;
	activityName?: string;
}

export function ItemColumn({
	className,
	value,
	label,
	children,
	isFavorite,
	isName,
	activityId,
	activityName,
}: IItemColumn) {
	return (
		<div className={clsx('col-span-3', className)}>
			<div>{value}</div>
			{isFavorite && <i className="icon-star text-[#a6a6a6]" />}
			{isName && (
				<Link
					href={`/main/activities/${activityId}`}
					className="hover:text-[#1976d2] hover:underline"
				>
					{activityName}
				</Link>
			)}
			{children}
			<div className="text-[9px] font-normal uppercase text-[#6c6c6c]">
				{label}
			</div>
		</div>
	);
}
