export interface IGear {
	gearPk: number;
	uuid: string;
	userProfilePk: number;
	gearMakeName: string;
	gearModelName: string;
	gearTypeName: string;
	gearStatusName: string;
	displayName: string;
	customMakeModel: string;
	imageNameLarge?: any;
	imageNameMedium?: any;
	imageNameSmall?: any;
	dateBegin: string;
	dateEnd?: string;
	maximumMeters: number;
	notified: boolean;
	createDate: string;
	updateDate: string;
}
