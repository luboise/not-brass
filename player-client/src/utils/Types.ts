type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type Colour = RGB | RGBA | HEX;
export type BoardPos = [number, number];
export type PlayerNum = 1 | 2 | 3 | 4;

export interface Industry {
	name: string,
	industryType: "Resource" | "Investment";

	mainIconPath: string,
	tiledata: Record<number, IndustryTileData>,
	resourceIconPath?: string,
	resourceColour?: Colour,
}

export type IndustryRecord = Record<string, Industry>;

interface IndustryTileData {
	placementCosts: CostSet;
	flipValues: FlipValueSet;
	levelValues: LevelValueSet;
}

export interface CostSet {
	money: number;
	coal?: number;
	iron?: number;
}

export interface FlipValueSet {
	linkScore: number;
	flipScore: number;
	incomeAmount: number;
}

export interface LevelValueSet {
	initialQuantity?: number;
	beerRequired?: number;
}