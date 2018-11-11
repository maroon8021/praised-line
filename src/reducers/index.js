import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import feeds from './feeds'
export default combineReducers({
  todos,
	visibilityFilter,
	feeds
})
