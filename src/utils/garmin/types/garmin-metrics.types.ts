export interface IMetricsData {
	activityId: number;
	measurementCount: number;
	metricsCount: number;
	metricDescriptors: IMetricDescriptor[];
	activityDetailMetrics: IActivityDetailMetric[];
	geoPolylineDTO: IGeoPolylineDTO;
	heartRateDTOs?: any;
	pendingData?: any;
	detailsAvailable: boolean;
}

export interface IGeoPolylineDTO {
	startPoint: IPoint;
	endPoint: IPoint;
	minLat: number;
	maxLat: number;
	minLon: number;
	maxLon: number;
	polyline: IPoint[];
}

export interface IPoint {
	lat: number;
	lon: number;
	altitude?: any;
	time: number;
	timerStart: boolean;
	timerStop: boolean;
	distanceFromPreviousPoint?: any;
	distanceInMeters?: any;
	speed: number;
	cumulativeAscent?: any;
	cumulativeDescent?: any;
	extendedCoordinate: boolean;
	valid: boolean;
}

export interface IActivityDetailMetric {
	metrics: (null | number | number)[];
}

export interface IMetricDescriptor {
	metricsIndex: number;
	key: string;
	unit: IUnit;
}

export interface IUnit {
	id: number;
	key: string;
	factor: number;
}
