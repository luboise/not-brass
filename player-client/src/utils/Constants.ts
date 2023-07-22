import { Industry, IndustryRecord } from "./Types";

export const TILE_WIDTH = "48px";

const INDUSTRY_LIST: Industry[] = [
	{name: "Coal", mainIconPath: "coal.svg"},
	{name: "Iron", mainIconPath: "Iron.svg"},
	{name: "Cotton", mainIconPath: "Cotton.svg"},
	{name: "ManuGoods", mainIconPath: "ManuGoods.svg"},
	{name: "Pottery", mainIconPath: "Pottery.svg"},
	{name: "Beer", mainIconPath: "Beer.svg"}
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