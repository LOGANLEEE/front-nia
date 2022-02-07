import React from 'react';

import { Wrapper } from './Wrapper';

interface Props {
	className?: string;
}

export const PostView = ({ className }: Props) => {
	return <Wrapper className={className}>PostView</Wrapper>;
};
