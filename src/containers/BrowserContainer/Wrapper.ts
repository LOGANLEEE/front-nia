import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100vw;
	background-color: ${({
		theme: {
			dark: { bg },
		},
	}) => bg};
	color: ${({
		theme: {
			dark: { fg },
		},
	}) => fg};
`;
