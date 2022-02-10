import { ErrorFallBack } from 'components/ErrorFallBack';
import { PostView } from 'components/PostView';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { Wrapper } from './Wrapper';

interface Props {
	className?: string;
}

export const MobileCotainer = ({ className }: Props) => {
	return (
		<Wrapper className={className}>
			{/* <ErrorBoundary
				FallbackComponent={ErrorFallBack}
				onReset={() => {
					// reset the state of your app so the error doesn't happen again
				}}> */}
			<PostView />
			{/* </ErrorBoundary> */}
		</Wrapper>
	);
};
