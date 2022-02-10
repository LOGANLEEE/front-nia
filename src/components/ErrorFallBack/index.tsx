import React from 'react';
import { FallbackProps } from 'react-error-boundary';

import { Wrapper } from './Wrapper';

interface Props {
	className?: string;
}

export const ErrorFallBack = ({ className }: Props & FallbackProps) => {
	return <Wrapper className={className}>ErrorFallBack</Wrapper>;
};
