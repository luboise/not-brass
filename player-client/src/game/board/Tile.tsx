import React from 'react'
import "./Tile.css"

import { TileOptions } from './BoardTypes';
import { TILE_WIDTH } from '../../utils/Constants';
import { Industry } from '@utils/Types';

// function getIndustryImagePath(ind: Industry) {
//     let testpath;
//     for (const ext of FILE_TYPES) {
//         const potentialPath = `/assets/industry/${ind}${ext}`;

//         console.log
//         testpath = potentialPath;
//     }
//     return testpath;
// }

export default function Tile(props: TileOptions) {
    const basesrc = `/assets/industry/${props.industry1}`;

    return (
        <div className='game-board-tile'
            style={{ width: TILE_WIDTH, height: TILE_WIDTH }}
        >
            <div className='tile-image-container'>
                <img src={props.industry1.mainIconPath} onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = "assets/placeholder.png";
                    currentTarget.alt = "Placeholder image";
                }} />
            </div>
        </div>
    )
}