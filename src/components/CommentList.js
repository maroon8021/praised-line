import React from 'react'
import PropTypes from 'prop-types'

const CommentList = ({id, icon, text}) => {

	return (
		<div className="message comment-list">
		  <div className="message-body comment-list-body">
			  <div className="icon">{icon}</div>
			  <div className="text">{text}</div>
		  </div>
		</div>
	)
}

CommentList.propTypes = {
	id: PropTypes.number,
	icon: PropTypes.string,
	text: PropTypes.string
}

export default CommentList
