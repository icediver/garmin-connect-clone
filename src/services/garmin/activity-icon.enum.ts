const font = [
	'',
	'abnormal-hr-alert',
	'activities-wheelchair',
	'activities',
	'activity-american-football',
	'activity-archery',
	'activity-atv',
	'activity-auto-racing',
	'activity-backcountry-skiing',
	'activity-backcountry-snowboarding',
	'activity-badminton',
	'activity-baseball',
	'activity-basketball',
	'activity-bmx',
	'activity-boating',
	'activity-bouldering-wheelchair',
	'activity-bouldering',
	'activity-boxing',
	'activity-breathwork',
	'activity-cardio-wheelchair',
	'activity-cardio',
	'activity-climbing',
	'activity-cricket',
	'activity-cross-country-skiing-wheelchair',
	'activity-cross-country-skiing',
	'activity-cycling',
	'activity-cyclocross',
	'activity-dance',
	'activity-disc-golf',
	'activity-diving-apnea-hunt',
	'activity-diving-apnea',
	'activity-diving-ccr',
	'activity-diving-gauge',
	'activity-diving-multi-gas',
	'activity-diving-single-gas',
	'activity-diving',
	'activity-downhill-biking',
	'activity-driving',
	'activity-e-biking',
	'activity-e-mountain-biking',
	'activity-elliptical',
	'activity-emergency-border',
	'activity-emergency',
	'activity-esports',
	'activity-field-hockey',
	'activity-fishing',
	'activity-fitness-equipment',
	'activity-floor-climbing',
	'activity-flying',
	'activity-golf-wheelchair',
	'activity-golf',
	'activity-gravel-cycling',
	'activity-hand-cycling',
	'activity-hiit-wheelchair',
	'activity-hiit',
	'activity-hiking',
	'activity-horseback',
	'activity-hunt',
	'activity-ice-hockey',
	'activity-indoor-climbing-wheelchair',
	'activity-indoor-climbing',
	'activity-indoor-cycling',
	'activity-indoor-hand-cycling',
	'activity-indoor-rowing',
	'activity-indoor-running',
	'activity-indoor-wheelchair-push-run',
	'activity-indoor-wheelchair-push-walk',
	'activity-jump-rope',
	'activity-kayaking',
	'activity-kiteboarding',
	'activity-lacrosse',
	'activity-marine',
	'activity-meditation',
	'activity-mixed-martial-arts',
	'activity-motocross',
	'activity-motorcycling',
	'activity-multisport-people',
	'activity-multisport',
	'activity-obstacle-run',
	'activity-offshore-grinding',
	'activity-onshore-grinding-wheelchair',
	'activity-onshore-grinding',
	'activity-open-water-swimming',
	'activity-other',
	'activity-overland',
	'activity-padel',
	'activity-para-sports',
	'activity-pickleball',
	'activity-pilates-wheelchair',
	'activity-pilates',
	'activity-platform-tennis',
	'activity-racket-sports',
	'activity-racquetball',
	'activity-resort-skiing-wheelchair',
	'activity-resort-skiing',
	'activity-resort-snowboarding',
	'activity-rowing',
	'activity-rugby',
	'activity-running',
	'activity-safety',
	'activity-sailing',
	'activity-skate-skiing',
	'activity-skating',
	'activity-snorkeling',
	'activity-snow-shoeing',
	'activity-snowmobiling',
	'activity-soccer',
	'activity-softball',
	'activity-squash',
	'activity-stair-stepper',
	'activity-stand-up-paddleboarding-wheelchair',
	'activity-stand-up-paddleboarding',
	'activity-strength-training-wheelchair',
	'activity-strength-training',
	'activity-surfing',
	'activity-swimming',
	'activity-table-tennis',
	'activity-track-cycling',
	'activity-track-running',
	'activity-trail-running',
	'activity-transition',
	'activity-treadmill-running',
	'activity-ultimate-disc',
	'activity-ultra-run',
	'activity-uncategorized',
	'activity-upload',
	'activity-virtual-running',
	'activity-volleyball',
	'activity-wakeboarding',
	'activity-wakesurfing',
	'activity-walking',
	'activity-water-sports',
	'activity-water-tubing',
	'activity-waterskiing',
	'activity-wheelchair-push-run',
	'activity-whitewater-rafting',
	'activity-windsurfing',
	'activity-winter-sports',
	'activity-yoga-wheelchair',
	'activity-yoga',
	'acute-load',
	'add-climb-marker',
	'add-photo',
	'add-secondary-stats',
	'add',
	'add2',
	'aero-aero',
	'aero-lowered',
	'aero-upright',
	'afternoon',
	'alarm-clock',
	'altitude-acclimation',
	'ant-inverse',
	'ant',
	'arrow-direction-down',
	'arrow-direction-right',
	'arrow-direction-up',
	'arrow-down',
	'arrow-left',
	'arrow-right',
	'arrow-up',
	'article',
	'audio-mic',
	'audio-pause',
	'audio-play',
	'audio-stop',
	'audio-waveform',
	'badges-new',
	'badges',
	'battery-low',
	'battery-status-00',
	'battery-status-100',
	'battery-status-25',
	'battery-status-50',
	'battery-status-75',
	'battery-status',
	'bike',
	'block',
	'blood-pressure',
	'bluetooth',
	'body-battery',
	'body-battery2',
	'body-fat-percentage',
	'body-mass-index',
	'bone-mass',
	'bookmark-trail',
	'bookmarked-trail-filled',
	'calendar',
	'calories_flat',
	'calories',
	'caution',
	'challenges',
	'checkmark-small',
	'checkmark',
	'climb-marker-hover',
	'climbs-next',
	'climbs-previous',
	'clock',
	'close-circle',
	'close',
	'coffee',
	'compose-message',
	'computer-desktop',
	'computer-laptop',
	'connect-iq',
	'control-icon-4g-lte-control',
	'control-icon-airplane',
	'control-icon-alarm-clock',
	'control-icon-alipay',
	'control-icon-altimeter',
	'control-icon-battery-saver',
	'control-icon-brightness',
	'control-icon-broadcast-hr',
	'control-icon-contacts',
	'control-icon-dial-pad',
	'control-icon-direct-to',
	'control-icon-do-not-disturb',
	'control-icon-emergency',
	'control-icon-find-my-phone',
	'control-icon-flashlight',
	'control-icon-hands-free-call',
	'control-icon-ipass',
	'control-icon-lock',
	'control-icon-metar',
	'control-icon-music-control',
	'control-icon-phone-control',
	'control-icon-power',
	'control-icon-save-my-location',
	'control-icon-set-time-with-gps',
	'control-icon-stop-watch',
	'control-icon-sync',
	'control-icon-timer',
	'control-icon-virb-remote',
	'control-icon-voice-assistant',
	'control-icon-volume',
	'control-icon-wallet',
	'control-icon-waypoint',
	'control-icon-wechatpay',
	'course-compact',
	'course-stats',
	'courses',
	'courses2',
	'crash',
	'curved-arrow-center',
	'curved-arrow-left',
	'curved-arrow-right',
	'cycle-tracking',
	'cycling-gravel',
	'cycling-MTB',
	'dashboards',
	'devices',
	'dialogue',
	'dismiss',
	'download',
	'drag-handle',
	'drag',
	'drawing-method',
	'driving-directions',
	'early-morning',
	'ecg-list',
	'ellipsis-vertical',
	'ellipsis',
	'endurance-score',
	'evening',
	'event-logo-default',
	'external-link',
	'eye',
	'face-happy-gds',
	'face-indifferent-reversed',
	'face-indifferent',
	'face-normal-gds',
	'face-sad-gds',
	'face-sad-reversed',
	'face-sad',
	'face-super-reversed',
	'face-super',
	'face-upset-reversed',
	'face-upset',
	'face-very-happy-gds',
	'face-very-sad-gds',
	'facebook-1',
	'facebook2',
	'filter',
	'fitness-age',
	'floors-climbed',
	'full-screen-2',
	'full-screen',
	'garmin-coach',
	'gear',
	'goal',
	'goals',
	'golf-ball',
	'golf-club',
	'golf-leaderboards',
	'golf-scorecard',
	'google-1',
	'group-admin',
	'handheld',
	'health-snapshot-list',
	'heart-inverted',
	'heart',
	'heat-acclimation',
	'help-inverted',
	'help',
	'hill-score',
	'home',
	'hrv-status-low',
	'hrv-status-poor',
	'hrv-status',
	'hydration-filled',
	'hydration',
	'icon_empty_compass',
	'icon_empty_courses',
	'icon_empty_star',
	'icon_solar_charge',
	'icon-star-hollow',
	'icon-stress',
	'inbox',
	'info-2',
	'info-inversed',
	'info',
	'insights',
	'intensity-minutes',
	'jetlag-activity',
	'jetlag-arrive',
	'jetlag-depart',
	'jetlag-genesis-inner',
	'jetlag-genesis',
	'jetlag-light',
	'jetlag-sleep',
	'jump',
	'kilograms',
	'layers',
	'leaderboard-laurel',
	'leaderboards',
	'link-compact',
	'link',
	'load-focus',
	'location-arrow',
	'location',
	'locked',
	'manual',
	'map-folded',
	'marker-border',
	'marker-fill',
	'marker-shadow',
	'megaphone',
	'menu',
	'MFP',
	'minus',
	'morning',
	'move',
	'muscle-mass',
	'newsfeed',
	'note',
	'official',
	'options',
	'pace-pro',
	'password-hide',
	'password-show',
	'pause',
	'pencil-with-note',
	'pencil',
	'people-1',
	'people-2',
	'people-3',
	'people-4',
	'people-5',
	'people-what',
	'personal-records',
	'photos',
	'pin',
	'placeholder-icon',
	'plus',
	'pointer-down',
	'pointer-left',
	'pointer-right',
	'pointer-up',
	'pounds',
	'power-guidance',
	'power-sensor',
	'pregnancy',
	'privacy-connections-and-groups',
	'privacy-connections',
	'pulse-ox',
	'race',
	'recurring-compact',
	'recurring',
	'redo',
	'remove',
	'reports-bar',
	'reports-line',
	'reports-pie',
	'reports-scatter',
	'reports',
	'respiration',
	'runner-tie',
	'saved',
	'search',
	'segments',
	'send-to-device',
	'shape-circle',
	'shape-diamond',
	'shape-open-diamond',
	'shape-open-triangle',
	'shape-square',
	'shape-triangle',
	'share',
	'sleep-coach',
	'sleep-legacy',
	'sleep-score',
	'sleep',
	'smartphone',
	'solar-intensity',
	'speech-bubble',
	'speech-bubble2',
	'star_filled',
	'star_outlined',
	'star',
	'start-course-here',
	'steps-1',
	'steps-2',
	'steps',
	'steps3',
	'stones',
	'stop',
	'strava-logo',
	'stress',
	'sync',
	'task',
	'thumb_up-filled',
	'thumb_up',
	'trails-city',
	'trails-park',
	'trails-poi',
	'trails-trail',
	'training-plans',
	'training-readiness',
	'training-status',
	'trash',
	'trend-arrow-down',
	'trend-arrow-flat',
	'trend-arrow-up',
	'trend-up',
	'twitter2',
	'undo',
	'unlocked',
	'upcoming-events',
	'video',
	'view-map-location',
	'vivofit-jr-app',
	'warning',
	'water-bottle',
	'water-percentage',
	'weight',
	'wi-fi',
	'workouts',
	'wrench',
];
