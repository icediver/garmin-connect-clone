import { Dispatch, SetStateAction } from 'react';

export interface IViewPassword {
	inputType: string;
	setInputType: Dispatch<SetStateAction<string>>;
}
export function ShowHide({ inputType, setInputType }: IViewPassword) {
	return (
		<button
			className="right-0 inline-block h-10 w-24  rounded-r-md bg-white"
			type="button"
			onClick={() => {
				if (inputType === 'password') {
					setInputType('text');
				} else setInputType('password');
			}}
		>
			{inputType === 'password' ? 'Show' : 'Hide'}
		</button>
	);
}
