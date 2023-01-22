import { Text } from '../../base/typography/typography';
import styled from 'styled-components';

export type ActionWithTitleProps = {
	title: string;
	ActionIcon: React.ReactElement;
};

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Space = styled.div`
	height: 16px;
`;

export const ActionWithTitle = ({
	title,
	ActionIcon,
}: ActionWithTitleProps) => (
	<StyledContainer>
		<Text.Medium type='primary' uppercase={true}>
			{title}
		</Text.Medium>
		<Space />
		{ActionIcon}
	</StyledContainer>
);
