import { Colour, PlayerNum } from "../../utils/Types";
import { PlayerTile, ResourceTile } from "./PlayerTiles";
import { INDUSTRIES } from "../../utils/Constants";

export function generatePlayers(playerCount: number): Player[] {
	const players = [];

	for (let i = 1; i <= playerCount; i++){
		players.push(new Player(i as PlayerNum, `Test player ${i}`, "#FFAAFF"));
	}

	return players;
}

export class Player {
	#name: string;
	#colour: Colour;
	#tiles: PlayerTile[];
	#playerNumber: PlayerNum;

	constructor(num: PlayerNum, name: string, colour: Colour){
		this.#playerNumber = num;
		this.#name = name;
		this.#colour = colour;
		this.#tiles = Player.#generatePlayerTiles(num);
	}

	getName(){
		return this.#name;
	}
	getColour(){
		return this.#colour;
	}
	getTiles(){
		return this.#tiles;
	}
	getPlayerNumber(){
		return this.#playerNumber;
	}

	// TODO: Implement full player area
	static #generatePlayerTiles(num: PlayerNum): PlayerTile[] {
		const tiles: PlayerTile[] = [];

		for(let i = 0; i < 2; i++){
			tiles.push(
				new ResourceTile(num, INDUSTRIES.coal,
			1, {money: 5},
			{linkScore: 2, flipScore: 1, incomeAmount: 4},
			2))
		}

		return tiles;
	}
}