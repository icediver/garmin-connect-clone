import { initialGarminClient } from '@/services/garmin.service';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
	const data = await request.json();
	const GCClient = await initialGarminClient(data);
	const profile = await GCClient.getUserProfile();

	cookies().set('profile', JSON.stringify(profile));

	return Response.json({ profile });
}
