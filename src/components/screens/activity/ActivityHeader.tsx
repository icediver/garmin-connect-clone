import { EnumActivityType } from '@/constants/activity-types.constants';
import { IGear } from '@/garmin-connect/types/gear.type';

interface IActivityHeader {
	activityName: string;
	type: string;
	userName: string;
	eventType: string;
	event: string;
	date: string;
	course?: string;
	gear: IGear[];
	icon: string;
}

export function ActivityHeader({
	icon,
	activityName,
	type,
	userName,
	date,
	event,
	course,
	gear,
	eventType,
}: IActivityHeader) {
	const activityTime = new Date(date);
	return (
		<div className="px-6">
			<div className="mb-2 flex gap-2 text-sm font-thin uppercase">
				<span>{EnumActivityType[type as keyof typeof EnumActivityType]}</span>
				<span>BY</span>
				<span className="text-blue-800">{userName}</span>
				<span>ON</span>
				<span className="font-thin">
					{activityTime.toLocaleDateString('en-Gb', {
						day: 'numeric',
						month: 'long',
						year: 'numeric',
					})}
				</span>
				<span>@</span>
				<span>
					{activityTime.toLocaleTimeString('en-Gb', {
						hour: 'numeric',
						minute: 'numeric',
					})}
				</span>
			</div>
			<div className="flex">
				<div className="h-20 w-20">
					<i className={`activity-type-icon ${icon}`} />
				</div>
				<div className="-mt-2">
					<span className="text-3xl font-thin">{activityName}</span>
					<div className="mt-2 flex gap-3 text-xs font-thin">
						<div>
							<span>Event:</span>
							<span>{event}</span>
						</div>
						<div className="flex gap-1">
							<span>Event Type:</span>
							<span>{eventType}</span>
						</div>
						<div className="space-x-1">
							<span>Course:</span>
							<span>{course}</span>
						</div>
						<div className="space-x-1">
							<span>Gear:</span>
							{gear.length > 0 ? (
								<span className="inline-block h-4 w-4 rounded-full bg-blue-600  py-0.5 text-center text-[10px] font-semibold leading-[10px] text-white">
									{gear.length}
								</span>
							) : (
								<span className="text-blue-800">Add</span>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
