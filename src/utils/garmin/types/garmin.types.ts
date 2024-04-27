import { IActivity } from 'garmin-connect/dist/garmin/types';

export interface ITokens {
	oauthToken: string;
	oauthTokenSecret: string;
}
export type TGarminDailyReport = {
	steps: number | null;
	heartRate: TGarminHeartRate;
	sleepDuration: {
		hours: number;
		minutes: number;
	} | null;
	sleepData: TGarminSleepData | null;
	activities: TGarminActivity[];
};
export type TGarminDailyReportFs = Omit<TGarminDailyReport, 'heartRate'> & {
	heartRate: TGarminHeartRateFs;
};

export type TGarminHeartRate = {
	calendarDate: string; // YYYY-MM-DD
	startTimestampGMT: string;
	endTimestampGMT: string;
	startTimestampLocal: string;
	endTimestampLocal: string;
	maxHeartRate: number;
	minHeartRate: number;
	restingHeartRate: number;
	lastSevenDaysAvgRestingHeartRate: number;
	lowAbnormalHrThresholdValue: number;
	abnormalHRValuesArray: [number, number][];
	heartRateValues: [number, number][];
	heartRateValueDescriptors: { key: string; index: number }[];
};
export type TGarminHeartRateFs = Omit<
	TGarminHeartRate,
	'abnormalHRValuesArray' | 'heartRateValues' | 'heartRateValueDescriptors'
> & {
	abnormalHRValuesArray: Record<string, number>[];
	heartRateValues: Record<string, number>[];
};

export type TGarminSleepData = {
	dailySleepDTO: TDailySleepDTO;
	sleepMovement: TSleepMovement[];
	remSleepData: true;
	sleepLevels: TSleepLevel[];
	wellnessEpochSPO2DataDTOList: TWellnessEpochSPO2[];
	wellnessEpochRespirationDataDTOList: TWellnessEpochRespiration[];
	sleepHeartRate: TSleepTimeValue[];
	sleepStress: TSleepTimeValue[];
	sleepBodyBattery: TSleepTimeValue[];
	bodyBatteryChange: number;
	restingHeartRate: number;
};
export type TSleepMovement = {
	startGMT: string;
	endGMT: string;
	activityLevel: number;
};
export type TSleepLevel = {
	startGMT: string;
	endGMT: string;
	activityLevel: number;
};
export type TWellnessEpochSPO2 = {
	userProfilePK: number;
	epochTimestamp: string;
	deviceId: number;
	calendarDate: string; // 2024-01-30T00:00:00.0
	epochDuration: number;
	spo2Reading: number;
	readingConfidence: number;
};
export type TWellnessEpochRespiration = {
	startTimeGMT: number; // 1706633700000
	respirationValue: number;
};
export type TSleepTimeValue = {
	value: number;
	startGMT: number; // 1706633640000
};
export type TDailySleepDTO = {
	id: number;
	userProfilePK: number;
	calendarDate: string; // 2024-01-31
	sleepTimeSeconds: number;
	napTimeSeconds: number;
	sleepWindowConfirmed: boolean;
	sleepWindowConfirmationType: string;
	sleepStartTimestampGMT: number;
	sleepEndTimestampGMT: number;
	sleepStartTimestampLocal: number;
	sleepEndTimestampLocal: number;
	autoSleepStartTimestampGMT: number;
	autoSleepEndTimestampGMT: number;
	unmeasurableSleepSeconds: number;
	deepSleepSeconds: number;
	lightSleepSeconds: number;
	remSleepSeconds: number;
	awakeSleepSeconds: number;
	deviceRemCapable: boolean;
	retro: boolean;
	averageSpO2Value: number;
	lowestSpO2Value: number;
	highestSpO2Value: number;
	averageSpO2HRSleep: number;
	averageRespirationValue: number;
	lowestRespirationValue: number;
	highestRespirationValue: number;
	sleepQualityTypePK: number | null;
	sleepResultTypePK: number | null;
};

export type TGarminActivity = {
	activityId: number;
	activityName: string;
	startTimeGMT: string;
	activityType: {
		typeId: number;
		typeKey: 'running';
	};
	distance: number; // meter
	duration: number; // sec
	averageSpeed: number;
	calories: 799;
	bmrCalories: 121;
	averageHR: 166;
	timeZoneId: 134;
	vO2MaxValue: 42;
	locationName: 'Huyện Triệu Phong';
};

