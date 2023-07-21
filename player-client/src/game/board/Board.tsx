import boardBG from "/assets/board.jpg";
import "./Board.css"

import { default as Location } from "./Location";

export default function Board() {
    // const LOCATIONS = useRef([<Location {} />])
    const location1 = <Location name={"Uttoxeter"} colour="#0000FF" pos={[0.5, 0.5]} />;

    return (
        <div className="game-board" style={{
            backgroundImage: `url(${boardBG})`
        }}>
            {location1}
        </div>
    )
}