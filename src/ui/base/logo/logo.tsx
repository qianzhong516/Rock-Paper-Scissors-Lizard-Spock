import styled from 'styled-components';

const LogoContainer = styled.div`
	padding: 8px 0;
`;

export const Logo = ({
	width,
	height,
}: {
	width?: number;
	height?: number;
}) => (
	<LogoContainer>
		<img
			width={width}
			height={height}
			src={process.env.REACT_APP_PUBLIC_URL + '/assets/logo.svg'}
			alt='logo'
		/>
	</LogoContainer>
);
