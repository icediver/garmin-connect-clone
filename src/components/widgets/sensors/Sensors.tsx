import { ISummaryActivity } from '@/utils/garmin/types/summary.interface';
import Image from 'next/image';

export function Sensors({ sensors }: ISummaryActivity) {
	return (
		<div className="my-5 flex w-full flex-col items-center">
			{sensors.map((sensor) => {
				return (
					<div
						key={sensor.deviceName}
						className="flex flex-col items-center text-sm"
					>
						<Image
							src={sensor.imageUrl}
							alt={sensor.deviceName}
							width={250}
							height={250}
						/>
						<div>{sensor.deviceName}</div>
						<div>
							<span>Software: </span>
							{sensor.softwareVersion}
						</div>
						<div className="flex gap-1">
							<span>Battery Status: </span>
							{sensor.batteryStatus}
							<Image
								src={
									'https://connect.garmin.com/web-images/devices/battery/icon_battery_new_black.svg'
								}
								alt={sensor.deviceName}
								width={25}
								height={25}
							/>
						</div>
					</div>
				);
			})}
		</div>
	);
}
