import boardBG from "/assets/board.jpg";
import "./Board.css"

import { default as Location } from "./Location";
import { LocationProps } from "./BoardTypes";
import { INDUSTRIES } from "../../utils/Constants";
import { Colour } from "utils/Types";

const [darkblue, green, red, orange, purple]: Colour[] = ["#0000ff", "#3a5f3a", "#660000", "#c46210", "#483248"];

const BOARD_LOCATIONS: LocationProps[] = [
    {
        name: "Uttoxeter", colour: darkblue, pos: [0.5655, 0.2745],
        tiles: [
            { industry1: INDUSTRIES["Goods"], industry2: INDUSTRIES["Beer"] },
            { industry1: INDUSTRIES["Cotton"], industry2: INDUSTRIES["Beer"] }
        ]
    },
    {
        name: "Derby", colour: green, pos: [0.7575, 0.2985],
        tiles: [
            { industry1: INDUSTRIES["Cotton"], industry2: INDUSTRIES["Goods"] },
            { industry1: INDUSTRIES["Iron"] },
            { industry1: INDUSTRIES["Cotton"], industry2: INDUSTRIES["Beer"] }
        ]
    },
    {
        name: "Belper", colour: green, pos: [0.756, 0.1445],
        tiles: [
            { industry1: INDUSTRIES["Cotton"], industry2: INDUSTRIES["Goods"] },
            { industry1: INDUSTRIES["Coal"] },
            { industry1: INDUSTRIES["Pottery"] }
        ],
        wrapFrequency: 0,
    },
    {
        name: "Leek", colour: darkblue, pos: [0.5535, 0.1165],
        tiles: [
            { industry1: INDUSTRIES["Cotton"], industry2: INDUSTRIES["Goods"] },
            { industry1: INDUSTRIES["Cotton"], industry2: INDUSTRIES["Coal"] },
        ]
    },
    {
        name: "Birmingham", colour: purple, pos: [0.6275, 0.7325],
        tiles: [
            { industry1: INDUSTRIES["Iron"] },
            { industry1: INDUSTRIES["Goods"] },
            { industry1: INDUSTRIES["Cotton"], industry2: INDUSTRIES["Goods"] },
            { industry1: INDUSTRIES["Goods"] },
        ]
    },
    {
        name: "Worcester", colour: orange, pos: [0.363, 0.9255],
        tiles: [
            { industry1: INDUSTRIES["Cotton"] },
            { industry1: INDUSTRIES["Cotton"] },
        ]
    },
];

export default function Board() {
    // const LOCATIONS = useRef([<Location {} />])

    return (
        <div className="game-board" style={{
            backgroundImage: `url(${boardBG})`
        }}>
            {BOARD_LOCATIONS.map((locProps, i) => { return <Location {...locProps} key={i} /> })}
        </div>
    )
}