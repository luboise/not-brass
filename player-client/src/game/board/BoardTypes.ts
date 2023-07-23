import { EmptyTile } from "../player/PlayerTiles";
import { Colour, BoardPos } from "utils/Types"; 

import { BoardTile } from "../player/PlayerTiles";

export interface LocationProps {
	name: string;
	colour: Colour;
	pos: BoardPos;
	tiles: BoardTile[];
	wrapFrequency?: number;
}