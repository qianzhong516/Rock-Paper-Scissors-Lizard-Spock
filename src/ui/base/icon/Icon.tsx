import styled from 'styled-components';

export const enum IconType {
	SCISSORS,
	PAPER,
	ROCK,
	LIZARD,
	SPOCK,
}

type IconSize = 'small' | 'large';

type ActionIconProps = {
	type: IconType;
	size?: IconSize;
};

const CircleOutlineStyleMap: Record<IconType, string> = {
	[IconType.SCISSORS]:
		'background-image: linear-gradient(to bottom, hsl(40, 84%, 53%) 90%, hsl(39, 89%, 49%) 10%)',
	[IconType.PAPER]:
		'background-image: linear-gradient(to bottom, hsl(230, 89%, 62%), hsl(230, 89%, 65%))',
	[IconType.ROCK]:
		'background-image: linear-gradient(to bottom, hsl(349, 71%, 52%), hsl(349, 70%, 56%))',
	[IconType.LIZARD]:
		'background-image: linear-gradient(to bottom, hsl(261, 73%, 60%), hsl(261, 72%, 63%))',
	[IconType.SPOCK]:
		'background-image: linear-gradient(to bottom, hsl(189, 59%, 53%), hsl(189, 58%, 57%))',
};

const Circle = styled.div.attrs(
	({ type, size = 'small' }: ActionIconProps) => ({
		size,
		type,
	})
)`
	position: absolute;
	${({ size }) => {
		switch (size) {
			case 'large':
				return 'top: 20px; bottom: 20px; left: 20px; right: 20px; width: 200px; height: 200px;';
			case 'small':
			default:
				return 'top: 10px; bottom: 10px; left: 10px; right: 10px; width: 100px; height: 100px;';
		}
	}}
	display: flex;
	justify-content: center;
	align-items: center;
	background: #ffffff;
	border-radius: 50%;
	box-shadow: 0 5px 2px 0 rgba(0, 0, 0, 0.2) inset;
`;

const CircleOutline = styled.div.attrs(
	({ type, size = 'small' }: ActionIconProps) => ({
		size,
		type,
	})
)`
	position: relative;
	border-radius: 50%;
	${({ size }) => {
		switch (size) {
			case 'large':
				return 'width: 240px; height: 240px;';
			case 'small':
			default:
				return 'width: 120px; height: 120px;';
		}
	}}
	${({ type }) => CircleOutlineStyleMap[type]};
`;

const imageAltTextMap = {
	[IconType.SCISSORS]: 'icon-scissors',
	[IconType.PAPER]: 'icon-paper',
	[IconType.ROCK]: 'icon-rock',
	[IconType.LIZARD]: 'icon-lizard',
	[IconType.SPOCK]: 'icon-spock',
};

const imageSizeMap = {
	small: {
		width: 45,
		height: undefined,
	},
	large: {
		width: 90,
		height: undefined,
	},
};

const ActionSvg = ({ type, size = 'small' }: ActionIconProps) => {
	return (
		<img
			{...imageSizeMap[size]}
			src={
				process.env.REACT_APP_PUBLIC_URL +
				`/assets/images/${imageAltTextMap[type]}.svg`
			}
			alt='logo'
		/>
	);
};

export const Icon = (props: ActionIconProps) => (
	<CircleOutline {...props}>
		<Circle {...props}>
			<ActionSvg {...props} />
		</Circle>
	</CircleOutline>
);
