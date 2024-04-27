'use client';
import ActivityChart from '../widgets/activity-chart/ActivityChart';
import dynamic from 'next/dynamic';
import { TypeMetricKey } from '@/utils/time.utils';
import { IActivityDetails } from 'garmin-connect/dist/garmin/types';
import { IActivityLaps } from '@/types/laps.interface';
import { getActivityIcon } from '@/utils/string.utils';
import { IMetricsData } from '@/utils/garmin/types/garmin-metrics.types';

interface IActivity {
	metricsData: IMetricsData;
	activityData: IActivityDetails;
	laps?: IActivityLaps;
}
const DynamicMap = dynamic(
	() => import('../widgets/activity-map/ActivityMap'),
	{
		ssr: false,
	}
);
export interface IMetric {
	key: TypeMetricKey;
	color: string;
}
const dataMetrics: IMetric[] = [
	{ key: 'directHeartRate', color: '#FF4254' },
	{ key: 'directElevation', color: '#50b012' },
	{ key: 'directAirTemperature', color: '#9A9A9A' },
	// {
	// 	key: 'directDoubleCadence',
	// 	color: '#ED7F00',
	// },
	{
		key: 'directSpeed',
		color: '#11a9ed',
	},
];

export default function Activity({
	metricsData,
	activityData,
	laps,
}: IActivity) {
	const icon = getActivityIcon(activityData.activityTypeDTO.typeKey);
	console.log(metricsData);

	return (
		<div className="w-[1035px] p-6">
			<div className="flex">
				<div className="h-20 w-20">
					<i className={`activity-type-icon ${icon}`} />
				</div>
				<span className="text-3xl font-thin">{activityData.activityName}</span>
			</div>
			<div className="h-[345px]">
				<DynamicMap data={metricsData} />
			</div>
			{dataMetrics.map((metric) => (
				<ActivityChart
					key={metric.key}
					activityData={metricsData}
					metricDescriptorKey={metric.key}
					color={metric.color}
				/>
			))}
		</div>
	);
}
