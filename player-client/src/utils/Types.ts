type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type Colour = RGB | RGBA | HEX;
export type BoardPos = [number, number];
export type Industry = "Coal" | "Iron" | "Cotton" | "ManuGoods" | "Pottery" | "Beer";
export type PlayerNum = 1 | 2 | 3 | 4;