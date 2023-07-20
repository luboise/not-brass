import React from 'react'

import { LocationProps } from "./BoardTypes";

import { default as Tile } from './Tile';

export default function Location(props: LocationProps) {
	return (
		<div className='game-board-location'>
			<Tile name="test" age={20} />
		</div>

	)
}
