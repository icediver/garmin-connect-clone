import { GarminDomain } from '@/garmin-connect/types';

export class GCUrl {
	private domain: GarminDomain;
	GC_URL: string;
	GC_API_URL: string;

	constructor(domain: GarminDomain = 'garmin.com') {
		this.domain = domain;
		this.GC_URL = `https://connect.${this.domain}`;
		this.GC_API_URL = `https://connectapi.${this.domain}`;
	}
	get GC_ACTIVITY() {
		return new URL(`${this.GC_API_URL}/activity-service/activity`);
	}

	get GC_ACTIVITIES() {
		return new URL(
			`${this.GC_API_URL}/activitylist-service/activities/search/activities`
		);
	}

	get GC_USER_SUMMARY() {
		return `${this.GC_API_URL}/usersummary-service/usersummary/daily`;
	}

	get GC_DEVICES() {
		return `${this.GC_API_URL}/device-service/deviceregistration/devices`;
	}

	get GC_SENSORS() {
		return `${this.GC_API_URL}/device-service/sensors`;
	}

	get GC_CHARTS_ORDER() {
		return `${this.GC_URL}/web-data/activity-charts-order/activity-charts-order-master.json`;
	}

	get GC_COURSE() {
		return `${this.GC_API_URL}/course-service/course/metadata`;
	}

	get GC_GEAR_SERVICE() {
		return `${this.GC_API_URL}/gear-service/gear/filterGear?activityId=`;
	}

	get GC_ACTIVITY_TYPES() {
		return `${this.GC_API_URL}/activity-service/activity/activityTypes`;
	}
}
