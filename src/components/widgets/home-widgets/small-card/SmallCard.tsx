import clsx from 'clsx';
import { HTMLAttributes } from 'react';

interface ISmallCard extends HTMLAttributes<HTMLDivElement> {
	children?: React.ReactNode;
	icon?: string;
	color: string;
	title?: string;
}

export function SmallCard({
	className,
	children,
	icon,
	title,
	color,
}: ISmallCard) {
	return (
		<div
			className={clsx(
				'h-[256px] w-[185px] rounded-lg border border-[#e4e4e4] shadow-[0_4px_4px_rgba(0,_0,_0,_0.25)]'
			)}
		>
			<header className="py-3 text-center">
				<div
					className={`icon-${icon} mx-auto inline-block text-xl`}
					style={{ color }}
				/>
				<span className="text-xs">{title}</span>
			</header>
			<div className="w-full">{children}</div>
			<footer></footer>
		</div>
	);
}
