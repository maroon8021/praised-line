import React from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'

const Feed = (contents) => {

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
				  {contents.comments.map(comment => (
						<Comment key={comment.id} {...comment} />
					))}
				</div>
			</div>
		</div>
	)
}

Feed.propTypes = {
	id: PropTypes.number.isRequired, //can be fixed to string
	title: PropTypes.string.isRequired,
	userName: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	comments: PropTypes.array
}

export default Feed
