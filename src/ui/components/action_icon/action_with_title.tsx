import { Icon, IconType } from '../../base/icon/Icon';
import { Text } from '../../base/typography/typography';
import { EmptyIconLarge } from './action_icon';
import styled from 'styled-components';

export type ActionWithTitleProps = {
	title: string;
	iconType: IconType;
	isEmpty?: boolean;
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
	iconType,
	isEmpty = false,
}: ActionWithTitleProps) => (
	<StyledContainer>
		<Text.Medium type='primary' uppercase={true}>
			{title}
		</Text.Medium>
		<Space />
		{isEmpty ? <EmptyIconLarge /> : <Icon type={iconType} size='large' />}
	</StyledContainer>
);
