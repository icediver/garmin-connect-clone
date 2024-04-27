'use client';
import { MouseEvent, useEffect, useState } from 'react';
import { dataFilters } from './data/filters.data';
import { Search } from './search/Search';
import { TabsFilters } from './tabs-filters/TabsFilters';
import { useRouter } from 'next/navigation';

interface IFilters {}

export function Filters({}: IFilters) {
	const [queryString, setQueryString] = useState('');
	const [searchString, setSearchString] = useState('');
	const router = useRouter();

	return (
		<>
			<span>{searchString}</span>
			<div className="flex items-center justify-between">
				<Search searchString={searchString} setSearchString={setSearchString} />
				<TabsFilters filters={dataFilters} />
			</div>
		</>
	);
}
