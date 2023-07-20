import { Colour, BoardPos} from "@utils/Types";

export interface LocationProps {
	name: string;
	colour: Colour;
	pos: BoardPos;
}

export type TileOptions = {
    name: string,
    age: Number
};