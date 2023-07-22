import React from 'react'
import "./Tile.css"

import { TileOptions } from './BoardTypes';
import { TILE_WIDTH } from '../../utils/Constants';

import coal from "/assets/industry/coal.svg";
import { Industry } from '@utils/Types';

const FILE_TYPES = [".svg", ".png"];

function getIndustryImagePath(ind: Industry) {


    for (const ext of FILE_TYPES) {
        const potentialPath = `/assets/industry/${ind}${ext}`;

        return potentialPath;
    }
}

export default function Tile(props: TileOptions) {
    const src = getIndustryImagePath(props.industry1);
    console.log("src: ", src);

    return (
        <div className='game-board-tile'
            style={{ width: TILE_WIDTH, height: TILE_WIDTH }}
        >
            <div className='tile-image-container'>
                <img src={src} />
            </div>
        </div>
    )
}