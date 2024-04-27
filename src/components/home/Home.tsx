'use client';
import { IActivity, ISocialProfile } from 'garmin-connect/dist/garmin/types';
import { IDaySummary } from '@/utils/garmin/types/garmin-user-summary.types';
import { CaloriesBurned } from '../widgets/home-widgets/calories-burned/CaloriesBurned';
type Props = {
	activity: IActivity;
	profile: ISocialProfile;
	daySummary: IDaySummary;
};
export async function Home({ activity, profile, daySummary }: Props) {
	console.log(daySummary);

	return (
		<div className="h-screen">
			<CaloriesBurned
				total={daySummary.totalKilocalories}
				active={daySummary.activeKilocalories}
				resting={daySummary.bmrKilocalories}
			/>
		</div>
	);
}
