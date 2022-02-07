import React from 'react';

import { PostView } from '../../components/Template/PostView';
import { Wrapper } from './Wrapper';

interface Props {
	className?: string;
}

export const MobileCotainer = ({ className }: Props) => {
	return (
		<Wrapper className={className}>
			<PostView />
		</Wrapper>
	);
};
