import { IActivityDetails } from '@/garmin-connect/types/activity';
import { IGarminDevice, IGarminSensor } from './devices.interface';
import { ICourse } from '@/garmin-connect/types/course.type';
import { IGear } from '@/garmin-connect/types/gear.type';

export interface ISummaryActivity {
	activity: IActivityDetails;
	devices: IGarminDevice[];
	sensors: IGarminSensor[];
	course: ICourse | null;
	gears: IGear[];
}
