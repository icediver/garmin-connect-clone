import { IActivity } from '@/garmin-connect/types/activity';
import { ActivityItem } from './activities-item/ActivityItem';
import { Filters } from '@/components/widgets/filters/Filters';

interface IActivities {
	activites: IActivity[];
}

export function Activities({ activites }: IActivities) {
	return (
		<>
			<div className="w-[calc(100vw-300px)] px-6">
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
			</div>
		</>
	);
}
