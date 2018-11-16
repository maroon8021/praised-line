import React from 'react'
import PropTypes from 'prop-types'

const Comment = (contents) => {

	return (
		<div className="comment-area">
      <div className="icon">{contents.icon}</div>
      <div className="text">{contents.text}</div>
		</div>
	)
}

Comment.propTypes = {
  id: PropTypes.string,
	icon: PropTypes.string,
	text: PropTypes.string
}

export default Comment
