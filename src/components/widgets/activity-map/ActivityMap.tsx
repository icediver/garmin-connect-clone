import { IMetricsData } from '@/services/garmin/activity-details.types';
import 'leaflet/dist/leaflet.css';
import {
	Marker,
	MapContainer,
	TileLayer,
	LayersControl,
	Polyline,
} from 'react-leaflet';
import {
	LatLngBoundsExpression,
	LatLngTuple,
	PathOptions,
	Icon,
} from 'leaflet';

const ActivityMap = ({ data }: { data: IMetricsData }) => {
	const geo = data.geoPolylineDTO;
	const style: PathOptions = {
		color: '#11a9ed',
		weight: 5,
	};

	const bounds: LatLngBoundsExpression = [
		[geo.maxLat, geo.maxLon],
		[geo.minLat, geo.minLon],
	];
	const position: LatLngTuple = [
		(geo.maxLat + geo.minLat) / 2,
		(geo.maxLon + geo.minLon) / 2,
	];
	const startIcon = new Icon({
		iconUrl: '/images/map_marker_start.svg',
		shadowUrl:
			'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png',
		iconSize: [25, 41],
		iconAnchor: [12, 41],
		popupAnchor: [1, -34],
		shadowSize: [41, 41],
	});
	const endIcon = new Icon({
		iconUrl: '/images/map_marker_end.svg',
		shadowUrl:
			'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png',
		iconSize: [25, 41],
		iconAnchor: [12, 41],
		popupAnchor: [1, -34],
		shadowSize: [41, 41],
	});

	return (
		<MapContainer
			style={{ height: '100%', width: '100%' }}
			bounds={bounds}
			// center={position}
			scrollWheelZoom={false}
			// zoom={15}
			attributionControl={false}
		>
			<LayersControl position="topright">
				<LayersControl.BaseLayer checked name="OpenStreetMap.Mapnik">
					<TileLayer
						url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
					/>
				</LayersControl.BaseLayer>
				<LayersControl.BaseLayer name="Esri World Imagery">
					<TileLayer
						attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP"
						url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
					/>
				</LayersControl.BaseLayer>

				<Marker position={geo.startPoint} icon={startIcon} />
				<Polyline pathOptions={style} positions={geo.polyline} />
				<Marker position={geo.endPoint} icon={endIcon} />
			</LayersControl>
		</MapContainer>
	);
};

export default ActivityMap;
