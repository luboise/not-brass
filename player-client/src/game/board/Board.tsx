import image from "../../assets/img/board.jpg";
import "./Board.css"

import { default as Location } from "./Location";

export default function Board() {
    // const LOCATIONS = useRef([<Location {} />])
    const location1 = <Location name={"test1"} colour="#000000" pos={[0.5, 0.5]} />;

    return (
        <div className="game-board" style={{
            backgroundImage: `url(${image})`
        }}>
            {location1}
        </div>
    )
};