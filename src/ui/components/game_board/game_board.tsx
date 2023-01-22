import { useState, useEffect } from 'react';
import { InitialBoard } from './initial_board';
import { ActionWithTitle } from '../action_icon/action_with_title';
import { VersusBoard } from './versus_board';
import { ResultBoard } from './result_board';
import { IconType, Icon } from '../../base/icon/Icon';
import styled from 'styled-components';
import { GameResult, game } from '../../../game';
import type { Action } from '../../../game';
import { EmptyIconLarge } from '../action_icon/action_icon';
import { ResultDisplay } from '../result_display/result_display';
import React from 'react';

const enum GameStage {
	INITIAL,
	PLAYER_PICKED,
	HOUSE_PICKED,
	RESULT,
}

const PartyAction = ({
	iconType,
	party,
}: {
	iconType: IconType;
	party: 'player' | 'opponent';
}) => (
	<ActionWithTitle
		ActionIcon={<Icon type={iconType} size='large' />}
		title={party === 'player' ? 'You picked' : 'The house picked'}
	/>
);

const EmptyOpponentAction = () => (
	<ActionWithTitle ActionIcon={<EmptyIconLarge />} title='The house picked' />
);

const GameBoardContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 100%;
	margin: 100px auto;
`;

const actionToIconTypeMap: Record<Action, IconType> = {
	scissors: IconType.SCISSORS,
	paper: IconType.PAPER,
	rock: IconType.ROCK,
	lizard: IconType.LIZARD,
	spock: IconType.SPOCK,
};

const iconTypeToActionMap: Record<IconType, Action> = {
	[IconType.SCISSORS]: 'scissors',
	[IconType.PAPER]: 'paper',
	[IconType.ROCK]: 'rock',
	[IconType.LIZARD]: 'lizard',
	[IconType.SPOCK]: 'spock',
};

export const GameBoard = React.memo(
	({
		updateScore,
	}: {
		updateScore: React.Dispatch<React.SetStateAction<number>>;
	}) => {
		const [gameStage, setGameStage] = useState<GameStage>(
			GameStage.INITIAL
		);
		const [playerAction, setPlayerAction] = useState<Action>('scissors');
		const [opponentAction, setOpponentAction] =
			useState<Action>('scissors');
		const [isGameResultReady, setIsGameResultReady] = useState(false);
		const [gameResult, setGameResult] = useState<GameResult | null>(null);

		useEffect(() => {
			if (!isGameResultReady || gameResult == null) {
				return;
			}

			const updateGameScore = (result: GameResult) => {
				switch (result) {
					case GameResult.LOSE:
						updateScore((prev) => (prev - 1 < 0 ? 0 : prev - 1));
						break;
					case GameResult.WIN:
						updateScore((prev) => prev + 1);
						break;
					case GameResult.TIE:
					default:
						break;
				}
			};
			updateGameScore(gameResult);
		}, [updateScore, isGameResultReady, gameResult]);

		const onActionIconClick = (type: IconType) => {
			setPlayerAction(iconTypeToActionMap[type]);
			setGameStage(GameStage.PLAYER_PICKED);
		};

		const goToHousePickedStage = () => {
			setTimeout(() => {
				setOpponentAction(game.generateOpponentAction());
				setGameStage(GameStage.HOUSE_PICKED);
			}, 1000);
		};

		const goToResultStage = () => {
			setTimeout(() => {
				setGameResult(game.getResult(playerAction, opponentAction));
				setIsGameResultReady(true);
				setGameStage(GameStage.RESULT);
			}, 1000);
		};

		const handlePlayAgain = () => {
			setGameResult(null);
			setIsGameResultReady(false);
			setGameStage(GameStage.INITIAL);
		};

		let Board: React.ReactElement | undefined;
		switch (gameStage) {
			case GameStage.INITIAL:
				Board = <InitialBoard onActionIconClick={onActionIconClick} />;
				break;
			case GameStage.PLAYER_PICKED:
				Board = (
					<VersusBoard
						PlayerAction={
							<PartyAction
								iconType={actionToIconTypeMap[playerAction]}
								party='player'
							/>
						}
						OpponentAction={<EmptyOpponentAction />}
					/>
				);
				goToHousePickedStage();
				break;
			case GameStage.HOUSE_PICKED:
				Board = (
					<VersusBoard
						PlayerAction={
							<PartyAction
								iconType={actionToIconTypeMap[playerAction]}
								party='player'
							/>
						}
						OpponentAction={
							<PartyAction
								iconType={actionToIconTypeMap[opponentAction]}
								party='opponent'
							/>
						}
					/>
				);
				goToResultStage();
				break;
			case GameStage.RESULT:
				Board = (
					<ResultBoard
						PlayerAction={
							<PartyAction
								iconType={actionToIconTypeMap[playerAction]}
								party='player'
							/>
						}
						OpponentAction={
							<PartyAction
								iconType={actionToIconTypeMap[opponentAction]}
								party='opponent'
							/>
						}
						ResultDisplay={
							gameResult !== null ? (
								<ResultDisplay
									onClick={handlePlayAgain}
									result={gameResult}
								/>
							) : undefined
						}
					/>
				);
				break;
			default:
				return <></>;
		}

		return <GameBoardContainer>{Board}</GameBoardContainer>;
	}
);
