import { secondsToHms } from './time.utils';

export const getActivityIcon = (name: string) => {
	name = name.replace('indoor_cardio', 'cardio');
	const activityType = name.replaceAll('_', '-');
	const activityTrim = activityType.endsWith('-ws')
		? activityType.slice(0, -3)
		: activityType;
	return `icon-activity-${activityTrim}`;
};

export function getAvgPace(distance: number, time: number) {
	const paceInSec = time / (distance / 1000);
	const pace = Math.floor(paceInSec / 60) + '.' + Math.floor(paceInSec % 60);

	return pace;
}

export function getAvgSpeed(distance: number, time: number) {
	const speed = distance / 1000 / (time / 3600);
	return speed;
}
