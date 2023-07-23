import "./Tile.css"

import Image from "../global/Image";
import { BoardTile, EmptyTile, PlayerTile, ResourceTile } from "../../game/player/PlayerTiles";
import { getRomanNumeral } from "../../utils/Functions";

const MULTIPLE_ICON_SCALE = 0.7;

const RESOURCE_SIZE = 0.25;

export default function Tile(props: { tileInstance: BoardTile }) {
    const tile = props.tileInstance;

    const images: JSX.Element[] = [];
    const tileElements: JSX.Element[] = [];
    const tileStyles: React.CSSProperties = {};

    // If there isn't a player tile on it
    if (tile instanceof EmptyTile && tile.getIndustries().length >= 2) {

        images.push(
            <Image src={tile.getIndustries()[0].mainIconPath}
                align="tl" scale={MULTIPLE_ICON_SCALE} key={0} />
        );
        images.push(
            <Image src={tile.getIndustries()[1].mainIconPath}
                align="br" scale={MULTIPLE_ICON_SCALE} key={1} />
        );

    } else {
        images.push(<Image src={tile.getIndustry().mainIconPath} scale={1} />);
    }


    tileElements.push(
        <div className='tile-image-container'>{...images}</div>
    );


    if (tile instanceof PlayerTile) {
        tileElements.push(
            <div className="tile-level-container">
                <p className="tile-level-text">
                    {getRomanNumeral(tile.getLevel())}
                </p>
            </div>
        );

        tileStyles.backgroundColor = "#0000FF";

        if (tile instanceof ResourceTile) {
            tileElements.push(
                <div className="tile-resource-container"
                    style={{
                        width: `${RESOURCE_SIZE * 100}%`, height: `${RESOURCE_SIZE * 100}%`,
                        bottom: 0, right: 0,
                    }}
                >
                    <Image src={tile.getIndustry().resourceIconPath || ""} />
                </div>)
        }
    }

    return (
        <div className='game-board-tile'
            style={tileStyles}
        >
            {...tileElements}
        </div >
    )
}