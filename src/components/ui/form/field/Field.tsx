import { forwardRef, useState } from 'react';

import { IField } from './field.interface';
import { ShowHide } from './password/ShowHide';

import clsx from 'clsx';

const Field = forwardRef<HTMLInputElement, IField>(
	(
		{
			label,
			placeholder,
			error,
			className,
			type = 'text',
			icon = false,
			style,
			isRequired = false,
			...rest
		},
		ref
	) => {
		const [inputType, setInputType] = useState(type);
		return (
			<>
				<div className={clsx('relative    gap-8  pt-4', className)}>
					<label className="mb-1 w-full  text-start font-bold">
						{label}
						<span className="text-red-800">{isRequired ? ' *' : ''}</span>
					</label>
					<div className="flex rounded-md border">
						<input
							ref={ref}
							placeholder={placeholder}
							type={inputType}
							{...rest}
							className={clsx(
								'inline-block h-10 w-full rounded  py-1 pl-8 outline-none',
								{
									['border-r']: type === 'password',
								}
							)}
						/>
						{type === 'password' && (
							<ShowHide inputType={inputType} setInputType={setInputType} />
						)}
					</div>
				</div>

				<div className="h-3 text-end text-sm text-red-500">{error}</div>
			</>
		);
	}
);

Field.displayName = 'Field';

export default Field;
