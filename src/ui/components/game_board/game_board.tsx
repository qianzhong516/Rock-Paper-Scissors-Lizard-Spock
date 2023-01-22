import { useState } from 'react';
import { InitialBoard } from './initial_board';
import { ActionWithTitle } from '../action_icon/action_with_title';
import { VersusBoard } from './versus_board';
import { IconType } from '../../base/icon/Icon';
import styled from 'styled-components';

const enum GameStage {
	INITIAL,
	PLAYER_PICKED,
	HOUSE_PICKED,
	RESULT,
}

const PlayerAction = ({ iconType }: { iconType: IconType }) => (
	<ActionWithTitle iconType={iconType} title='You picked' />
);

const OpponentAction = ({
	iconType,
	isEmpty = false,
}: {
	iconType: IconType;
	isEmpty?: boolean;
}) => (
	<ActionWithTitle
		iconType={iconType}
		isEmpty={isEmpty}
		title='The house picked'
	/>
);

const GameBoardContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 800px;
	max-width: 100%;
	margin: 100px auto;
`;

export const GameBoard = () => {
	const [gameStage, setGameStage] = useState<GameStage>(GameStage.INITIAL);
	const [playerAction, setPlayerAction] = useState<IconType>(
		IconType.SCISSORS
	);
	const [opponentAction, setOpponentAction] = useState<IconType>(
		IconType.SCISSORS
	);

	const handleActionIconClick = (type: IconType) => {
		setPlayerAction(type);
		setGameStage(GameStage.PLAYER_PICKED);
	};

	let Board: React.ReactElement | undefined;

	switch (gameStage) {
		case GameStage.INITIAL:
			Board = <InitialBoard onActionIconClick={handleActionIconClick} />;
			break;
		case GameStage.PLAYER_PICKED:
			Board = (
				<VersusBoard
					PlayerAction={<PlayerAction iconType={playerAction} />}
					OpponentAction={
						<OpponentAction
							iconType={opponentAction}
							isEmpty={true}
						/>
					}
				/>
			);
			break;
		default:
			return <></>;
	}

	return <GameBoardContainer>{Board}</GameBoardContainer>;
};
