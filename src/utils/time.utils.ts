import {
	IActivityData,
	IMetricsData,
} from '@/services/garmin/activity-details.types';

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
) {
	const metricIndex = activityData.metricDescriptors.filter(
		(item) => item.key === metricDescriptorKey
	)[0].metricsIndex;

	const timestampMetricIndex = activityData.metricDescriptors.filter(
		(item) => item.key === 'directTimestamp'
	)[0].metricsIndex;

	const newArr = activityData.activityDetailMetrics.map((item, index) => {
		const timesince =
			(Number(item.metrics[timestampMetricIndex]) -
				Number(
					activityData.activityDetailMetrics[0].metrics[timestampMetricIndex]
				)) /
			1000;
		return {
			[metricDescriptorKey]:
				metricDescriptorKey === 'directSpeed'
					? (Number(item.metrics[metricIndex]) * 3.6).toFixed(1)
					: item.metrics[metricIndex]?.toFixed(),
			timestamp: secondsToTime(timesince),
		};
	});

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
