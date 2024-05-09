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
import { Device } from '@/components/widgets/device/Device';
import { ISummaryActivity } from '@/utils/garmin/types/summary.interface';
import { Sensors } from '@/components/widgets/sensors/Sensors';
import { SmallStats } from '@/components/widgets/small-stats/SmallStats';
import { ActivityHeader } from './ActivityHeader';
import { act } from 'react-dom/test-utils';

interface IActivity {
	metricsData: IMetricsData;
	activityData: IActivityDetails;
	laps?: IActivityLaps;
	summary: ISummaryActivity;
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
	// activityData,
	laps,
	summary,
}: IActivity) {
	const { activity, gears, course, devices, sensors } = summary;
	const icon = getActivityIcon(activity.activityTypeDTO.typeKey);

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
		<div className="">
			<ActivityHeader
				icon={icon}
				activityName={activity.activityName}
				type={activity.activityTypeDTO.typeKey}
				userName={activity.metadataDTO.userInfoDto.fullname}
				eventType={activity.eventTypeDTO.typeKey}
				date={activity.summaryDTO.startTimeLocal}
				event={activity.metadataDTO.calendarEventInfo || '--'}
				gear={gears}
				course={course ? course.name : '-'}
			/>
			<div className="grid grid-cols-10">
				<div className="col-span-7 p-6">
					<SmallStats activityData={activity} />
					{activity.metadataDTO.hasPolyline && (
						<div className="h-[345px]">
							<DynamicMap data={metricsData} />
						</div>
					)}
					{/*
           TODO: Check ActivityChart for all metrics
*/}
					{dataMetrics.map((metric) => (
						<ActivityChart
							key={metric.key}
							activityData={metricsData}
							metricDescriptorKey={metric.key}
							color={metric.color}
						/>
					))}
					<ActivityStatistics props={activity} />
				</div>
				<div className="col-span-3 py-6">
					<Device {...summary} />
					<Sensors {...summary} />
				</div>
			</div>
		</div>
	);
}
