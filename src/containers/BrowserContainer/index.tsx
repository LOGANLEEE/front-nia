import { PostView } from 'components/PostView';
import React from 'react';

import { Wrapper } from './Wrapper';

interface Props {
	className?: string;
}

export const BrowserContainer = ({ className }: Props) => {
	return (
		<Wrapper className={className}>
			<PostView />
		</Wrapper>
	);
};
