import { combineReducers } from 'redux'
import feeds from './feeds'
import comments from './comments'
export default combineReducers({
	feeds,
	comments
})
