import Activity from '@/components/screens/activity/Activity';

import { IActivityDetails } from '@/garmin-connect/types/activity';
import { initialGarminClient } from '@/services/garmin.service';
import { IActivityTypes } from '@/utils/garmin/types/garmin.types';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Activity',
	description: '',
};

export default async function Page({
	params,
}: {
	params: { activityId: string };
}) {
	const { activityId } = params;

	const GCClient = await initialGarminClient();
	const metricsData = await GCClient.getActivityData(activityId);
	const activityData = await GCClient.getActivity({
		activityId: +activityId,
	});
	const laps = await GCClient.getLaps(activityId);
	const summary = await GCClient.getSummaryActivity(+activityId);
	const charts = await GCClient.getChartsOrder();
	const activityType = summary.activity.activityTypeDTO; //.parentTypeId;
	const activityCategory =
		activityType.parentTypeId === 17
			? activityType.typeId
			: activityType.parentTypeId;
	const activityTypes = await GCClient.getActivityTypes();
	const activityTypeKey: IActivityTypes[] = activityTypes.filter(
		(item: IActivityTypes) => item.typeId === activityCategory
	)[0].typeKey;

	const chartsOrder = charts[activityTypeKey].map((item) => item.key);

	const availableCharts = metricsData.metricDescriptors.filter(
		(item) =>
			chartsOrder.includes(item.key) && item.key !== 'directVerticalSpeed'
	);

	console.log(
		activityCategory,
		activityTypeKey,
		chartsOrder,
		chartsOrder,
		availableCharts
	);

	// console.log('laps', laps);
	// console.log(devices);

	return (
		<div>
			<Activity
				metricsData={metricsData}
				activityData={activityData}
				summary={summary}
				laps={laps}
			/>
		</div>
	);
}
