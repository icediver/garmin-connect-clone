import type { Metadata } from 'next';

import { NO_INDEX_PAGE } from '@/constants/seo.constants';
import { initialGarminClient } from '@/services/garmin.service';
import { Activities } from '@/components/activities/Activities';
import { ActivityType } from 'garmin-connect/dist/garmin/types/activity';

export const metadata: Metadata = {
	title: 'Activities',
	...NO_INDEX_PAGE,
};

export default async function Page({
	searchParams,
}: {
	searchParams: { [key: string]: string };
}) {
	const { activityType, search } = searchParams;
	const GCClient = await initialGarminClient();
	const activites = await GCClient.getActivities(
		0,
		20,
		activityType as ActivityType
	);
	const activitiesData = await GCClient.getActivitiesData({
		search,
		activityType: activityType as ActivityType,
	});

	return <Activities activites={activitiesData} />;
}
