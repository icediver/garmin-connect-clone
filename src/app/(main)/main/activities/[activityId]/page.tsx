import Activity from '@/components/screens/activity/Activity';

import { IActivityDetails } from '@/garmin-connect/types/activity';
import { initialGarminClient } from '@/services/garmin.service';
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
	// console.log('laps', laps);
	// console.log(devices);
	// console.log(charts);

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
