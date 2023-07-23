import "./Tile.css"

import { TILE_WIDTH } from '../../utils/Constants';
import Image from "../global/Image";
import { BoardTile, EmptyTile, PlayerTile } from "../../game/player/PlayerTiles";

const MULTIPLE_ICON_SCALE = 0.7;

export default function Tile(props: { tileInstance: BoardTile }) {
    return (
        <div className='game-board-tile'
            style={{ width: TILE_WIDTH, height: TILE_WIDTH }}
        >
            <div className='tile-image-container'>
                {
                    props.tileInstance instanceof EmptyTile &&
                        props.tileInstance.getIndustries().length >= 2 ?
                        (<>
                            <Image src={props.tileInstance.getIndustries()[0].mainIconPath} align="tl" key="1"
                                scale={MULTIPLE_ICON_SCALE} />
                            <Image src={props.tileInstance.getIndustries()[1].mainIconPath} align="br" key="2"
                                scale={MULTIPLE_ICON_SCALE} />
                        </>) :
                        <Image src={props.tileInstance.getIndustry().mainIconPath} scale={1} />
                }
            </div>
        </div >
    )
}