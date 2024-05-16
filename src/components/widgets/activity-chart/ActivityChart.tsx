'use client';
import { IMetricsData } from '@/utils/garmin/types/garmin-metrics.types';
import {
	EnumMetricType,
	TypeMetricKey,
	getDataChartActivity,
} from '@/utils/time.utils';

import {
	Area,
	AreaChart,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';
import { TypeMetricForChart } from './metric.interface';

interface IActivity {
	activityData: IMetricsData;
	metricDescriptorKey: TypeMetricKey;
	color: string;
}
export default function ActivityChart({
	activityData,
	metricDescriptorKey,
	color,
}: IActivity) {
	const newArr: TypeMetricForChart[] = getDataChartActivity(
		activityData,
		metricDescriptorKey
	);
	// console.log(newArr[newArr.length - 1].timestamp);
	const max = Math.max(...newArr.map((item) => +item[metricDescriptorKey]));
	const min = Math.min(...newArr.map((item) => +item[metricDescriptorKey]));

	if (metricDescriptorKey === 'directHeartRate') {
		newArr.map((item) => item[metricDescriptorKey]);
	}

	return (
		<div className="my-8 h-[130px] w-full">
			<h1 className="font-thin capitalize">
				<div
					className="mx-3 inline-block h-3 w-3 rounded-full"
					style={{ backgroundColor: color }}
				/>
				<span>{EnumMetricType[metricDescriptorKey]}</span>
			</h1>
			<ResponsiveContainer width="100%" height="80%" className={'text-[9px]'}>
				<AreaChart
					data={newArr}
					// startAngle={30}
					margin={{ left: -40, right: 0 }}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis
						// interval={'preserveStartEnd'}
						dataKey="timestamp"
						interval={Math.floor((newArr.length - 1) / 10)}
						domain={[0, newArr[newArr.length - 1].timestamp]}
						tickMargin={10}
						range={[0, newArr.length - 1]}
						// type="category"
						// textAnchor="end"
						// angle={-30}
					/>
					<YAxis
						domain={[min, max]}

						// domain={[]} interval={'preserveEnd'}
					/>
					<Tooltip />
					<Area
						type="monotone"
						dataKey={metricDescriptorKey}
						stroke={color}
						fill={color}
						name={EnumMetricType[metricDescriptorKey].replace(/\b\w/g, (l) =>
							l.toUpperCase()
						)}
					/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
}
