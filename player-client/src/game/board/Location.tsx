import "./Location.css";

import { LocationProps } from "./BoardTypes";

import { default as Tile } from './Tile';
import { TILE_WIDTH } from "../../utils/Constants";

const DEFAULT_WRAP_FREQUENCY = 2;

export default function Location(props: LocationProps) {
	// Number of tiles we want to shift by (1 per 2 tiles)
	let tileStackHeight;
	const containerWidthStyling: React.CSSProperties = {};

	// If wrap frequency is 0, do not wrap (stack is 1 tall)
	if (props.wrapFrequency === 0) {
		tileStackHeight = props.tiles.length ? 1 : 0;
	} else {
		// Find height in tiles to shift later
		tileStackHeight = Math.floor((props.tiles.length + 1) / (props.wrapFrequency || DEFAULT_WRAP_FREQUENCY));

		// Set stack width to force overflow
		containerWidthStyling.width = `calc(${TILE_WIDTH}*${props.wrapFrequency || DEFAULT_WRAP_FREQUENCY})`;
	}

	// Half the height of the tiles
	const tileOffsetCalcStr = `(${TILE_WIDTH} * ${tileStackHeight} / 2)`

	const locationStyle: React.CSSProperties = {
		left: `${props.pos[0] * 100}%`,
		top: `${props.pos[1] * 100}%`,
		transform: `translate(-50%,
				calc(-50% - ${tileOffsetCalcStr})
				)`
	};

	return (
		<div className='game-board-location' style={locationStyle}>
			<div className="location-tile-container" style={containerWidthStyling}>
				<>
					{props.tiles.map((tile, i) => { return <Tile tileInstance={tile} key={i} /> })}
				</>
			</div>
			<div className="location-title-container" style={{
				backgroundColor: props.colour,
			}}>{props.name}</div>
		</div >

	)
}
