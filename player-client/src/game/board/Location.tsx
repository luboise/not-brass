import React from 'react'

import "./Location.css";

import { LocationProps } from "./BoardTypes";

import { default as Tile } from './Tile';
import { TILE_WIDTH } from '@utils/Constants';

export default function Location(props: LocationProps) {
	return (
		<div className='game-board-location' style={{
			left: `calc(${props.pos[0] * 100}% - ${TILE_WIDTH} / 2)`,
			top: `${props.pos[1] * 100}%`
		}}>
			<div className="location-tile-container">
				<Tile industry1='Coal'></Tile>
				<Tile industry1='Iron'></Tile>
			</div>
			<div className="location-title-container">{props.name}</div>
		</div >

	)
}