export interface IGarminActivity extends IActivity {
	activityId: number;
	activityUUID: ActivityUUID;
	activityName: string;
	userProfileId: number;
	isMultiSportParent: boolean;
	activityTypeDTO: ActivityTypeDTO;
	eventTypeDTO: EventTypeDTO;
	accessControlRuleDTO: AccessControlRuleDTO;
	timeZoneUnitDTO: TimeZoneUnitDTO;
	metadataDTO: MetadataDTO;
	summaryDTO: SummaryDTO;
	locationName: string;
	splitSummaries: [];
}
export interface SplitSummary {
	distance: number;
	duration: number;
	movingDuration: number;
	elevationGain: number;
	elevationLoss: number;
	averageSpeed: number;
	averageMovingSpeed: number;
	maxSpeed: number;
	calories: number;
	bmrCalories?: number;
	averageHR: number;
	maxHR: number;
	averageRunCadence: number;
	maxRunCadence: number;
	averageTemperature: number;
	maxTemperature: number;
	minTemperature: number;
	strideLength: number;
	totalExerciseReps: number;
	avgVerticalSpeed?: number;
	splitType: string;
	noOfSplits: number;
	maxElevationGain: number;
	averageElevationGain: number;
	maxDistance: number;
	elapsedDuration?: number;
}

export interface SummaryDTO {
	startTimeLocal: string;
	startTimeGMT: string;
	startLatitude: number;
	startLongitude: number;
	distance: number;
	duration: number;
	movingDuration: number;
	elapsedDuration: number;
	elevationGain: number;
	elevationLoss: number;
	maxElevation: number;
	minElevation: number;
	averageSpeed: number;
	averageMovingSpeed: number;
	maxSpeed: number;
	calories: number;
	bmrCalories: number;
	averageHR: number;
	maxHR: number;
	averageRunCadence: number;
	maxRunCadence: number;
	averageTemperature: number;
	maxTemperature: number;
	minTemperature: number;
	strideLength: number;
	trainingEffect: number;
	anaerobicTrainingEffect: number;
	aerobicTrainingEffectMessage: string;
	anaerobicTrainingEffectMessage: string;
	endLatitude: number;
	endLongitude: number;
	maxVerticalSpeed: number;
	waterEstimated: number;
	trainingEffectLabel: string;
	activityTrainingLoad: number;
	minActivityLapDuration: number;
	directWorkoutFeel: number;
	directWorkoutRpe: number;
	moderateIntensityMinutes: number;
	vigorousIntensityMinutes: number;
	steps: number;
	recoveryHeartRate: number;
}

export interface MetadataDTO {
	isOriginal: boolean;
	deviceApplicationInstallationId: number;
	agentApplicationInstallationId?: any;
	agentString?: any;
	fileFormat: FileFormat;
	associatedCourseId?: any;
	lastUpdateDate: string;
	uploadedDate: string;
	videoUrl?: any;
	hasPolyline: boolean;
	hasChartData: boolean;
	hasHrTimeInZones: boolean;
	hasPowerTimeInZones: boolean;
	userInfoDto: UserInfoDto;
	childIds: any[];
	childActivityTypes: any[];
	sensors?: any;
	activityImages: any[];
	manufacturer: string;
	diveNumber?: any;
	lapCount: number;
	associatedWorkoutId?: any;
	isAtpActivity?: any;
	deviceMetaDataDTO: DeviceMetaDataDTO;
	hasIntensityIntervals: boolean;
	hasSplits: boolean;
	eBikeMaxAssistModes?: any;
	eBikeBatteryUsage?: any;
	eBikeBatteryRemaining?: any;
	eBikeAssistModeInfoDTOList?: any;
	hasRunPowerWindData?: any;
	calendarEventInfo?: any;
	groupRideUUID?: any;
	curatedCourseId?: any;
	matchedCuratedCourseId?: any;
	trimmed: boolean;
	autoCalcCalories: boolean;
	favorite: boolean;
	manualActivity: boolean;
	runPowerWindDataEnabled?: any;
	personalRecord: boolean;
	elevationCorrected: boolean;
	gcj02: boolean;
}

export interface DeviceMetaDataDTO {
	deviceId: string;
	deviceTypePk: number;
	deviceVersionPk: number;
}

export interface UserInfoDto {
	userProfilePk: number;
	displayname: string;
	fullname: string;
	profileImageUrlLarge: string;
	profileImageUrlMedium: string;
	profileImageUrlSmall: string;
	userPro: boolean;
}

export interface FileFormat {
	formatId: number;
	formatKey: string;
}

export interface TimeZoneUnitDTO {
	unitId: number;
	unitKey: string;
	factor: number;
	timeZone: string;
}

export interface AccessControlRuleDTO {
	typeId: number;
	typeKey: string;
}

export interface EventTypeDTO {
	typeId: number;
	typeKey: string;
	sortOrder: number;
}

export interface ActivityTypeDTO {
	typeId: number;
	typeKey: string;
	parentTypeId: number;
	isHidden: boolean;
	restricted: boolean;
	trimmable: boolean;
}

export interface ActivityUUID {
	uuid: string;
}
