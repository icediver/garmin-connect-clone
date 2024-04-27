import { useRouter } from 'next/navigation';
import { Dispatch, MouseEvent, SetStateAction } from 'react';

interface ISearch {
	searchString: string;
	setSearchString: Dispatch<SetStateAction<string>>;
}

export function Search({ setSearchString, searchString }: ISearch) {
	const router = useRouter();
	function clickSeachHandler(e: MouseEvent) {
		e.preventDefault();
		router.refresh();
		router.push('?search=' + searchString);
	}

	return (
		<div className="flex rounded-md border-2 border-[#1976d2]  ">
			<input
				type="text"
				placeholder="Search Activities"
				className="w-full  rounded-l-md bg-[#f0f0f0] px-4 py-1 focus:outline-none"
				onChange={(e) => setSearchString(e.target.value)}
			/>
			<button
				className="icon-search rounded-r-sm bg-[#1976d2] px-2 text-white"
				onClick={clickSeachHandler}
			/>
		</div>
	);
}
