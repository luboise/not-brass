import { useRef } from 'react';

import './App.css'

import { Board } from "./game";



function App() {
	const players = useRef();
	if (!players.current) {

	}

	return (
		<>
			<Board />
		</>
	)
}

export default App
