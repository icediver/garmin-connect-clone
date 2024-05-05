'use client';
import { IDaySummary } from '@/utils/garmin/types/garmin-user-summary.types';
// import { CaloriesBurned } from '../widgets/home-widgets/calories-burned/CaloriesBurned';
import { CaloriesBurned } from '@/components/widgets/home-widgets/calories-burned/CaloriesBurned';
import { IActivity } from '@/garmin-connect/types/activity';
import { ISocialProfile } from '@/garmin-connect/types';
type Props = {
	activities: IActivity[];
	profile: ISocialProfile;
	daySummary: IDaySummary;
};
export async function Home(
	{
		/*{ activities, profile, daySummary }: Props*/
	}
) {
	// console.log('daySummary', daySummary);

	return (
		<div className="h-screen">
			{/*<CaloriesBurned
        total={daySummary.totalKilocalories}
        active={daySummary.activeKilocalories}
        resting={daySummary.bmrKilocalories}
      />*/}
		</div>
	);
}
