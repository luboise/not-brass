import "./Location.css";

import { LocationProps } from "./BoardTypes";

import { default as Tile } from './Tile';
import { TILE_WIDTH } from "../../utils/Constants";

export default function Location(props: LocationProps) {
	return (
		<div className='game-board-location' style={{
			left: `${props.pos[0] * 100}%`,
			top: `${props.pos[1] * 100}%`,
			// bottom: `calc(100% - calc(${props.pos[1] * 100}% - ${TILE_WIDTH} / 2))`,
		}}>
			{/* <div className="location-tile-container">
				<>
					{props.tiles.map((tile) => { return <Tile {...tile} /> })}
				</>
			</div> */}
			<div className="location-title-container" style={{
				backgroundColor: props.colour
			}}>{props.name}</div>
		</div >

	)
}
