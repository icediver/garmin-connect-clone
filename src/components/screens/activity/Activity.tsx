'use client';
import dynamic from 'next/dynamic';
import { TypeMetricKey } from '@/utils/time.utils';
import { IActivityLaps } from '@/types/laps.interface';
import { getActivityIcon } from '@/utils/string.utils';
import { IMetricsData } from '@/utils/garmin/types/garmin-metrics.types';
import { IActivityDetails } from '@/garmin-connect/types/activity';
import ActivityChart from '@/components/widgets/activity-chart/ActivityChart';
import { useEffect } from 'react';
import { ActivityStatistics } from '@/components/widgets/activity-statistics/ActivityStatistics';

interface IActivity {
	metricsData: IMetricsData;
	activityData: IActivityDetails;
	laps?: IActivityLaps;
	summary: any;
}
const DynamicMap = dynamic(
	() => import('../../widgets/activity-map/ActivityMap'),
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
	summary,
}: IActivity) {
	const icon = getActivityIcon(activityData.activityTypeDTO.typeKey);

	//ignore recharts error
	const error = console.error;
	console.error = (...args: any) => {
		if (/defaultProps/.test(args[0])) return;
		error(...args);
	};

	useEffect(() => {
		console.log('summary', summary);
	}, [summary]);

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
			<ActivityStatistics props={activityData} />
		</div>
	);
}
