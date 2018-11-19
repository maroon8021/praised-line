import React from 'react'
import PropTypes from 'prop-types'

const CommentList = (contents) => {

	return (
		<div className="comment-area-inner">
      <div className="icon">{contents.icon}</div>
      <div className="text">{contents.text}</div>
		</div>
	)
}

CommentList.propTypes = {
  id: PropTypes.string,
	icon: PropTypes.string,
	text: PropTypes.string
}

export default CommentList
