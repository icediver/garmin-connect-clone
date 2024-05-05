import { Home } from '@/components/screens/home/Home';
import { initialGarminClient } from '@/services/garmin.service';

export default async function HomePage() {
	const GCClient = await initialGarminClient();
	// const activites = await GCClient.getActivities();
	const profile = await GCClient.getUserProfile();
	// const daySummary = await GCClient.getUserSummaryDay(profile.displayName);
	console.log(profile);

	return (
		<Home
		// {/*activities={activites} profile={profile} daySummary={daySummary}*/}
		/>
	);
}
