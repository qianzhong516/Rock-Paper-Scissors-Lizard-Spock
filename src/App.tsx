import { useState } from 'react';
import './App.css';
import { Header } from './ui/components/header/header';
import { Logo } from './ui/base/logo/logo';
import { ScorePin } from './ui/components/score_pin/score_pin';

function App() {
	const [score, setScore] = useState(0);

	return (
		<div className='App'>
			<Header Logo={Logo} ScorePin={() => <ScorePin score={score} />} />
		</div>
	);
}

export default App;
