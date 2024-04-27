import { SmallCard } from '../small-card/SmallCard';

interface ICaloriesBurned {
	total: number;
	active: number;
	resting: number;
}

export function CaloriesBurned({ total, active, resting }: ICaloriesBurned) {
	const activeWidth = ((active / total) * 100).toFixed(0);
	const restingWidth = ((resting / total) * 100).toFixed(0);
	return (
		<SmallCard
			icon="calories_flat"
			color="rgb(11, 150, 63"
			title="Calories Burned"
		>
			<div className="mx-auto w-[150px]">
				<div className="pb-5  text-lg font-thin">{total.toLocaleString()}</div>
				<div className="mx-auto flex h-[8px] w-[150px] items-center justify-center gap-1">
					<div
						className="h-full rounded-l-lg"
						style={{
							width: `${activeWidth}%`,
							backgroundColor: 'rgb(211, 32, 32)',
						}}
					/>
					<div
						className="h-full rounded-r-lg"
						style={{
							width: `${restingWidth}%`,
							backgroundColor: 'rgb(42, 136, 230)',
						}}
					/>
				</div>
				<div className="my-2 flex w-[150px] justify-between text-sm ">
					<div>{active}</div>
					<div>{resting}</div>
				</div>
				<div className="flex w-[150px] justify-between text-xs font-thin">
					<div>Active</div>
					<div>Resting</div>
				</div>
			</div>
		</SmallCard>
	);
}
