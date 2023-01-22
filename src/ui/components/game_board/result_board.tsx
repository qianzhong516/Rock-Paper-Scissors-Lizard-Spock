import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	margin: auto;
	min-width: 800px;
	max-width: 100%;
`;

export const ResultBoard = ({
	PlayerAction,
	OpponentAction,
	ResultDisplay,
}: {
	PlayerAction: React.ReactElement;
	OpponentAction: React.ReactElement;
	ResultDisplay?: React.ReactElement;
}) => (
	<Container>
		{PlayerAction}
		{ResultDisplay}
		{OpponentAction}
	</Container>
);
