import React from 'react'
import "./Tile.css"

import { TileOptions } from './BoardTypes';

export default function Tile(props: TileOptions) {

    return (
        <div className='game-board-tile'>
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