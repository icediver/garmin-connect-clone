import { IActivity } from 'garmin-connect/dist/garmin/types';
import { ActivityItem } from './activities-item/ActivityItem';
import { TabsFilters } from '../widgets/filters/tabs-filters/TabsFilters';
import { Search } from '../widgets/filters/search/Search';
import { Filters } from '../widgets/filters/Filters';

interface IActivities {
	activites: IActivity[];
}

export function Activities({ activites }: IActivities) {
	return (
		<>
			<main className="w-[calc(100vw-300px)] px-6">
				<header>
					<h1 className="text-4xl font-thin">Activities</h1>
					<Filters />
				</header>
				<ul className="flex flex-col gap-3">
					{activites.map((activity) => {
						return (
							<ActivityItem key={activity.activityId} activity={activity} />
						);
					})}
				</ul>
			</main>
		</>
	);
}
