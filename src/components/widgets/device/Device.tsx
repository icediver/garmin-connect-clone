import { ISummaryDTO } from '@/garmin-connect/types/activity';
import { IGarminDevice } from '@/utils/garmin/types/devices.interface';
import { ISummaryActivity } from '@/utils/garmin/types/summary.interface';
import Image from 'next/image';

interface IDevice {
	device: IGarminDevice;
}

export function Device({ devices, activity }: ISummaryActivity) {
	return (
		<div className="flex w-full flex-col items-center">
			<Image
				src={devices[0].imageUrl}
				alt={devices[0].displayName}
				width={250}
				height={250}
			/>
			<div className="text-sm font-semibold">
				<span>Device: </span>
				{devices[0].displayName}
			</div>
			<div className="text-sm font-thin">
				<span>Software: </span>
				{devices[0].currentFirmwareVersion}
			</div>{' '}
			<div className="text-sm font-thin">
				<span>Elev Corrections</span>
				<span className="icon-help mx-1 text-blue-700" />
				{': '}
				{activity.metadataDTO.elevationCorrected ? 'enabled' : 'disabled'}
			</div>
			<div className="text-sm font-thin">
				<span>Summary Data: </span>
				Edited
			</div>
		</div>
	);
}
