type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type Colour = RGB | RGBA | HEX;
export type BoardPos = [number, number];
export type PlayerNum = 1 | 2 | 3 | 4;

export interface Industry {
	name: string,
	mainIconPath: string,
}

export type IndustryRecord = Record<string, Industry>;