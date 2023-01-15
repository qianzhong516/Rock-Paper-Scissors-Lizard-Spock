import { Text } from '../../base/typography/typography';
import styled from 'styled-components';

const StyledContainer = styled.div`
	border-radius: 12px;
	background-color: azure;
	text-align: center;
	padding: 12px 48px;
`;

export const ScorePin = ({ score }: { score: number }) => (
	<StyledContainer>
		<div>
			<Text.Small
				type='secondary'
				uppercase={true}
				color='hsl(229, 64%, 46%)'>
				Score
			</Text.Small>
		</div>
		<div>
			<Text.Large type='secondary' color='#666666' bold={true}>
				{score}
			</Text.Large>
		</div>
	</StyledContainer>
);
