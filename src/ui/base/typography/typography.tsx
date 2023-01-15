import styled from 'styled-components';
import {
	PRIMARY_COLOR,
	SECONDARY_COLOR,
	DEFAULT_COLOR,
} from '../global/colors';

type FontSize = 'small' | 'medium' | 'large';

type FontProps = {
	type: 'primary' | 'secondary';
	size: FontSize;
	ele?: 'h1' | 'h2' | 'h3';
	fontSize?: number;
	bold?: boolean;
	color?: string;
	uppercase?: boolean;
	capitalized?: boolean;
	children: string | number;
};

const TextBase = ({
	ele,
	children,
	bold = false,
	uppercase = false,
	capitalized = false,
	...props
}: FontProps) => {
	switch (ele) {
		case 'h1':
			return <h1 {...props}>{children}</h1>;
		case 'h2':
			return <h2 {...props}>{children} </h2>;
		case 'h3':
			return <h3 {...props}>{children}</h3>;
		default:
			return <span {...props}>{children}</span>;
	}
};

const StyledTextBase = styled(TextBase)`
	${({ fontSize, size }) =>
		fontSize
			? `font-size: ${fontSize}px`
			: size === 'small'
			? 'font-size: 18px'
			: size === 'medium'
			? 'font-size: 40px'
			: size === 'large'
			? 'font-size: 60px'
			: ''};
	${({ bold }) =>
		bold
			? 'font-family: bsc-bold; font-weight: 700;'
			: 'font-family: bsc-bold; font-weight: 600;'}
	color: ${({ type, color }) =>
		color
			? color
			: type === 'primary'
			? PRIMARY_COLOR
			: type === 'secondary'
			? SECONDARY_COLOR
			: DEFAULT_COLOR};
	text-transform: ${({ uppercase, capitalized }) =>
		uppercase ? 'uppercase' : capitalized ? 'capitalized' : 'none'};
`;

export const Text = {
	Small: (props: Omit<FontProps, 'size'>) => (
		<StyledTextBase size='small' {...props} />
	),
	Medium: (props: Omit<FontProps, 'size'>) => (
		<StyledTextBase size='medium' {...props} />
	),
	Large: (props: Omit<FontProps, 'size'>) => (
		<StyledTextBase size='large' {...props} />
	),
};

export const Typography = StyledTextBase;
