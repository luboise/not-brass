import "./Location.css";

import { LocationProps } from "./BoardTypes";

import { default as Tile } from './Tile';
import { TILE_WIDTH } from "../../utils/Constants";

const DEFAULT_WRAP_FREQUENCY = 2;

export default function Location(props: LocationProps) {
	// Number of tiles we want to shift by (1 per 2 tiles)
	let numTiles;
	let containerWidthStyling: React.CSSProperties = {};

	// If wrap frequency is 0, do not wrap
	if (props.wrapFrequency === 0) {
		numTiles = Number(Boolean(props.tiles.length));
	} else {
		numTiles = Math.floor((props.tiles.length + 1) / (props.wrapFrequency || DEFAULT_WRAP_FREQUENCY));
		containerWidthStyling.width = `calc(${TILE_WIDTH}*${props.wrapFrequency || DEFAULT_WRAP_FREQUENCY})`;
	}

	// Half the height of the tiles
	const tileOffsetCalcStr = `(${TILE_WIDTH} * ${numTiles} / 2)`

	return (
		<div className='game-board-location' style={{
			left: `${props.pos[0] * 100}%`,
			top: `${props.pos[1] * 100}%`,
			transform: `translate(-50%,
				calc(-50% - ${tileOffsetCalcStr})
				)`
		}}>
			<div className="location-tile-container" style={containerWidthStyling}>
				<>
					{props.tiles.map((tile, i) => { return <Tile {...tile} key={i} /> })}
				</>
			</div>
			<div className="location-title-container" style={{
				backgroundColor: props.colour,
			}}>{props.name}</div>
		</div >

	)
}
