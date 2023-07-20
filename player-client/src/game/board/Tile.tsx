import React from 'react'
import "./Tile.css"

import { TileOptions } from './BoardTypes';

export default function Tile(props: TileOptions) {
    const name = props.name;

    return (
        <div className='game-board-tile'></div>
    )
}