import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import styled from 'styled-components';

import { PostView } from './containers/PostView';
function App() {
	return (
		<Wrapper>
			<MobileView>
				mobile
				<PostView />
			</MobileView>
			<BrowserView>
				browser
				<PostView />
			</BrowserView>
		</Wrapper>
	);
}

export default App;

const Wrapper = styled.div``;
