import { IActivityDetails } from '@/garmin-connect/types/activity';

export function Stats({ props }: { props: IActivityDetails }) {
	return (
		<div className="grid grid-cols-4">
			<div>
				<div>
					<div>Distance</div>
					<div>
						{(props.summaryDTO.distance / 1000).toFixed(2)} {' km'}
					</div>
					<span>Distance</span>
				</div>
			</div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
}
