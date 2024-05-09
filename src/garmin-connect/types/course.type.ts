import { IActivityTypeDTO, IPrivacyRule } from './activity';

export interface ICourse {
	courseId: number;
	userProfileId: number;
	name: string;
	description?: any;
	activityType: IActivityTypeDTO;
	privacyRule: IPrivacyRule;
	distanceInMeters: number;
}
