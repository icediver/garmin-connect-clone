import { GarminConnect } from 'garmin-connect';
import { IActivityLaps } from '@/types/laps.interface';
import { IActivity } from 'garmin-connect/dist/garmin/types';
import {
	ActivitySubType,
	ActivityType,
} from 'garmin-connect/dist/garmin/types/activity';
import { IMetricsData } from './types/garmin-metrics.types';
import { IDaySummary } from './types/garmin-user-summary.types';

const GARMIN_ACTIVITY_API =
	'https://connectapi.garmin.com/activity-service/activity';
const GCA_SEARCH_ACTIVITIES = `https://connectapi.garmin.com/activitylist-service/activities/search/activities`;
const GCA_USER_SUMMARY =
	'https://connectapi.garmin.com/usersummary-service/usersummary/daily';
const GCA_DEVICE_SERVICE =
	'https://connectapi.garmin.com/device-service/deviceservice/device-info/all';

export default class GCClientNew extends GarminConnect {
	async getActivityData(activityId: string): Promise<IMetricsData> {
		const url = `${GARMIN_ACTIVITY_API}/${activityId}/details`;
		const fileBufer = await this.client.get<IMetricsData>(url, {
			params: {
				maxChartSize: 2000,
				maxPolylineSize: 4000,
				maxHeatMapSize: 2000,
			},
		});
		// writeToFile(
		// 	'/Users/icediver/Documents/webstorm/garmin-connect-app/frontend/src/services/garmin/14974143403metrics.txt',
		// 	JSON.stringify(arr)
		// );
		return fileBufer;
	}

	async getActivitiesData({
		start,
		limit,
		search,
		activityType,
		subActivityType,
	}: {
		start?: number;
		limit?: number;
		search?: string;
		activityType?: ActivityType;
		subActivityType?: ActivitySubType;
	}): Promise<IActivity[]> {
		const url = GCA_SEARCH_ACTIVITIES;
		const fileBufer = await this.client.get<IActivity[]>(url, {
			params: {
				start,
				limit,
				search,
				activityType,
				subActivityType,
			},
		});
		return fileBufer;
	}

	async getUserSummaryDay(displayName: string): Promise<IDaySummary> {
		const calendarDate = new Date()
			.toISOString()
			.split('/')
			.join('-')
			.split('T')[0];
		const url = `${GCA_USER_SUMMARY}/${displayName}`;
		const daySummary = await this.client.get<IDaySummary>(url, {
			params: {
				calendarDate,
			},
		});
		return daySummary;
	}

	async getLaps(activityId: string) {
		const url = `${GARMIN_ACTIVITY_API}/${activityId}/splits?_=1713770876922`;
		// const url
		// 	'https://connectapi.garmin.com/activity-service/activity/14974143403/splits?_=1713770876922';
		const laps: IActivityLaps = await this.client.get(url);
		return laps;
	}
	async getTimeInZones(activityId: string) {
		const url = `${GARMIN_ACTIVITY_API}/${activityId}/timeinzones`;
		const fileBufer: IMetricsData = await this.client.get(url);
		return fileBufer;
	}
}
