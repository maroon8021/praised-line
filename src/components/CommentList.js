import React from 'react'
import PropTypes from 'prop-types'

const CommentList = ({id, icon, text}) => {

	return (
		<div className="comment-list">
			<div className="icon">{icon}</div>
			<div className="text">{text}</div>
		</div>
	)
}

CommentList.propTypes = {
	id: PropTypes.number,
	icon: PropTypes.string,
	text: PropTypes.string
}

export default CommentList
