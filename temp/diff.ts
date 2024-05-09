export type summaryDTODiff = {
	averageRunCadence?: number;
	maxRunCadence?: number;
	groundContactTime?: number;
	groundContactBalanceLeft?: number;
	strideLength?: number;
	verticalOscillation?: number;

	verticalRatio?: number;
	minRespirationRate?: number;
	maxRespirationRate?: number;
	avgRespirationRate?: number;
	moderateIntensityMinutes?: number;
	vigorousIntensityMinutes?: number;
	steps?: number;

	averageBikeCadence?: number;
	maxBikeCadence?: number;
	totalNumberOfStrokes?: number;

	averageSwimCadence?: number;
	maxSwimCadence?: number;
	averageSWOLF?: number;
	averageStrokeDistance?: number;
	recoveryHeartRate?: number;

	poolLength: number;
	numberOfActiveLengths?: number;
	unitOfPoolLength?: {
		unitId: number;
		unitKey: string;
		factor: number;
	};
	averageStrokes?: number;

	averagePower?: number;
	maxPower?: number;
	minPower?: number;
	normalizedPower?: number;
	functionalThresholdPower?: number;
	totalWork?: number;
	trainingStressScore?: number;
	intensityFactor?: number;
	avgVerticalSpeed: number;
	avgElapsedDurationVerticalSpeed?: number;
};
