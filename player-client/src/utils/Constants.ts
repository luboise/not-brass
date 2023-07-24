import { Industry, IndustryRecord } from "./Types";

// Import from CSS file/DOM
export const TILE_WIDTH: string = getComputedStyle(document.documentElement).getPropertyValue("--tile-width");

const INDUSTRY_LIST: Industry[] = [
	{
		name: "Coal", industryType: "Resource", mainIconPath: "coal_main.svg", resourceIconPath: "coal_resource.webp",
		tiledata: {
			1: {
				placementCosts: { money: 5 },
				flipValues: { linkScore: 2, flipScore: 1, incomeAmount: 4 },
				levelValues: { initialQuantity: 2 }
			}
		}
	},
	{
		name: "Iron", industryType: "Resource", mainIconPath: "iron_main.svg",
		tiledata: {
			1: {
				placementCosts: { money: 5, coal: 1 },
				flipValues: { linkScore: 1, flipScore: 3, incomeAmount: 3 },
				levelValues: { initialQuantity: 4 }
			},
		}
	},
	{
		name: "Beer", industryType: "Resource", mainIconPath: "beer_main.svg",
		tiledata: {
			1: {
				placementCosts: { money: 5, iron: 1 },
				flipValues: { linkScore: 2, flipScore: 4, incomeAmount: 4 },
				levelValues: { initialQuantity: 1 }
			},
		}
	},
	{
		name: "Cotton", industryType: "Investment", mainIconPath: "cotton_main.svg",
		tiledata: {
			1: {
				placementCosts: { money: 13 },
				flipValues: { linkScore: 1, flipScore: 5, incomeAmount: 5 },
				levelValues: { beerRequired: 1 }
			},
		}
	},
	{
		name: "Goods", industryType: "Investment", mainIconPath: "goods_main.svg",
		tiledata: {
			1: {
				placementCosts: { money: 8, coal: 1 },
				flipValues: { linkScore: 2, flipScore: 3, incomeAmount: 5 },
				levelValues: { beerRequired: 1 }
			},
		}
	},
	{
		name: "Pottery", industryType: "Investment", mainIconPath: "pottery_main.svg",
		tiledata: {
			1: {
				placementCosts: { money: 17, iron: 1, },
				flipValues: { linkScore: 1, flipScore: 10, incomeAmount: 5 },
				levelValues: { beerRequired: 1 }
			},
		}
	},

];

export const INDUSTRY_ASSET_PATH = "/assets/industry/"

function getIndustries() {
	const returnVar: IndustryRecord = {};

	for (const ind of INDUSTRY_LIST) {
		ind.mainIconPath = INDUSTRY_ASSET_PATH + ind.mainIconPath;
		returnVar[ind.name] = ind;
	}

	return returnVar;
}

export const INDUSTRIES: IndustryRecord = getIndustries()