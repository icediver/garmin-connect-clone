import { useState } from 'react';
import { Stats } from './stats/Stats';
import { Laps } from './laps/Laps';
import { Zones } from './zones/Zones';
import clsx from 'clsx';
import { IActivityDetails } from '@/garmin-connect/types/activity';

enum TabsEnum {
	stats,
	laps,
	times,
}

function tabs(
	props: IActivityDetails
): { id: TabsEnum; label: string; Content: JSX.Element }[] {
	return [
		{
			id: TabsEnum.stats,
			label: 'Stats',
			Content: <Stats props={props} />,
		},
		{
			id: TabsEnum.laps,
			label: 'Laps',
			Content: <Laps props={props} />,
		},
		{
			id: TabsEnum.times,
			label: 'Times in Zones',
			Content: <Zones props={props} />,
		},
	];
}

export function ActivityStatistics({ props }: { props: IActivityDetails }) {
	const [activeTab, setActiveTab] = useState<TabsEnum>(0);
	return (
		<>
			<ul className="tabs flex justify-start gap-3 border-b border-[#ddd] pb-2 text-sm font-normal">
				{tabs(props).map((tab) => {
					return (
						<li key={tab.id} onClick={() => setActiveTab(tab.id)}>
							<label
								className={clsx('border-tabs cursor-pointer pb-2', {
									// ['border-b-2 border-blue-600']: activeTab === tab.id,
									['active']: activeTab === tab.id,
								})}
							>
								{tab.label}
							</label>
						</li>
					);
				})}
			</ul>
			{tabs(props)[activeTab].Content}
		</>
	);
}
