import { Industry, PlayerNum } from "utils/Types";

export type BoardTile = EmptyTile | PlayerTile;

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
		this.#industry = ind;
	}

	getIndustry(): Industry {
		// Return copy of industry
		return {...this.#industry};
	}
}

// Tile for empty spots on the board
export class EmptyTile extends BaseTile {
	#extraIndustries: Industry[];

	constructor(inds: [Industry, ...Industry[]]){
		super(inds[0]);
		this.#extraIndustries = inds.slice(1);
	}

	getIndustries(): Industry[] {
		return [super.getIndustry(), ...this.#extraIndustries]
	}
}

// Shared player tile for placing on the board
export abstract class PlayerTile extends BaseTile {
	#owner: PlayerNum;
	#level: number;
	#placementCosts: CostSet;
	#flipValues: FlipValueSet;

	constructor(owner: PlayerNum, ind: Industry, level: number, placementCosts: CostSet, flipValues: FlipValueSet){
		// Send industry to base tile
		super(ind);

		this.#owner = owner;
		this.#level = level;
		this.#placementCosts = placementCosts;
		this.#flipValues = flipValues;
	}

	getOwner() {
		return this.#owner;
	}
	getLevel(){
		return this.#level;
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

// Resource player tile that offers resources to other players (coal, iron, beer, etc)
export class ResourceTile extends PlayerTile {
	#quantity: number;

	constructor(owner: PlayerNum, ind: Industry, level: number, placementCosts: CostSet, flipValues: FlipValueSet, initialQuantity: number){
		super(owner, ind, level, placementCosts, flipValues );
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
				// TODO: ADD CALLBACK FOR PLAYER INCOME INCREASING 
				console.log("Missing tile flip input callback.")
			}
			return true;
		}
	}

	isFlipped() {
		return this.#quantity === 0;
	}
}

// Investment tile that does not offer a resource and is manually flipped
export class InvestmentTile extends PlayerTile {
	#beerRequired: number;
	#flipped: boolean;

	constructor(owner: PlayerNum, ind: Industry, level: number, placementCosts: CostSet, flipValues: FlipValueSet, beerRequired: number){
		super(owner, ind, level, placementCosts, flipValues);
		this.#beerRequired = beerRequired;
		this.#flipped = false;
	}

	isFlipped(): boolean {
		return this.#flipped;
	}

	getBeerRequired(): number {
		return this.#beerRequired;
	}

	// Returns income difference
	sell(): number {
		this.#flipped = true;
		return this.getFlipValues().incomeAmount;
	}
}