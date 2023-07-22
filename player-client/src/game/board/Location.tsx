import "./Location.css";

import { LocationProps } from "./BoardTypes";

import { default as Tile } from './Tile';
import { TILE_WIDTH } from "../../utils/Constants";

export default function Location(props: LocationProps) {
	// Number of tiles we want to shift by (1 per 2 tiles)
	const numTiles = Math.floor((props.tiles.length + 1) / 2)

	const tileOffsetCalcStr = `(${TILE_WIDTH} * ${numTiles} / 2)`

	return (
		<div className='game-board-location' style={{
			left: `${props.pos[0] * 100}%`,
			top: `${props.pos[1] * 100}%`,
			transform: `translate(-50%,
				calc(-50% - ${tileOffsetCalcStr})
				)`
		}}>
			<div className="location-tile-container" style={{
				width: `calc(${TILE_WIDTH}*2)`,
			}}>
				<>
					{props.tiles.map((tile) => { return <Tile {...tile} /> })}
				</>
			</div>
			<div className="location-title-container" style={{
				backgroundColor: props.colour,
			}}>{props.name}</div>
		</div >

	)
}
