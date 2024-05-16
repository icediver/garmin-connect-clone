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
import { GCUrl } from './gc-url.class';
import { GarminDomain } from '@/garmin-connect/types';

export default class GCClientNew extends GarminConnect {
	private gcUrl: GCUrl;
	constructor(domain: GarminDomain = 'garmin.com') {
		super();
		this.gcUrl = new GCUrl(domain);
	}

	async getActivityData(activityId: string): Promise<IMetricsData> {
		const url = `${this.gcUrl.GC_ACTIVITY}/${activityId}/details`;
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
		const activity = await this.client.get<IActivity[]>(
			this.gcUrl.GC_ACTIVITIES,
			{
				params: {
					start,
					limit,
					search,
					activityType,
					subActivityType,
				},
			}
		);
		return activity;
	}

	async getUserSummaryDay(displayName: string): Promise<IDaySummary> {
		const calendarDate = new Date()
			.toISOString()
			.split('/')
			.join('-')
			.split('T')[0];
		const url = `${this.gcUrl.GC_USER_SUMMARY}/${displayName}`;
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
		const deviceInfo = await this.client.get<IGarminDevice[]>(
			this.gcUrl.GC_DEVICES
		);
		return deviceInfo;
	}

	async getSensors(displayName?: string): Promise<IGarminSensor[]> {
		const deviceInfo = await this.client.get<IGarminSensor[]>(
			this.gcUrl.GC_SENSORS
		);
		return deviceInfo;
	}

	async getChartsOrder() {
		const chartsOrder = await this.client.get(this.gcUrl.GC_CHARTS_ORDER);
		return chartsOrder;
	}

	async getCourse(courseId: string | number): Promise<ICourse> {
		const url = `${this.gcUrl.GC_COURSE}/${courseId}`;
		const course = await this.client.get<ICourse>(url);
		return course;
	}

	async getGears(activityId: number): Promise<IGear[]> {
		const url = this.gcUrl.GC_GEAR_SERVICE + activityId;
		const gears = await this.client.get<IGear[]>(url);
		return gears;
	}

	async getLaps(activityId: string) {
		const url = `${this.gcUrl.GC_ACTIVITY}/${activityId}/splits`;
		const laps: IActivityLaps = await this.client.get(url);
		return laps;
	}
	async getTimeInZones(activityId: string) {
		const url = `${this.gcUrl.GC_ACTIVITY}/${activityId}/timeinzones`;
		const timeInZones: IMetricsData = await this.client.get(url);
		return timeInZones;
	}
}
