import React from 'react';

import Header from './components/Header';
import LampConstructor from './components/LampConstructor';
import PathFooter from './components/PathFooter';

function App() {
	return (
		<div className="App">
			<Header />
			<main className="main">
				<LampConstructor />
			</main>
			<PathFooter />
		</div>
	);
}

export default App;
