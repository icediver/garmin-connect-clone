export interface IMetric {
	[key: string]: number | string;
}

export type TypeMetricForChart = IMetric & { timestamp: string };
