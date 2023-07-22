import React from 'react'
import "./Tile.css"

import { TileOptions } from './BoardTypes';
import { TILE_WIDTH } from '../../utils/Constants';

export default function Tile(props: TileOptions) {
    return (
        <div className='game-board-tile'
            style={{ width: TILE_WIDTH, height: TILE_WIDTH }}
        >
            <p>
                {props.industry1}
                <>
                    {() => {
                        if (props.industry2) {
                            return <> <br /> props.industry2</>;
                        } else {
                            return <></>;
                        }
                    }}
                </>
            </p>
        </div>
    )
}