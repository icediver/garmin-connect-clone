import { IActivityLaps } from '@/types/laps.interface';
import { IMetricsData } from './types/garmin-metrics.types';
import { IDaySummary } from './types/garmin-user-summary.types';
import GarminConnect from '@/garmin-connect/GarminConnect';
import {
	ActivitySubType,
	ActivityType,
	IActivity,
	IActivityDetails,
} from '@/garmin-connect/types/activity';
import { IGarminDevice, IGarminSensor } from './types/devices.interface';
import { ISummaryActivity } from './types/summary.interface';
import { ICourse } from '@/garmin-connect/types/course.type';
import { IGear } from '@/garmin-connect/types/gear.type';

const GARMIN_ACTIVITY_API =
	'https://connectapi.garmin.com/activity-service/activity';
const GCA_SEARCH_ACTIVITIES = `https://connectapi.garmin.com/activitylist-service/activities/search/activities`;
const GCA_USER_SUMMARY =
	'https://connectapi.garmin.com/usersummary-service/usersummary/daily';
const GCA_DEVICE_SERVICE =
	'https://connect.garmin.com/device-service/deviceservice/device-info/all';
const GCA_DEVICES =
	'https://connectapi.garmin.com/device-service/deviceregistration/devices';
const GCA_SENSORS = 'https://connectapi.garmin.com/device-service/sensors';
const GCA_ACTIVITY_CHARTS_ORDER =
	'https://connect.garmin.com/web-data/activity-charts-order/activity-charts-order-master.json';
const GCA_COURSE =
	'https://connectapi.garmin.com/course-service/course/metadata';
const GCA_GEAR_SERVICE =
	'https://connectapi.garmin.com/gear-service/gear/filterGear?activityId=';

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

	async getSummaryActivity(activityId: number): Promise<ISummaryActivity> {
		const activity = await this.getActivity({ activityId });
		const AllDevices = await this.getDevices();
		const Allsensors = await this.getSensors();
		const devices = AllDevices.filter(
			(device) =>
				device.deviceId === +activity.metadataDTO.deviceMetaDataDTO.deviceId
		);
		const activeSensors = activity.metadataDTO.sensors;
		const sensors: IGarminSensor[] =
			activeSensors && activeSensors.length > 0
				? Allsensors.filter((item) =>
						activeSensors.map((s) => s.serialNumber).includes(item.serialNumber)
					)
				: [];
		const courseId = activity.metadataDTO.associatedCourseId;
		const course = courseId ? await this.getCourse(courseId) : null;
		const gears = (await this.getGears(activityId)) || null;
		return { activity, devices, sensors, course, gears };
	}

	async getDevices(): Promise<IGarminDevice[]> {
		const url = GCA_DEVICES;
		const deviceInfo = await this.client.get<IGarminDevice[]>(url);
		return deviceInfo;
	}

	async getSensors(displayName?: string): Promise<IGarminSensor[]> {
		const url = GCA_SENSORS;
		const deviceInfo = await this.client.get<IGarminSensor[]>(url);
		return deviceInfo;
	}

	async getChartsOrder() {
		const url = GCA_ACTIVITY_CHARTS_ORDER;
		const chartsOrder = await this.client.get(url);
		return chartsOrder;
	}

	async getCourse(courseId: string | number): Promise<ICourse> {
		const url = `${GCA_COURSE}/${courseId}`;
		const course = await this.client.get<ICourse>(url);
		return course;
	}

	async getGears(activityId: number): Promise<IGear[]> {
		const url = GCA_GEAR_SERVICE + activityId;
		const gears = await this.client.get<IGear[]>(url);
		return gears;
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
