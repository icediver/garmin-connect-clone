import { IActivityDetails } from '@/garmin-connect/types/activity';
import { StatsItem } from './stats-item/StatsItem';
import { getStats } from './getStats.utils';

export function Stats({ props }: { props: IActivityDetails }) {
	const stats = getStats(props);
	return (
		<div className="grid grid-cols-4">
			<div>
				{stats.map((stat) => {
					return <StatsItem key={stat.title} {...stat} />;
				})}
			</div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
}
