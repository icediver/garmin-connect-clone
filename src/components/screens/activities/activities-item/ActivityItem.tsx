import { getActivityIcon } from '@/utils/string.utils';
import { ItemColumn } from './item-column/ItemColumn';
import { getColumns } from './item-column/column.data';
import { IActivity } from '@/garmin-connect/types/activity';

interface IActivityItem {
	activity: IActivity;
}

export function ActivityItem({ activity }: IActivityItem) {
	const icon = getActivityIcon(activity.activityType.typeKey);
	const columns = getColumns(activity);

	return (
		<li className="grid w-full grid-cols-34 rounded-md bg-zinc-100 py-2 font-thin">
			<div className="mx-1 w-full text-end">
				<i className={`${icon} text-2xl text-[#1976d2]`} />
			</div>

			{columns.map((column, index) => (
				<ItemColumn key={index} {...column} />
			))}
		</li>
	);
}
