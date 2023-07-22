import "./Tile.css"

import { TileOptions } from './BoardTypes';
import { TILE_WIDTH } from '../../utils/Constants';
import Image from "../global/Image";

const MULTIPLE_ICON_SCALE = 0.6;

export default function Tile(props: TileOptions) {
    return (
        <div className='game-board-tile'
            style={{ width: TILE_WIDTH, height: TILE_WIDTH }}
        >
            <div className='tile-image-container'>
                {
                    props.industry2 ?
                        (<>
                            <Image src={props.industry1.mainIconPath} align="tl" key="1"
                                width={`${MULTIPLE_ICON_SCALE * 100}%`}
                                height={`${MULTIPLE_ICON_SCALE * 100}%`} />
                            <Image src={props.industry2.mainIconPath} align="br" key="2"
                                width={`${MULTIPLE_ICON_SCALE * 100}%`}
                                height={`${MULTIPLE_ICON_SCALE * 100}%`} />
                        </>) :
                        <Image src={props.industry1.mainIconPath}
                            width="100%"
                            height="100%" />
                }
            </div>
        </div >
    )
}