import { Industry, IndustryRecord } from "./Types";

export const TILE_WIDTH = "48px";

const INDUSTRY_LIST: Industry[] = [
	{name: "Coal", mainIconPath: "coal.svg"},
	{name: "Iron", mainIconPath: "iron.svg"},
	{name: "Cotton", mainIconPath: "cotton.svg"},
	{name: "Goods", mainIconPath: "goods.svg"},
	{name: "Pottery", mainIconPath: "pottery.svg"},
	{name: "Beer", mainIconPath: "beer.svg"}
];

export const INDUSTRY_ASSET_PATH = "/assets/industry/"

function getIndustries() {
	const returnVar: IndustryRecord = {};
	
	for (const ind of INDUSTRY_LIST){
		ind.mainIconPath = INDUSTRY_ASSET_PATH + ind.mainIconPath;
		returnVar[ind.name] = ind;
	}

	return returnVar;
}

export const INDUSTRIES: IndustryRecord = getIndustries()