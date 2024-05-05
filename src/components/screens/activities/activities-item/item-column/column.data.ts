import { IActivity } from 'garmin-connect/dist/garmin/types';
import { IItemColumn } from './ItemColumn';
import { ActivityTypeEnum } from '@/types/activity.enum';
import { secondsToHms } from '@/utils/time.utils';
import { getAvgPace, getAvgSpeed } from '@/utils/string.utils';

export function getColumns(activity: IActivity) {
	const date = new Date(activity.startTimeLocal).toLocaleDateString('en-GB', {
		day: '2-digit',
		month: 'short',
		year: 'numeric',
	});

	const columnData: IItemColumn[] = [
		{
			value: date.split(' ').slice(0, 2).join(' '),
			label: date.split(' ')[2],
			className: '!col-span-2 px-4 text-end',
		},
		{
			isFavorite: true,
			className: '!col-span-1',
		},
		{
			isName: true,
			activityId: activity.activityId,
			activityName: activity.activityName,

			label:
				ActivityTypeEnum[
					activity.activityType.typeKey as keyof typeof ActivityTypeEnum
				],
			className: '!col-span-12',
		},
		{
			value: `${(activity.distance / 1000).toFixed(2)} km`,
			label: 'DISTANCE',
		},
		{
			value: `${secondsToHms(activity.duration)}`,
			label: 'time',
		},
		{
			value: `${getAvgPace(activity.distance, activity.duration)}`,
			label: 'Avg Pace',
		},
		{
			value: activity.averageHR ? activity.averageHR.toFixed() : '-',
			label: 'AVG HR',
		},
		{
			value: getAvgSpeed(activity.distance, activity.duration).toFixed(2),
			label: 'AVG Speed',
		},
		{
			value: activity.calories.toLocaleString(),
			label: 'AVG HR',
		},
	];
	return columnData;
}
