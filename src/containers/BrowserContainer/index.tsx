import React from 'react';

import { Wrapper } from './Wrapper';

interface Props {
	className?: string;
}

export const BrowserContainer = ({ className }: Props) => {
	return <Wrapper className={className}>BrowserContainer</Wrapper>;
};
