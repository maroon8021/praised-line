import React from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList'
import CommentInput from './CommentInput';

const Feed = ({ contents, comments, addComment }) => {
	let commentList = null;
	console.log(contents)
	console.log(comments)
	if (comments) {
		commentList = comments.map(comment => {
			if(contents.id === comment.feedId){
				return <CommentList key={comment.id} {...comment} />
			}
		})
	}

	return (
		<div className="card article">
			<div className="card-content">
				<div className="media">
					<div className="media-center">
						<img src="http://www.radfaces.com/images/avatars/daria-morgendorffer.jpg" className="author-image" alt="Placeholder image" />
					</div>
					<div className="media-content has-text-centered">
						<p className="title article-title">{contents.title}</p>
						<p className="subtitle is-6 article-subtitle">
							<a href="#">@{contents.userName}</a> {contents.date}
						</p>
					</div>
				</div>
				<div className="content article-body">
					<p>{contents.text}</p>
					<h3 className="has-text-centered">hoge</h3>
				</div>
				<div className="communication-buttons">
					<div className="like-button">
						<a className="button is-white">Like</a>
					</div>
					<div className="comment-button">
						<a className="button is-white">Comment</a>
					</div>
				</div>

				<div className="comment-area">
				{commentList}
				<CommentInput addComment={addComment} contents={contents} />
				</div>
			</div>
		</div>
	)
}

Feed.propTypes = {
	id: PropTypes.number, //can be fixed to string
	title: PropTypes.string,
	userName: PropTypes.string,
	date: PropTypes.string,
	text: PropTypes.string,
	comments: PropTypes.array,
}

export default Feed


/*
<div className="comment-area">
				  {contents.comments.map(comment => (
						<CommentList key={comment.id} {...comment} />
					))}
					<CommentInput userId={contents.id} />
				</div>

 */
