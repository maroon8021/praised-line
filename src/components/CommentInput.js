import React from 'react'
import PropTypes from 'prop-types'

const CommentInput = (contents) => {

	return (
		<div className="comment-input-area">
      <input className="input is-rounded" type="text" placeholder="Rounded input" />
		</div>
	)
}

/*
CommentInput.propTypes = {
  id: PropTypes.string,
	icon: PropTypes.string,
	text: PropTypes.string
}
*/

export default CommentInput
