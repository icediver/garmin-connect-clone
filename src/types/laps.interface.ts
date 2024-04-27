export interface IActivityLaps {
	activityId: number;
	lapDTOs: ILapDTO[];
	eventDTOs: IEventDTO[];
}

export interface IEventDTO {
	startTimeGMT: string;
	startTimeGMTDoubleValue: number;
	sectionTypeDTO: ISectionTypeDTO;
}

export interface ISectionTypeDTO {
	id: number;
	key: string;
	sectionTypeKey: string;
}

export interface ILapDTO {
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
	averageTemperature: number;
	maxTemperature: number;
	minTemperature: number;
	endLatitude: number;
	endLongitude: number;
	maxVerticalSpeed: number;
	lapIndex: number;
	lengthDTOs: any[];
	connectIQMeasurement: any[];
	messageIndex: number;
}
