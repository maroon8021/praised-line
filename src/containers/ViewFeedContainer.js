import { connect } from 'react-redux'
import FeedContainer from '../components/FeedContainer'


// Common one?
const mapStateToProps = state => ({
  feeds: state.feeds
})

/*
const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})
*/

export default connect(
  mapStateToProps
)(FeedContainer)
