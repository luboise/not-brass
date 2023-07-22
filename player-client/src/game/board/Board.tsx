import boardBG from "/assets/board.jpg";
import "./Board.css"

import { default as Location } from "./Location";
import { LocationProps } from "./BoardTypes";

const BOARD_LOCATIONS: LocationProps[] = [
    { name: "Uttoxeter", colour: "#0000FF", pos: [0.5655, 0.2745], tiles: [{ industry1: "ManuGoods", industry2: "Beer" }, { industry1: "Cotton", industry2: "Beer" }] },
    { name: "Derby", colour: "#3a5f3a", pos: [0.7575, 0.2985], tiles: [{ industry1: "Cotton", industry2: "ManuGoods" }, { industry1: "Iron" }, { industry1: "Cotton", industry2: "Beer" },] },
    { name: "Belper", colour: "#3a5f3a", pos: [0.756, 0.1445], tiles: [{ industry1: "Cotton", industry2: "ManuGoods" }, { industry1: "Coal" }, { industry1: "Pottery" },] }
];

export default function Board() {
    // const LOCATIONS = useRef([<Location {} />])

    return (
        <div className="game-board" style={{
            backgroundImage: `url(${boardBG})`
        }}>
            {BOARD_LOCATIONS.map((locationProps, i) => { return <Location {...locationProps} key={i} /> })}
        </div>
    )
}