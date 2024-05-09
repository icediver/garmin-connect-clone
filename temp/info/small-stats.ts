export interface ciclingStats {
	distance: number;
	time: number;
}
export interface runningStats extends ciclingStats {
	'avg pace': number;
	'total ascent': number;
	calories: number;
}

export interface swimmingStats extends ciclingStats {
	'avg pace': number;
	calories: number;
}
export interface cyclingStats extends ciclingStats {
	'avg speed': number;
	'total ascent': number;
}

export interface winterStats extends cyclingStats {
	'avg speed': number;
	'avg HR': number;
}
