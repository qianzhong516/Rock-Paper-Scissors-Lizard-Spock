import { useState } from 'react';
import { InitialBoard } from './initial_board';

const enum GameStage {
	INITIAL,
	PLAYER_PICKED,
	HOUSE_PICKED,
	RESULT,
}

export const GameBoard = () => {
	const [gameStage, setGameStage] = useState(GameStage.INITIAL);

	switch (gameStage) {
		case GameStage.INITIAL:
			return <InitialBoard />;
		default:
			return <></>;
	}
};
