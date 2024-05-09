import { smallStats } from '@/constants/small-stats.constants';
import { IActivityDetails, ISummaryDTO } from '@/garmin-connect/types/activity';
import { secondsToTime } from '@/utils/time.utils';

export function SmallStats({
	activityData,
}: {
	activityData: IActivityDetails;
}) {
	const activityType = activityData.activityTypeDTO.typeKey;
	const stats = smallStats[activityType as keyof typeof smallStats];

	return (
		<div className="flex w-full justify-start">
			{stats.map((stat) => {
				const value = activityData.summaryDTO[stat as keyof ISummaryDTO];
				// if (typeof value === 'undefined' || value !== 'number') return null;
				if (!value) return null;
				const statValue = getValue(+value, stat);

				return (
					<div key={stat} className="w-48">
						<div className="pb-2  text-[26px] font-thin leading-5">
							{Object.values(statValue)[0]}
						</div>
						<span className="pb-4 align-top text-xs capitalize text-[#6c6c6c]">
							{Object.keys(statValue)[0]}
						</span>
					</div>
				);
			})}
		</div>
	);
}

function getValue(value: number | undefined, key: string) {
	if (!value) return { [key]: '-' };

	switch (key) {
		case 'distance':
			return { [key]: (value / 1000).toFixed(2) + ' km' };
		case 'duration':
			return { Time: secondsToTime(value) };
		case 'averageHR':
			return { 'Avg HR': value + ' bpm' };
		case 'averagePower':
			return { 'Avg Power': value + ' W' };
		case 'averageSpeed':
			return { 'Avg Speed': ((value * 60 * 60) / 1000).toFixed(1) + ' km/h' };
		case 'elevationGain':
			return { 'Elevation Gain': value.toFixed() + ' m' };
		case 'elevationLoss':
			return { 'Total Descent': (+value.toFixed()).toLocaleString() + ' m' };
		case 'maxSpeed':
			return { 'Max Speed': ((value * 60 * 60) / 1000).toFixed(1) + ' km/h' };
		default:
			return { [key]: value };
	}
}
