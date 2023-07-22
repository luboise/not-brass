import { Colour, BoardPos, Industry, PlayerNum } from "utils/Types"; 

export interface LocationProps {
	name: string;
	colour: Colour;
	pos: BoardPos;
	tiles: TileOptions[];
	wrapFrequency?: number;
}

export interface TileOptions {
	industry1: Industry;
	industry2?: Industry;
	player?: PlayerNum;
};