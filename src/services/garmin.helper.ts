import { OAUTH_TOKEN, OAUTH_TOKEN_SECRET } from '@/constants/garmin.constants';
import { IGarminTokens, IOauth2Token } from 'garmin-connect/dist/garmin/types';
import Cookies from 'js-cookie';

export const getAccessToken = () => {
	const oauth1 = Cookies.get(OAUTH_TOKEN);
	const oauth2 = Cookies.get(OAUTH_TOKEN_SECRET);

	return { oauth1, oauth2 } || null;
};

export const saveTokensToStorage = (data: IGarminTokens) => {
	console.log('saveTokensToStorage');

	Cookies.set('tokens', JSON.stringify(data));
	// Cookies.set(OAUTH_TOKEN_SECRET, JSON.stringify(data.oauth2));
};

export const removeFromStorage = () => {
	Cookies.remove(OAUTH_TOKEN);
	Cookies.remove(OAUTH_TOKEN_SECRET);
	localStorage.removeItem('user');
};
