import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	margin: auto;
	min-width: 600px;
	max-width: 100%;
`;

export const VersusBoard = ({
	PlayerAction,
	OpponentAction,
}: {
	PlayerAction: React.ReactElement;
	OpponentAction: React.ReactElement;
}) => (
	<Container>
		{PlayerAction}
		{OpponentAction}
	</Container>
);
