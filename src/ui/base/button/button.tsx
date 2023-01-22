import styled from 'styled-components';

const Button = styled.button.attrs(
	({
		size,
		theme,
	}: {
		size: 'small' | 'large';
		theme: 'solid' | 'borderline';
	}) => ({
		size,
		theme,
	})
)`
	outline: none;
	border-radius: 8px;
	min-width: ${({ size }) => (size === 'small' ? '100px' : '300px')};
	font-size: ${({ size }) => (size === 'small' ? '24px' : '36px')};
	background: ${({ theme }) =>
		theme === 'solid' ? '#ffffff' : 'transparent'};
	color: ${({ theme }) => (theme === 'solid' ? '#000000' : '#ffffff')};
	font-family: 'bsc-regular';
	text-transform: uppercase;
	padding: 6px 0;
	cursor: pointer;
`;

export const CustomButton = ({
	onClick,
	children,
	size,
	theme,
}: {
	onClick: () => void;
	children: React.ReactNode;
	size: 'small' | 'large';
	theme: 'solid' | 'borderline';
}) => (
	<Button onClick={onClick} size={size} theme={theme}>
		{children}
	</Button>
);
