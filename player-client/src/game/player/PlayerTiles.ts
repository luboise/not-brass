import { Industry, PlayerNum } from "utils/Types";

interface CostSet {
	money: number;
	coal?: number;
	iron?: number;
}

interface FlipValueSet {
	linkScore: number;
	flipScore: number;
	incomeAmount: number;
}

abstract class BaseTile{
	#industry: Industry;

	constructor(ind: Industry) {
		this.#industry;
	}

	getIndustry(){
		return this.#industry;
	}
}

abstract class PlayerTile extends BaseTile {
	#owner: PlayerNum;
	#level: number;
	#industry: Industry;
	
	#placementCosts: CostSet;
	#flipValues: FlipValueSet;

	constructor(owner: PlayerNum, level: number, industry: Industry, placementCosts: CostSet, flipValues: FlipValueSet){
		this.#owner = owner;
		this.#industry = industry;
		this.#level = level;

		this.#placementCosts = placementCosts;
		this.#flipValues = flipValues;
	}

	getOwner() {
		return this.#owner;
	}
	getIndustry(){
		return this.#industry.name;
	}
	getLevel(){
		return this.#level;
	}
	getLinkValue(){
		return this.#linkValue;
	}

	// Make copy using spread operator
	getCosts(){
		return {...this.#placementCosts}
	}
	// Make copy using spread operator
	getFlipValues(){
		return {...this.#flipValues}
	}

	abstract isFlipped(): boolean;
}

class ResourceTile extends PlayerTile {
	#quantity: number;

	constructor(owner: PlayerNum, level: number, industry: Industry, placementCosts: CostSet, flipValues: FlipValueSet, initialQuantity: number){
		super(owner, level, industry, placementCosts, flipValues);
		this.#quantity = initialQuantity;
	}

	getQuantity(){
		return this.#quantity;
	}

	useResource(amount: number): boolean {
		if (amount > this.#quantity){
			return false;
		} else {
			this.#quantity -= amount;
			if (this.#quantity === 0) {
				
			}
			return true;
		}
	}

	isFlipped() {
		return this.#quantity === 0;
	}

	
}

class InvestmentTile extends PlayerTile {
	#beerRequired: number;

}