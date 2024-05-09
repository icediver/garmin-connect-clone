export interface smallStats [{
  id: 1
	distance: number;
	time: number;
}]
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

        const S = ["cycling", "diving", "fitness_equipment", "hiking", "disc_golf", "motorcycling", "multi_sport", "other", "running", "safety", "swimming", "walking", "breathwork", "yoga", "auto_racing", "winter_sports", "cross_country_skiing_ws", "resort_skiing_snowboarding_ws", "resort_skiing", "resort_snowboarding", "backcountry_skiing_snowboarding_ws", "backcountry_skiing", "backcountry_snowboarding", "skate_skiing_ws", "skating_ws", "snow_shoe_ws", "snowmobiling_ws", "indoor_climbing", "bouldering","para_sports", "wheelchair_push_run", "wheelchair_push_walk", "meditation",];

const activityListColumnConfigDefaults = {
                running: ["distance", "duration", "averageSpeed", "elevationGain", "averageHR"],
                ultra_run: ["distance", "duration", "averageSpeed", "elevationGain", "averageHR"],
                obstacle_run: ["distance", "duration", "averageSpeed", "elevationGain", "averageHR"],
                cycling: ["distance", "duration", "averageSpeed", "elevationGain", "avgPower"],
                swimming: ["distance", "duration", "averageSpeed", "calories", "averageHR"],
                walking: ["distance", "duration", "averageSpeed", "averageHR", "calories"],
                hiking: ["distance", "calories", "duration", "averageHR", "averageSpeed"],
                disc_golf: ["distance", "calories", "duration", "averageHR", "averageSpeed"],
                fitness_equipment: ["totalSets", "duration", "averageHR", "maxHR", "calories"],
                indoor_cardio: ["totalSets", "duration", "averageHR", "maxHR", "calories"],
                boxing:  ["totalSets", "duration", "averageHR", "maxHR", "calories"],
                mixed_martial_arts: ["totalSets", "duration", "averageHR", "maxHR", "calories"],
                other: ["distance", "duration", "averageSpeed", "averageHR", "calories"],
                water_sports: ["distance", "duration", "averageSpeed", "averageHR", "calories"],
                kayaking_v2: ["distance", "duration", "averageSpeed", "averageHR", "calories"],
                paddling_v2: ["distance", "duration", "averageSpeed", "averageHR", "calories"],
                stand_up_paddleboarding_v2: ["distance", "duration", "averageSpeed", "averageHR", "calories"],
                rowing_v2: ["distance", "duration", "averageSpeed", "averageHR", "calories"],
                winter_sports: ["distance", "duration", "averageSpeed", "averageHR", "calories"],
                uncategorized: ["distance", "calories", "duration", "averageHR", "maxHR"],
                multi_sport: ["duration", "distance", "calories", "elevationGain", "averageSpeed"],
                indoor_climbing: ["splitSummaries.noOfSplits.CLIMB_ACTIVE", "splitSummaries.maxGradeValue.CLIMB_ACTIVE", "splitSummaries.duration.CLIMB_ACTIVE", "splitSummaries.totalAscent.CLIMB_ACTIVE", "splitSummaries.numClimbSends.CLIMB_ACTIVE"],
                bouldering: ["splitSummaries.noOfSplits.CLIMB_ACTIVE", "splitSummaries.maxGradeValue.CLIMB_ACTIVE", "splitSummaries.duration.CLIMB_ACTIVE", "calories", "averageHR"],
                apnea_diving: ["maxDepth", "bottomTime", "numberOfApneaDives", "totalSurfaceTime", "summarizedDiveInfo.waterType"],
                apnea_hunting: ["maxDepth", "bottomTime", "numberOfApneaDives", "totalSurfaceTime", "summarizedDiveInfo.waterType"],
                yoga: ["totalSets", "duration", "averageHR", "maxHR", "calories"],
                hiit: ["duration", "averageHR", "maxHR", "totalSets", "calories"],
                motorcycling: ["distance", "duration", "averageSpeed", "averageHR", "calories"],
                diving: ["maxDepth", "bottomTime", "minTemperature", "calories", "surfaceInterval"],
                auto_racing: ["bestLapTime", "maxSpeed", "lapCount", "elevationGain", "elevationLoss"],
                safety: ["duration", "averageHR", "distance", "averageSpeed", "maxSpeed"],
                resort_skiing_snowboarding_ws: ["distance", "duration", "elevationLoss", "maxSpeed", "lapCount"],
                resort_skiing: ["distance", "duration", "elevationLoss", "maxSpeed", "lapCount"],
                resort_snowboarding: ["distance", "duration", "elevationLoss", "maxSpeed", "lapCount"],
                backcountry_skiing_snowboarding_ws: ["distance", "duration", "elevationGain", "elevationLoss", "averageHR"],
                backcountry_skiing: ["distance", "duration", "elevationGain", "elevationLoss", "averageHR"],
                backcountry_snowboarding: ["distance", "duration", "elevationGain", "elevationLoss", "averageHR"],
                cross_country_skiing_ws: ["distance", "duration", "averageSpeed", "avgPower", "averageHR"],
                skate_skiing_ws: ["distance", "duration", "averageSpeed", "avgPower", "averageHR"],
                breathwork: ["duration", "averageHR", "maxHR", "avgRespirationRate", "differenceStress"],
                meditation: ["duration", "averageHR", "maxHR", "avgRespirationRate", "differenceStress"],
                offshore_grinding: ["maxSpeed", "duration", "averageHR", "avgPower", "averageBikingCadenceInRevPerMinute"],
                offshore_grinding_v2: ["maxSpeed", "duration", "averageHR", "avgPower", "averageBikingCadenceInRevPerMinute"],
                onshore_grinding_v2: ["duration", "averageHR", "avgPower", "averageBikingCadenceInRevPerMinute", "calories"],
                onshore_grinding_v2: ["duration", "averageHR", "avgPower", "averageBikingCadenceInRevPerMinute", "calories"],
                surfing: ["splitSummaries.noOfSplits.SURF_ACTIVE", "splitSummaries.maxDistance.SURF_ACTIVE", "splitSummaries.maxSpeed.SURF_ACTIVE", "splitSummaries.duration.SURF_ACTIVE", "duration"],
                surfing_v2: ["splitSummaries.noOfSplits.SURF_ACTIVE", "splitSummaries.maxDistance.SURF_ACTIVE", "splitSummaries.maxSpeed.SURF_ACTIVE", "splitSummaries.duration.SURF_ACTIVE", "duration"],
                water_tubing: ["splitSummaries.noOfSplits.SURF_ACTIVE", "splitSummaries.maxDistance.SURF_ACTIVE", "splitSummaries.maxSpeed.SURF_ACTIVE", "splitSummaries.duration.SURF_ACTIVE", "duration"],
                wakeboarding: ["splitSummaries.noOfSplits.SURF_ACTIVE", "splitSummaries.maxDistance.SURF_ACTIVE", "splitSummaries.maxSpeed.SURF_ACTIVE", "splitSummaries.duration.SURF_ACTIVE", "duration"],
                wakeboarding_v2: ["splitSummaries.noOfSplits.SURF_ACTIVE", "splitSummaries.maxDistance.SURF_ACTIVE", "splitSummaries.maxSpeed.SURF_ACTIVE", "splitSummaries.duration.SURF_ACTIVE", "duration"],
                wakesurfing: ["splitSummaries.noOfSplits.SURF_ACTIVE", "splitSummaries.maxDistance.SURF_ACTIVE", "splitSummaries.maxSpeed.SURF_ACTIVE", "splitSummaries.duration.SURF_ACTIVE", "duration"],
                waterskiing: ["splitSummaries.noOfSplits.SURF_ACTIVE", "splitSummaries.maxDistance.SURF_ACTIVE", "splitSummaries.maxSpeed.SURF_ACTIVE", "splitSummaries.duration.SURF_ACTIVE", "duration"],
                e_sport: ["duration", "avgStress", "averageHR", "maxStress"],
                windsurfing: ["distance", "duration", "averageSpeed", "maxSpeed", "averageHR"],
                windsurfing_v2: ["distance", "duration", "averageSpeed", "maxSpeed", "averageHR"],
                snorkeling: ["duration", "averageHR", "calories", "distance"],
                wheelchair_push_run: ["distance", "duration", "averageSpeed", "elevationGain", "averageHR"],
                wheelchair_push_walk: ["distance", "duration", "averageSpeed", "averageHR", "calories"],
                para_sports: ["distance", "duration", "averageSpeed", "elevationGain", "averageHR"],
                team_sports: ["distance", "duration", "averageSpeed", "averageHR", "calories"],
                racket_sports: ["distance", "duration", "averageSpeed", "averageHR", "calories"],
                jump_rope: ["totalSets", "duration", "averageHR", "maxHR", "calories"]
            },


