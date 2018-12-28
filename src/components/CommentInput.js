import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addComment } from '../actions';

const CommentInput = ({addComment, contents}) => {

	let input

	let onSubmit = (e) => {
		e.preventDefault();
		if (!input.value.trim()) {
			return
		}
		addComment(contents.id, input.value)
		input.value = ''
	}

	return (
		<div className="comment-input">
		  <form onSubmit={onSubmit}>
			  <input className="input is-rounded" type="text" placeholder="Rounded input" ref={node => (input = node)} />
			  <button type="submit" className="button is-primary is-rounded" >Rounded</button>
			</form>
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


/*
dispatchを受けとるには App.js 内に囲まれていなければいけない 
　-> そこにcommentを配置してしまうとelementの場所が変になる
Feed内にやった場合はどうやってdispatchを渡すか
　-> propで渡してやるか
commentは別のstateで持つべきではないか
　-> ?

*/