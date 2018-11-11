import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

import styles from '../scss/style.scss'
import HeaderNavi from './HeaderNavi';
import TopView from './TopView';
import ViewFeedContainer from '../containers/ViewFeedContainer';

const App = () => (
  <div>
		<HeaderNavi />
		<TopView />
		<ViewFeedContainer />
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)
export default App
