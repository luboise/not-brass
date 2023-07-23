import { Industry, IndustryRecord } from "./Types";

// Import from CSS file/DOM
export const TILE_WIDTH: string = getComputedStyle(document.documentElement).getPropertyValue("--tile-width");

const INDUSTRY_LIST: Industry[] = [
	{name: "Coal", mainIconPath: "coal_main.svg", resourceIconPath: "coal_resource.webp"},
	{name: "Iron", mainIconPath: "iron_main.svg"},
	{name: "Beer", mainIconPath: "beer_main.svg"},
	{name: "Cotton", mainIconPath: "cotton_main.svg"},
	{name: "Goods", mainIconPath: "goods_main.svg"},
	{name: "Pottery", mainIconPath: "pottery_main.svg"},
	
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