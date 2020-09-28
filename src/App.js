import React from 'react';
import './App.css';

//components
import Nav from './components/Nav';
import Sections from './components/Sections';

function App() {
	return (
		<div className="app">
			<Nav />
			<Sections />
		</div>
	);
}

export default App;
