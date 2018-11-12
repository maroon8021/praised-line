import React from 'react'

import styles from '../scss/style.scss'
import HeaderNavi from './HeaderNavi';
import TopView from './TopView';
import ViewFeedContainer from '../containers/ViewFeedContainer';

const App = () => (
  <div>
		<HeaderNavi />
		<TopView />
		<ViewFeedContainer />
  </div>
)
export default App
