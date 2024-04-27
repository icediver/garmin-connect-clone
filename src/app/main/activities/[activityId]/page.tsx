import Activity from '@/components/activity/Activity';
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
	const activityData = await GCClient.getActivity({ activityId: +activityId });
	const laps = await GCClient.getLaps(activityId);
	// console.log('laps', laps);

	return (
		<div>
			<Activity
				metricsData={metricsData}
				activityData={activityData}
				laps={laps}
			/>
		</div>
	);
}
