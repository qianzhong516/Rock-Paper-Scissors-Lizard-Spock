import styled from 'styled-components';
import React from 'react';

const StyledContainer = styled.div`
	max-width: 30%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: auto;
	padding: 12px 20px;
	border-radius: 16px;
	border-color: #808080;
	border-width: 3px;
	border-style: solid;
`;

export const Header = ({
	Logo,
	ScorePin,
}: {
	Logo: React.ComponentType;
	ScorePin: React.ComponentType;
}) => (
	<StyledContainer>
		<Logo />
		<ScorePin />
	</StyledContainer>
);
