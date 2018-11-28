import { connect } from 'react-redux'
import FeedContainer from '../components/FeedContainer'


// Common one?
const mapStateToProps = state => ({
  feeds: state.feeds
})


const mapDispatchToProps = dispatch => ({
  addComment: (id, content) => dispatch(addComment(id, content))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedContainer)
