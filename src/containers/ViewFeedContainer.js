import { connect } from 'react-redux'
import FeedContainer from '../components/FeedContainer'
import { addComment } from '../actions/index'

// Common one?
const mapStateToProps = state => ({
  feeds: state.feeds,
  comments : state.comments
})


const mapDispatchToProps = dispatch => ({
  addComment: (id, content) => dispatch(addComment(id, content))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedContainer)