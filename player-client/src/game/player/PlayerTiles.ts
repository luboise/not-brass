import { Industry, PlayerNum } from "utils/Types";
import { CostSet, FlipValueSet } from "utils/Types";


export type BoardTile = EmptyTile | PlayerTile;

abstract class BaseTile {
	#industry: Industry;

	constructor(ind: Industry) {
		this.#industry = ind;
	}

	getIndustry(): Industry {
		// Return copy of industry
		return { ...this.#industry };
	}
}

// Tile for empty spots on the board
export class EmptyTile extends BaseTile {
	#extraIndustries: Industry[];

	constructor(inds: [Industry, ...Industry[]]) {
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

	constructor(owner: PlayerNum, ind: Industry, level: number) {
		// Send industry to base tile
		super(ind);

		this.#owner = owner;
		this.#level = level;
	}

	getOwner() {
		return this.#owner;
	}
	getLevel() {
		return this.#level;
	}

	// Make copy using spread operator
	getCosts() {
		const tileData = this.getIndustry().tiledata[this.#level];
		return { ...tileData.placementCosts }
	}
	// Make copy using spread operator
	getFlipValues() {
		const tileData = this.getIndustry().tiledata[this.#level];
		return { ...tileData.flipValues };
	}

	abstract isFlipped(): boolean;
}

// Resource player tile that offers resources to other players (coal, iron, beer, etc)
export class ResourceTile extends PlayerTile {
	#quantity: number;

	constructor(owner: PlayerNum, ind: Industry, level: number,) {
		super(owner, ind, level);
		this.#quantity = ind.tiledata[level].levelValues.initialQuantity || 0;
	}

	getQuantity() {
		return this.#quantity;
	}

	useResource(amount: number): boolean {
		if (amount > this.#quantity) {
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

	constructor(owner: PlayerNum, ind: Industry, level: number, beerRequired?: number) {
		super(owner, ind, level);
		this.#beerRequired = beerRequired || 0;
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