const I = {
            ACTIVITY_ACTIVE_CALORIES: "ACTIVITY_ACTIVE_CALORIES",
            ACTIVITY_AVERAGE_SPEED: "ACTIVITY_AVERAGE_SPEED",
            ACTIVITY_AVERAGE_PACE: "ACTIVITY_AVERAGE_PACE",
            ACTIVITY_AVERAGE_SWIM_PACE: "ACTIVITY_AVERAGE_SWIM_PACE",
            ACTIVITY_AVERAGE_HEART_RATE: "ACTIVITY_AVERAGE_HEART_RATE",
            ACTIVITY_MAX_HEART_RATE: "ACTIVITY_MAX_HEART_RATE",
            ACTIVITY_NUMBER_OF_ACTIVITIES: "ACTIVITY_NUMBER_OF_ACTIVITIES",
            ACTIVITY_TOTAL_DISTANCE: "ACTIVITY_TOTAL_DISTANCE",
            ACTIVITY_TOTAL_DURATION: "ACTIVITY_TOTAL_DURATION",
            ACTIVITY_VO2_MAX: "ACTIVITY_VO2_MAX",
            FOOD_CALORIES_CONSUMED: "FOOD_CALORIES_CONSUMED",
            FOOD_CALORIES_REMAINING: "FOOD_CALORIES_REMAINING",
            ACTIVITY_MAX_FTP: "ACTIVITY_MAX_FTP",
            ACTIVITY_TRAINING_STATUS: "ACTIVITY_TRAINING_STATUS",
            ACTIVITY_HRV_STRESS_TEST: "ACTIVITY_HRV_STRESS_TEST",
            FITNESS_AGE: "FITNESS_AGE",
            ACTIVITY_RACE_PREDICTOR_TRENDS: "ACTIVITY_RACE_PREDICTOR_TRENDS",
            ENDURANCE_SCORE: "ENDURANCE_SCORE"
        }
