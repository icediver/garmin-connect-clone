export interface INavigationItem {
	name: string;
	path?: string;
	icon: string;
	subMenu?: ISubMenu[];
}
export interface ISubMenu {
	name: string;
	path: string;
}
export const dashboardNavData: INavigationItem[] = [
	{
		name: 'Home',
		path: '/',
		icon: 'icon-home',
	},
	{
		name: 'Chalenges',
		path: '/challenges',
		icon: 'icon-challenges',
	},
	{
		name: 'Calendar',
		path: '/calendar',
		icon: 'icon-calendar',
	},
	{
		name: 'News Feed',
		path: '/newsFeed',
		icon: 'icon-newsfeed',
	},
];

export const mainNavData: INavigationItem[] = [
	{
		name: 'Activities',
		icon: 'icon-activities',
		subMenu: [
			{
				name: 'All Activities',
				path: '/main/activities',
			},
			{
				name: 'Steps',
				path: '/main/steps',
			},
			{
				name: 'Floors',
				path: '/main/floors',
			},
			{
				name: 'Intensity Minutes',
				path: '/main/intensity',
			},
		],
	},
	{
		name: 'Health Stats',
		icon: 'icon-heart',
		subMenu: [
			{
				name: 'Sleep',
				path: '/main/sleep',
			},
			{
				name: 'Weight',
				path: '/main/weight',
			},
			{
				name: 'Blood Pressure',
				path: '/main/pressure',
			},
			{
				name: 'Hypdration',
				path: '/main/hydration',
			},
			{
				name: 'Calories',
				path: '/main/calories',
			},
			{
				name: 'Pulse Ox',
				path: '/main/pulse-ox',
			},
			{
				name: 'Pulse Ox Acclimation',
				path: '/main/pulse-ox-acclimation',
			},
			{
				name: 'Respiration',
				path: '/main/respiration',
			},
			{
				name: 'Heart Rate',
				path: '/main/heart-rate',
			},
			{
				name: 'Fitness Age',
				path: '/main/fitness-age',
			},
			{
				name: 'Stress',
				path: '/main/stress',
			},
			{
				name: 'Body Battery',
				path: '/main/body-battery',
			},
		],
	},
	{
		name: 'Golf',
		icon: 'icon-activity-golf',
		subMenu: [
			{
				name: 'Scorecards',
				path: '/main/scorecards',
			},
			{
				name: 'Performance Stats',
				path: '/main/performance-stats',
			},
			{
				name: 'Course Stats',
				path: '/main/course-stats',
			},
			{
				name: 'Leaderboards',
				path: '/main/leaderboards',
			},
			{
				name: 'Seing Analysis',
				path: '/main/seeing-analysis',
			},
		],
	},
	{
		name: 'Training & Planning',
		path: '/health',
		icon: 'icon-workouts',
	},
	{
		name: 'Gear',
		path: '/health',
		icon: 'icon-steps',
	},
	{
		name: 'Insights',
		path: '/health',
		icon: 'icon-insights',
	},
	{
		name: 'Reports',
		path: '/main/reports',
		icon: 'icon-reports-bar',
	},
];

export const socialNavData: INavigationItem[] = [
	{
		name: 'Connections',
		path: '/health',
		icon: 'icon-people-2',
	},
	{
		name: 'Groups',
		path: '/health',
		icon: 'icon-people-3',
	},
];
export const otherNavData: INavigationItem[] = [
	{
		name: 'Badges',
		path: '/badges',
		icon: 'icon-badges-new',
	},
	{
		name: 'Personal Records',
		path: '/records',
		icon: 'icon-personal-records',
	},
	{
		name: 'Goals',
		path: '/goals',
		icon: 'icon-goals',
	},
];
export const infoNavData: INavigationItem[] = [
	{
		name: 'Activity Tracking Accuracy',
		path: '/badges',
		icon: 'icon-info-2',
	},
];
