import boardBG from "/assets/board.jpg";
import "./Board.css"
import { useRef } from "react";

import { default as Location } from "./Location";
import { LocationProps } from "./BoardTypes";
import { INDUSTRIES } from "../../utils/Constants";
import { Colour } from "utils/Types";
import { EmptyTile, InvestmentTile, PlayerTile, ResourceTile } from "../player/PlayerTiles";

const [darkblue, green, red, orange, purple]: Colour[] = ["#0000ff", "#3a5f3a", "#660000", "#c46210", "#483248"];

const BOARD_LOCATIONS: LocationProps[] = [
    {
        name: "Uttoxeter", colour: darkblue, pos: [0.5655, 0.2745],
        tiles: [
            new EmptyTile([INDUSTRIES["Goods"], INDUSTRIES["Beer"]]),
            new EmptyTile([INDUSTRIES["Cotton"], INDUSTRIES["Beer"]])
        ]
    },
    {
        name: "Derby", colour: green, pos: [0.7575, 0.2985],
        tiles: [
            new EmptyTile([INDUSTRIES["Cotton"], INDUSTRIES["Goods"]]),
            new EmptyTile([INDUSTRIES["Iron"]]),
            new EmptyTile([INDUSTRIES["Cotton"], INDUSTRIES["Beer"]])
        ]
    },
    {
        name: "Belper", colour: green, pos: [0.756, 0.1445],
        tiles: [
            new EmptyTile([INDUSTRIES["Cotton"], INDUSTRIES["Goods"]]),
            new EmptyTile([INDUSTRIES["Coal"]]),
            new EmptyTile([INDUSTRIES["Pottery"]])
        ],
        wrapFrequency: 0,
    },
    {
        name: "Leek", colour: darkblue, pos: [0.5535, 0.1165],
        tiles: [
            new EmptyTile([INDUSTRIES["Cotton"], INDUSTRIES["Goods"]]),
            new EmptyTile([INDUSTRIES["Cotton"], INDUSTRIES["Coal"]]),
        ]
    },
    {
        name: "Birmingham", colour: purple, pos: [0.6275, 0.7325],
        tiles: [
            new EmptyTile([INDUSTRIES["Iron"]]),
            new EmptyTile([INDUSTRIES["Goods"]]),
            new EmptyTile([INDUSTRIES["Cotton"], INDUSTRIES["Goods"]]),
            new EmptyTile([INDUSTRIES["Goods"]]),
        ]
    },
    {
        name: "Worcester", colour: orange, pos: [0.363, 0.9255],
        tiles: [
            new EmptyTile([INDUSTRIES["Cotton"]]),
            new EmptyTile([INDUSTRIES["Cotton"]]),
        ]
    },
    {
        name: "Testing", colour: orange, pos: [0.2, 0.5],
        tiles: [
            new EmptyTile([INDUSTRIES["Cotton"]]),
            new InvestmentTile(1, INDUSTRIES["Cotton"], 1, { money: 13 }, {
                linkScore: 1, flipScore: 5, incomeAmount: 5
            },),
            new ResourceTile(1, INDUSTRIES["Coal"], 2, ;
        ]
    },
];

export default function Board() {
    // const ref = useRef<JSX.Element[]>(null);
    // if (!ref.current) {
    //     ref.current = ;
    // }

    return (
        <div className="game-board" style={{
            backgroundImage: `url(${boardBG})`
        }}>
            {BOARD_LOCATIONS.map((locProps, i) => { return <Location {...locProps} key={i} /> })}
        </div>
    )
}