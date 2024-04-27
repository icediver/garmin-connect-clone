export interface IMetricDescriptor {
	metricsIndex: number;
	key: string;
	unit: Unit;
}
export interface Unit {
	id: number;
	key: string;
	factor: number;
}
const metricsDescriptor: IMetricDescriptor[] = [
	{
		metricsIndex: 0,
		key: 'directTimestamp',
		unit: {
			id: 120,
			key: 'gmt',
			factor: 0,
		},
	},
	{
		metricsIndex: 1,
		key: 'directCorrectedElevation',
		unit: {
			id: 1,
			key: 'meter',
			factor: 100,
		},
	},
	{
		metricsIndex: 2,
		key: 'directDoubleCadence',
		unit: {
			id: 92,
			key: 'stepsPerMinute',
			factor: 1,
		},
	},
	{
		metricsIndex: 3,
		key: 'directSpeed',
		unit: {
			id: 20,
			key: 'mps',
			factor: 0.1,
		},
	},
	{
		metricsIndex: 4,
		key: 'directLatitude',
		unit: {
			id: 60,
			key: 'dd',
			factor: 1,
		},
	},
	{
		metricsIndex: 5,
		key: 'sumElapsedDuration',
		unit: {
			id: 40,
			key: 'second',
			factor: 1000,
		},
	},
	{
		metricsIndex: 6,
		key: 'directAirTemperature',
		unit: {
			id: 227,
			key: 'celcius',
			factor: 1,
		},
	},
	{
		metricsIndex: 7,
		key: 'sumMovingDuration',
		unit: {
			id: 40,
			key: 'second',
			factor: 1000,
		},
	},
	{
		metricsIndex: 8,
		key: 'directFractionalCadence',
		unit: {
			id: 92,
			key: 'stepsPerMinute',
			factor: 1,
		},
	},
	{
		metricsIndex: 9,
		key: 'sumDuration',
		unit: {
			id: 40,
			key: 'second',
			factor: 1000,
		},
	},
	{
		metricsIndex: 10,
		key: 'directUncorrectedElevation',
		unit: {
			id: 1,
			key: 'meter',
			factor: 100,
		},
	},
	{
		metricsIndex: 11,
		key: 'sumDistance',
		unit: {
			id: 1,
			key: 'meter',
			factor: 100,
		},
	},
	{
		metricsIndex: 12,
		key: 'directVerticalOscillation',
		unit: {
			id: 5,
			key: 'centimeter',
			factor: 1,
		},
	},
	{
		metricsIndex: 13,
		key: 'directRunCadence',
		unit: {
			id: 92,
			key: 'stepsPerMinute',
			factor: 1,
		},
	},
	{
		metricsIndex: 14,
		key: 'directElevation',
		unit: {
			id: 1,
			key: 'meter',
			factor: 100,
		},
	},
	{
		metricsIndex: 15,
		key: 'directStrideLength',
		unit: {
			id: 5,
			key: 'centimeter',
			factor: 1,
		},
	},
	{
		metricsIndex: 16,
		key: 'directLongitude',
		unit: {
			id: 60,
			key: 'dd',
			factor: 1,
		},
	},
	{
		metricsIndex: 17,
		key: 'directHeartRate',
		unit: {
			id: 100,
			key: 'bpm',
			factor: 1,
		},
	},
	{
		metricsIndex: 18,
		key: 'directVerticalRatio',
		unit: {
			id: 6,
			key: 'dimensionless',
			factor: 1,
		},
	},
	{
		metricsIndex: 19,
		key: 'directVerticalSpeed',
		unit: {
			id: 20,
			key: 'mps',
			factor: 0.1,
		},
	},
	{
		metricsIndex: 20,
		key: 'directGroundContactTime',
		unit: {
			id: 41,
			key: 'ms',
			factor: 1,
		},
	},
	{
		metricsIndex: 21,
		key: 'directGroundContactBalanceLeft',
		unit: {
			id: 6,
			key: 'dimensionless',
			factor: 1,
		},
	},
	{
		metricsIndex: 22,
		key: 'directRespirationRate',
		unit: {
			id: 513,
			key: 'breathsPerMinute',
			factor: 1,
		},
	},
	{
		metricsIndex: 23,
		key: 'directPerformanceCondition',
		unit: {
			id: 6,
			key: 'dimensionless',
			factor: 1,
		},
	},
];
