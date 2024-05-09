import { kv } from '@vercel/kv';
import GCClientNew from '@/utils/garmin/gcclient.class';
import { cookies } from 'next/headers';
import { IGarminTokens } from '@/garmin-connect/types';

interface ICredentials {
	username?: string;
	password?: string;
}

export const initialGarminClient = async (credentials?: ICredentials) => {
	const GCClient = new GCClientNew();

	// const tokensDbString = (await kv.get('tokens')) as IGarminTokens;
	const tokensDb = cookies().get('auth')?.value;

	const tokensDbString = tokensDb && (JSON.parse(tokensDb) as IGarminTokens);

	if (tokensDbString) {
		GCClient.loadToken(tokensDbString.oauth1, tokensDbString.oauth2);
	} else {
		try {
			// Uses credentials from garmin.config.json or uses supplied params
			await GCClient.login(credentials?.username, credentials?.password);

			const oauth1 = GCClient.client.oauth1Token;
			const oauth2 = GCClient.client.oauth2Token;
			if (oauth1 && oauth2) {
				// save token
				// await kv.set('tokens', { oauth1, oauth2 });
				cookies().set('auth', JSON.stringify({ oauth1, oauth2 }), {
					sameSite: 'strict',
					maxAge: 60 * 60 * 24,
				});
			}
		} catch (err: any) {
			throw err;
		}
	}

	return GCClient;
};

// export const garminUserData = (client: GarminConnect) => ({
// 	user: async () => client.getUserProfile(),
// 	heartRate: async (date: string) => {
// 		try {
// 			return client.getHeartRate(new Date(date));
// 		} catch (err) {
// 			return null;
// 		}
// 	},
// 	steps: async (date: string) => {
// 		try {
// 			return client.getSteps(new Date(date)).catch((e) => {
// 				console.error('Retrieve Garmin step Error:', e.message);
// 				return Promise.resolve(null);
// 			});
// 		} catch (err) {
// 			return 0;
// 		}
// 	},
// 	sleepDuration: async (date: string) => {
// 		try {
// 			return client.getSleepDuration(new Date(date));
// 		} catch (err) {
// 			return null;
// 		}
// 	},
// 	sleepData: async (date: string): Promise<TGarminSleepData | null> => {
// 		try {
// 			const data = await client.getSleepData(new Date(date));
// 			return data as unknown as TGarminSleepData;
// 		} catch (err) {
// 			return null;
// 		}
// 	},
// 	activities: async (date: string): Promise<TGarminActivity[]> => {
// 		try {
// 			const data = await client.getActivities(undefined, 10);
// 			if (data.length === 0) return [];
// 			return data.filter(
// 				(act) =>
// 					dayjs
// 						.utc(act.startTimeGMT)
// 						.tz('Asia/Ho_Chi_Minh')
// 						.format('YYYY-MM-DD') === date
// 			) as unknown as TGarminActivity[];
// 		} catch (err: any) {
// 			console.error('error when retrieve activity from garmin', err.message);
// 			return [];
// 		}
// 	},
// });
//
// export const getGarminDailyData = async (
// 	date?: string
// ): Promise<{
// 	date: string;
// 	user: ISocialProfile;
// 	data: TGarminDailyReport;
// }> => {
// 	const today =
// 		date || dayjs.tz(dayjs(), 'Asia/Ho_Chi_Minh').format('YYYY-MM-DD');
// 	const client = await initialGarminClient();
// 	const req = garminUserData(client);
//
// 	const user = await req.user();
// 	const steps = await req.steps(today);
// 	const heartRate = await req.heartRate(today);
// 	const sleepDuration = await req.sleepDuration(today);
// 	const sleepData = await req.sleepData(today);
// 	const activities = await req.activities(today);
//
// 	return {
// 		date: today,
// 		user,
// 		data: {
// 			steps,
// 			heartRate,
// 			sleepDuration,
// 			sleepData,
// 			activities,
// 		},
// 	};
// };
