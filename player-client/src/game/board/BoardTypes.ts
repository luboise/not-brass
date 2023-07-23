import { EmptyTile } from "../player/PlayerTiles";
import { Colour, BoardPos } from "utils/Types"; 

export interface LocationProps {
	name: string;
	colour: Colour;
	pos: BoardPos;
	tiles: EmptyTile[];
	wrapFrequency?: number;
}