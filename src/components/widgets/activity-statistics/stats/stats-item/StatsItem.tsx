export interface IStatsItem {
	title: string;
	stats: {
		[key: string]: string | number;
	}[];
}
export function StatsItem({ title, stats }: IStatsItem) {
	return (
		<div className="mb-8">
			<h3 className="mb-3 border-b border-b-[#ddd] pt-4 text-sm font-thin">
				{title}
			</h3>
			{stats.map((stat) => {
				const key = Object.keys(stat)[0];
				return (
					<div key={key}>
						<div className="text-lg font-normal leading-5">{stat[key]}</div>
						<span className="align-top text-xs text-[#6c6c6c]">{key}</span>
					</div>
				);
			})}
		</div>
	);
}
