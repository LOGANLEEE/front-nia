import React from 'react';

import { Wrapper } from './Wrapper';

interface Props {
	className?: string;
}

export const Template = ({ className }: Props) => {
	return <Wrapper className={className}>Template</Wrapper>;
};
