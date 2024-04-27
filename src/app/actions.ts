'use server';
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { IGarminTokens } from 'garmin-connect/dist/garmin/types';

export async function saveTokens(data: any) {
	const cookieStore = cookies();
	const userCookie = cookieStore.set('garmin', 'value');
}
