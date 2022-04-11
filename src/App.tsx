import React, { useEffect } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { RecoilRoot, useRecoilSnapshot } from 'recoil';
import { ThemeProvider } from 'styled-components';

import { BrowserContainer } from './containers/BrowserContainer';
import { MobileCotainer } from './containers/MobileCotainer';

function App() {
	const theme = {
		dark: { bg: '#141111', fg: '#9bb295' },
	};

	const DebugObserver = () => {
		const snapshot = useRecoilSnapshot();
		useEffect(() => {
			// eslint-disable-next-line no-restricted-syntax
			for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
				console.debug('key:', node?.key, snapshot?.getLoadable(node).contents);
			}
		}, [snapshot]);

		return null;
	};
	return (
		<RecoilRoot>
			<DebugObserver />
			<ThemeProvider theme={theme}>
				<MobileView>
					<MobileCotainer />
				</MobileView>
				<BrowserView>
					<BrowserContainer />
				</BrowserView>
			</ThemeProvider>
		</RecoilRoot>
	);
}

export default App;
