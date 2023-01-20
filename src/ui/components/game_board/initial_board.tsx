import styled from 'styled-components';
import {
	ScissorsIconSmall,
	SpockIconSmall,
	RockIconSmall,
	LizardIconSmall,
	PaperIconSmall,
} from '../action_icon/action_icon';

const PentagonBackground = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => <div className={className}>{children}</div>;

const StyledPentagonBackground = styled(PentagonBackground)`
	position: relative;
	width: 400px;
	height: 380px;
	max-width: 100%;
	margin: 100px auto;
	background-image: url('/assets/images/bg-pentagon.svg');
	background-size: contain;
	background-repeat: no-repeat;
`;

const BaseAnchor = styled.div`
	position: absolute;
`;

const TopAnchor = styled(BaseAnchor)`
	top: -60px;
	left: calc(50% - 60px);
`;

const MiddleLeftAnchor = styled(BaseAnchor)`
	left: -40px;
	top: calc(50% - 100px);
`;

const MiddleRightAnchor = styled(BaseAnchor)`
	right: -40px;
	top: calc(50% - 100px);
`;

const BottomLeftAnchor = styled(BaseAnchor)`
	bottom: -60px;
	right: calc(50% + 60px);
`;

const BottomRightAnchor = styled(BaseAnchor)`
	bottom: -60px;
	left: calc(50% + 60px);
`;

export const InitialBoard = () => (
	<StyledPentagonBackground>
		<TopAnchor>
			<ScissorsIconSmall />
		</TopAnchor>
		<MiddleLeftAnchor>
			<SpockIconSmall />
		</MiddleLeftAnchor>
		<MiddleRightAnchor>
			<PaperIconSmall />
		</MiddleRightAnchor>
		<BottomLeftAnchor>
			<LizardIconSmall />
		</BottomLeftAnchor>
		<BottomRightAnchor>
			<RockIconSmall />
		</BottomRightAnchor>
	</StyledPentagonBackground>
);
