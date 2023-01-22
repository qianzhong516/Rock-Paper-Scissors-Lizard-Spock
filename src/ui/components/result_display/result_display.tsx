import { Text } from '../../base/typography/typography';
import { CustomButton } from '../../base/button/button';
import { GameResult } from '../../../game';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0 60px;
`;

export const ResultDisplay = ({
	result,
	onClick,
}: {
	result: GameResult;
	onClick: () => void;
}) => {
	let resultText = '';
	switch (result) {
		case GameResult.LOSE:
			resultText = 'You lost';
			break;
		case GameResult.WIN:
			resultText = 'You won';
			break;
		case GameResult.TIE:
			resultText = 'Tie';
			break;
		default:
			break;
	}

	return (
		<Container>
			<Text.Large type='primary' uppercase={true}>
				{resultText}
			</Text.Large>
			<CustomButton size='large' theme='solid' onClick={onClick}>
				Play again
			</CustomButton>
		</Container>
	);
};
