import { useRef, useContext, createContext } from 'react';

import './App.css'

import { Board } from "./game";
import { generatePlayers } from './game/player/Player';

// TODO: Set this up later
const playerContext = createContext(generatePlayers);

function App() {
	return (
		<>
			<Board />
		</>
	)
}

export default App
