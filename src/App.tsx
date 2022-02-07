import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { ThemeProvider } from 'styled-components';

import { BrowserContainer } from './containers/BrowserContainer';
import { MobileCotainer } from './containers/MobileCotainer';

function App() {
	const theme = {
		isDarkMode: false,
	};

	return (
		<ThemeProvider theme={theme}>
			<MobileView>
				<MobileCotainer />
			</MobileView>
			<BrowserView>
				<BrowserContainer />
			</BrowserView>
		</ThemeProvider>
	);
}

export default App;
