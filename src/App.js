import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Episode, Home, Player } from "./pages";

function App() {
	return (
		<BrowserRouter>
				<Routes>
					<Route path="/" Component={Home} />
					<Route path="/player/:episodeId" Component={Player} />
					<Route path='/episode/:animeId' Component={Episode} />
				</Routes>
		</BrowserRouter>
	);
}

export default App;
