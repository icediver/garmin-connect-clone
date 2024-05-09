import { IActivityDetails } from '@/garmin-connect/types/activity';
import { IStatsItem } from './stats-item/StatsItem';

export function getStats(props: IActivityDetails): IStatsItem[] {
	const stats: IStatsItem[] = [];
	const distance: IStatsItem = {
		title: 'Distance',
		stats: [
			{
				Distance: `${(props.summaryDTO.distance / 1000).toFixed(2).toString()}  km`,
			},
		],
	};
	if (distance) stats.push(distance);
	const calories: IStatsItem = {
		title: 'Nutrition & Hydration',
		stats: [
			{ 'Resting Calories': props.summaryDTO.bmrCalories },
			{
				'Active Calories':
					props.summaryDTO.calories - props.summaryDTO.bmrCalories,
			},
			{ 'Total calories Burned': props.summaryDTO.calories },
			{ 'Calories Consumed': '--' },
			{ 'Calories Net': -props.summaryDTO.calories },
			{ 'Est. Sweat Loss': props.summaryDTO.waterEstimated },
			{ 'Fluid Consumed': '--' },
			{ 'Fluid Net': -props.summaryDTO.waterEstimated },
		],
	};
	if (calories) stats.push(calories);

	if (props.summaryDTO.avgRespirationRate && props.summaryDTO.maxRunCadence) {
		const respiration: IStatsItem = {
			title: 'Respiration Rate',
			stats: [
				{ 'Avg Respiration Rate': props.summaryDTO.avgRespirationRate },
				{ 'Max Breathing Rate': props.summaryDTO.maxRunCadence },
			],
		};
		if (respiration) stats.push(respiration);
	}
	if (
		props.summaryDTO.avgRespirationRate &&
		props.summaryDTO.maxRespirationRate &&
		props.summaryDTO.minRespirationRate
	) {
		const respiration: IStatsItem = {
			title: 'Respiration Rate',
			stats: [
				{ 'Avg Respiration Rate': props.summaryDTO.avgRespirationRate },
				{ 'Max Breathing Rate': props.summaryDTO.maxRespirationRate },
				{ 'Min Respiration Rate': props.summaryDTO.minRespirationRate },
			],
		};
		if (respiration) stats.push(respiration);
	}
	return stats;
}
