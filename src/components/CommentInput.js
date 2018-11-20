import React from 'react'
import PropTypes from 'prop-types'

const CommentInput = (contents) => {

	constructor() {
    super();
		this.input = this.input.bind(this);
	};

	return (
		<div className="comment-input">
		  <form onSubmit={onSubmit}>
			  <input className="input is-rounded" type="text" placeholder="Rounded input" ref={node => (this.input = node)} />
			  <button type="submit" className="button is-primary is-rounded" >Rounded</button>
			</form>
		</div>
	)
}

let onSubmit = (e) => {
	e.preventDefault();
	if (!input.value.trim()) {
		return
	}
	dispatch(addComment({
		id : contents.id,
		text : input.value
	}))
	input.value = ''
}

/*
CommentInput.propTypes = {
  id: PropTypes.string,
	icon: PropTypes.string,
	text: PropTypes.string
}
*/

export default CommentInput
