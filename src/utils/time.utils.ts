import { IMetricsForChart } from '@/components/widgets/activity-chart/ActivityChart';
import { TypeMetricForChart } from '@/components/widgets/activity-chart/metric.interface';
import { IMetricsData } from '@/utils/garmin/types/garmin-metrics.types';

export enum EnumMetricType {
	directHeartRate = 'heart rate',
	directElevation = 'elevation',
	directSpeed = 'speed',
	directAirTemperature = 'temperature',
	directDoubleCadence = 'cadence',
}

export type TypeMetricKey = keyof typeof EnumMetricType;

export function secondsToTime(seconds: number) {
	var date = new Date(0);

	date.setSeconds(seconds);

	if (date.getHours() > Math.abs(date.getTimezoneOffset() / 60))
		return date.toISOString().substr(11, 8);

	return date.toISOString().substr(14, 5);
}

export function getDataChartActivity(
	activityData: IMetricsData,
	metricDescriptorKey: TypeMetricKey
): IMetricsForChart[] {
	const metricIndex = activityData.metricDescriptors.filter(
		(item) => item.key === metricDescriptorKey
	)[0].metricsIndex;

	const timestampMetricIndex = activityData.metricDescriptors.filter(
		(item) => item.key === 'directTimestamp'
	)[0].metricsIndex;

	const newArr: TypeMetricForChart[] = activityData.activityDetailMetrics.map(
		(item, index) => {
			const timesince =
				(Number(item.metrics[timestampMetricIndex]) -
					Number(
						activityData.activityDetailMetrics[0].metrics[timestampMetricIndex]
					)) /
				1000;
			const metric = item.metrics[metricIndex];
			return {
				[metricDescriptorKey]: Number(
					metric
						? metricDescriptorKey === 'directSpeed'
							? (metric * 3.6).toFixed(1)
							: metric.toFixed()
						: 0
				),
				timestamp: secondsToTime(timesince),
			};
		}
	);

	return newArr;
}

export function secondsToHms(d: number) {
	d = Number(d);
	const h = Math.floor(d / 3600);
	const m = Math.floor((d % 3600) / 60);
	const s = Math.floor((d % 3600) % 60);
	const hDisplay = h > 0 ? h + ':' : '';
	const mDisplay = m < 10 ? '0' : '' + m + ':';
	const sDisplay = s;

	return hDisplay + mDisplay + sDisplay;
}
